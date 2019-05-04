pragma solidity ^0.5.1;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./LedgerSystem.sol";
import "./MushroomGameSystem.sol";
import "./Chat.sol";

contract Mushroom is Ownable, Chat {
    using LedgerSystem for LedgerSystem.Data;
    using MushroomGameSystem for MushroomGameSystem.Data;
    
    mapping(address => User) users;
    address[] all_users;
    MushroomGameSystem.Data mushroomGames;
    uint256 public mushroom_eth_rate;
    mapping(uint256=>uint256) grade;
    mapping(uint256=>uint256) gradeList;
    
    struct User {
        uint256 registerBlockheight;
        uint8 gameIndex;
        LedgerSystem.Data ledger;
    }
    
    constructor () public {
        mushroomGames = MushroomGameSystem.Data(0);
        mushroom_eth_rate = 1E14;
    }
    
    function getAllUsers() public view returns(address[] memory) {
        return all_users;
    }
    
    function isRegister(address _addr) public view returns (bool) {
        if(users[_addr].registerBlockheight != 0) {
            return true;
        }
        return false;
    }
    
    function registerUser() public {
        require(users[msg.sender].registerBlockheight == 0, "you have registered");
        all_users.push(msg.sender);
        users[msg.sender] = User({
            registerBlockheight: block.number,
            gameIndex: 0,
            ledger: LedgerSystem.Data(0)
        });
    }
    
    function getGuCoin(address _user) public view returns (uint256) {
        User storage user = users[_user];
        if(isRegister(_user)) {
            uint256 base = (block.number - user.registerBlockheight);
            return user.ledger.getBalance(base);
        }
    }
    
    function buyGuCoin() public payable {
        require(msg.value / mushroom_eth_rate > 1, "Not enough money");
        User storage _u = users[msg.sender];
        _u.ledger.operation(msg.value / mushroom_eth_rate, true, "buy Gu Coin");
    }
    
    function newGame(uint256 game_block) public payable returns(uint256) {
        return mushroomGames.newGame(msg.sender, msg.value, 500, game_block);
    }
    
    function joinGame(uint256 game_id) public returns (bool) {
        return mushroomGames.joinGame(game_id, msg.sender);
    }
    
    function gameWithTeam(uint256 game_index, uint8 team_index) 
        public
        view
        returns (
            uint256,    // score
            address[] memory,  // team_members
            uint8[] memory     // level
        )
    {
        uint256 score = mushroomGames.calcMushroom(
            game_index,
            team_index,
            block.number);
        address[] memory addresses;
        uint8[] memory levels;
        (addresses, levels) = mushroomGames.getTeamMember(game_index, team_index);
        return (score, addresses, levels);
    }
    
    function getBankerGame(address _addr) view public returns (bool, uint256) {
        return mushroomGames.getBankerGame(_addr);
    }
    
    function buyItem(address _addr, uint256 game_index, uint8 item_ind) payable public {
        uint256 pay = mushroomGames.buyItem(_addr, game_index, item_ind);
        require(msg.value >= pay, "insufficient balance");
        mushroomGames.addUserDeposit(game_index, pay);
    }
    
    function getGameInfo(uint256 game_index) 
        public 
        view 
        returns (
            string memory,     // pending || started || aborted || ended
            address[] memory,  // participants
            uint256,    // created_at_block
            uint256,    // game_start_at
            uint256,    // pending_block
            uint256,    // banker_deposit
            uint256,    // user_deposit
            uint8,      // team count
            address
        )
    {
        return mushroomGames.getGameInfo(game_index);
    }
    
    function getPlayerGame(address _addr) view public returns (bool, uint256) {
        return mushroomGames.getPlayerGame(_addr);
    }
 
    function getGameId() view public returns(uint256[] memory) {
        uint256[] memory ids = new uint256[](mushroomGames.index);
        uint256 idx = 0;
        for(uint256 i = 0 ; i < mushroomGames.index; i++ ){
            if(!mushroomGames.isEnd(i)) {
                ids[idx] = i;
                idx += 1;
            }
        }
        return ids;
    }
    
    function getNowGame() view public 
        returns(
            uint256,  // banker
            uint256,  // user
            uint256   // remain blocks
        )
    {
        for(uint256 i = 0 ; i < mushroomGames.index; i++ ){
            if(!mushroomGames.isEnd(i)) {
                return (
                    1,
                    mushroomGames.mushroomGames[i].gamer_count,
                    mushroomGames.mushroomGames[i].pending_block - (
                        block.number - mushroomGames.mushroomGames[i].created_at_block)
                );
            }
        }
    }
    
    function bankerClaim(uint256 game_index) public {
        require(mushroomGames.mushroomGames[game_index].banker == msg.sender);
        require(mushroomGames.mushroomGames[game_index].isRewardClaim == false);
        uint256 amount = mushroomGames.mushroomGames[game_index].banker_deposit + mushroomGames.mushroomGames[game_index].user_deposit;
        // banker will receive 50% reward. 
        mushroomGames.mushroomGames[game_index].banker.transfer(amount/2);
        mushroomGames.mushroomGames[game_index].isRewardClaim = true;
        
        uint256 max = 0;
        uint256[] memory teams = new uint256[](mushroomGames.mushroomGames[game_index].team_count);

        for(uint8 i = 0; i<mushroomGames.mushroomGames[game_index].team_count; i++) {
            uint256 r = mushroomGames.calcMushroom(game_index, i, block.number);
            if(r > max) {
                max = r;
            }
            teams[i] = r;
        }
        
        uint reward_teams = 0;
        for(uint i=0;i<teams.length;i++) {
            if(teams[i] == max) {
                reward_teams = i+1;
            }
        }
        
        address[] memory members;
        for(uint i=0;i<teams.length;i++) {
            if(teams[i] != max) {
                continue;
            }
            
            (members,) = mushroomGames.getTeamMember(game_index, i);
            for(uint j = 0; j < members.length; j++) {
                uint256 reward = amount/2/reward_teams/members.length;
                address payable m = address(uint160(members[j]));
                m.transfer(reward);
            }
        }
    }
    
    function chat(string memory message) public {
        require(isRegister(msg.sender));
        require(getGuCoin(msg.sender) > 10);
        User storage _u = users[msg.sender];
        _u.ledger.operation(10, false, "chat");
        sendmsg(message, msg.sender);
    }
}

