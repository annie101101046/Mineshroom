pragma solidity ^0.5.1;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

library MushroomGameSystem {
    using SafeMath for uint256;

    struct Data {
        mapping(uint256 => MushroomGame) mushroomGames;
        uint256 index;
    }
    
    struct MushroomGame {
        address payable banker;
        mapping(address => uint8) levels;
        mapping(address => uint8) team_member;
        mapping(uint256 => GuGuLedger) ledgers;
        mapping(uint8 => Item) items;
        mapping(uint8 => address) gamer;
        uint256 banker_deposit;
        uint256 user_deposit;
        uint256 created_at_block;
        uint256 game_start_at;
        uint256 gaming_block;
        uint256 ledger_count;
        uint256 pending_block;
        uint8 gamer_count;
        uint8 items_count;
        uint8 team_count;
        bool isRewardClaim;
    }
    
    struct Item {
        bool unique;    //buy once only
        string name;
        uint32 duration;
        uint256 price;
        uint8 mushroom_rate;
        uint8 production_rate;
    }
    
    struct GuGuLedger {
            uint8 item_index;
            address user;
            bool isLevel;
            uint256 block;
            uint8 team_index;
            uint8 user_level;
    }
    
    function buyItem(
        Data storage self,
        address _addr,
        uint256 game_index,
        uint8 item_ind
    ) 
        internal 
        returns (uint256)
    {
        MushroomGame storage m = self.mushroomGames[game_index];
        bool il = false;
        if(m.items[item_ind].mushroom_rate != 0) {
            il = true;
        }
        
        m.ledgers[m.ledger_count] = GuGuLedger({
            item_index: item_ind,
            user: _addr,
            isLevel: il,
            block: block.number,
            team_index: m.team_member[_addr],
            user_level: m.levels[_addr]
        });
        m.ledger_count = m.ledger_count.add(1);
        return (uint256(m.levels[_addr]).mul(m.items[item_ind].price));
    }
    
    function getTeamMember(
        Data storage self,
        uint256 game_index,
        uint256 team_index
    ) 
        internal
        view
        returns (address[] memory, uint8[] memory) 
    {
        MushroomGame storage _m = self.mushroomGames[game_index];
        address[] memory addresses = new address[](
            uint256(_m.gamer_count).div(uint256(_m.team_count)));
        uint8[] memory levels = new uint8[](
            uint256(_m.gamer_count).div(uint256(_m.team_count)));
        uint256 idx = 0;
        for(uint8 i=0; i< _m.gamer_count; i++) {
            if(_m.team_member[_m.gamer[i]] == team_index) {
                addresses[idx] = _m.gamer[i];
                levels[idx] = _m.levels[_m.gamer[i]];
                idx = idx.add(1);
            }
        }
        return (addresses, levels);
    }
    
    function getPlayerGame(Data storage self, address _addr) 
        internal 
        view 
        returns(bool, uint256) 
    {
        for(uint256 i=self.index;i>=0;i--) {
            MushroomGame storage _m = self.mushroomGames[i];
            if(_m.created_at_block==0) {
                continue;
            }
            bytes32 status = keccak256(abi.encodePacked(gameStatus(self, i)));
            bytes32 aborted = keccak256(abi.encodePacked("aborted"));
            bytes32 ended = keccak256(abi.encodePacked("ended"));
            if(status == aborted || status == ended) {
                continue;
            }
            for(uint8 j = 0; j< _m.gamer_count; j++) {
                if(_m.gamer[j] == _addr) {
                    return (true, i);
                }
            }
            if(i == 0) {
                break;
            }
        }
        return (false, 0);
    }
    
    function getGameInfo(
        Data storage self,
        uint256 game_index
    ) 
        internal
        view
        returns (
            string memory,     // pending || started || aborted || ended
            address[] memory,  // participants
            uint256,    // created_at_block
            uint256,    // game_start_at
            uint256,    // pending_block
            uint256,    // banker_deposit
            uint256,    // user_deposit
            uint8,       // team count
            address
        )
    {
        MushroomGame storage _m = self.mushroomGames[game_index];
        address[] memory addr = new address[](_m.gamer_count);
        string memory status;
        status = gameStatus(self, game_index);
        for(uint8 i=0; i<_m.gamer_count; i++) {
            addr[i] = _m.gamer[i];
        }
        return (
            status,
            addr,
            _m.created_at_block,
            _m.pending_block,
            _m.game_start_at,
            _m.banker_deposit,
            _m.user_deposit,
            _m.team_count,
            _m.banker
        );
    }
    
    function getBankerGame(Data storage self, address _banker) 
        internal
        view
        returns (bool, uint256) 
    {
        for(uint256 i=self.index-1; i>=0; i--) {
            if(!isEnd(self, i) && self.mushroomGames[i].banker == _banker) {
                return (true, i);
            }
            if(i == 0) {
                break;
            }
        }
        return (false, 0);
    }

    
    function calcMushroom(
        Data storage self, 
        uint256 game_index,
        uint8 team_index,
        uint256 target_block
    ) 
        view 
        internal
        returns (uint256) 
    {
        MushroomGame storage _m = self.mushroomGames[game_index];
        uint256 total_gugu = 0;
        uint256 end_block = 0;
        if(_m.game_start_at.add(_m.gaming_block) <= target_block) {
            end_block = _m.gaming_block.add(_m.game_start_at);
        } else {
            end_block = target_block;
        }
        for(uint8 x=0;x<_m.gamer_count/_m.team_count; x++) {
            total_gugu = total_gugu.add((end_block.sub(_m.game_start_at)).mul(3));
        }
        
        for(uint256 i=0; i<_m.ledger_count; i++) {
            GuGuLedger memory _l = _m.ledgers[i];
            if(_l.team_index != team_index){
                continue;
            }
            if(_l.isLevel) {
                total_gugu = total_gugu.add((end_block.sub(_l.block)).mul(3));
            } else {
                if(!_m.items[_l.item_index].unique) {
                    Item storage _i = _m.items[_l.item_index];
                    if((_l.block.add(uint256(_i.duration))) > end_block) {
                        total_gugu = total_gugu.add(
                            (end_block.sub(_l.block)).mul(
                                _l.user_level).mul(_i.production_rate));
                    } else {
                        total_gugu += total_gugu.add(
                            uint256(_i.duration).mul(_l.user_level).mul(_i.production_rate));
                    }
                } else {
                    total_gugu = total_gugu.add(calcMushroom(
                        self,
                        game_index,
                        team_index,
                        _l.block));
                }
            }
        }
        return total_gugu;
    }
    
    function newGame(
        Data storage self,
        address payable _banker,
        uint256 _deposit,
        uint256 _pending_block,
        uint256 _gaming_block
    ) 
        internal returns (uint256) 
    {
        self.mushroomGames[self.index] = MushroomGame({
            banker: _banker,
            banker_deposit: _deposit,
            user_deposit: 0,
            gamer_count: 0,
            created_at_block: block.number,
            game_start_at: 0,
            pending_block: _pending_block,
            gaming_block: _gaming_block,
            items_count: 0,
            ledger_count: 0,
            team_count: 2,
            isRewardClaim: false
        });
        self.index += 1;
        
        newGameItem(self, self.index-1, "auntie", 1 finney, 5, 3, 0, false);
        newGameItem(self, self.index-1, "grannie", 1 finney, 5, 2, 0, false);
        newGameItem(self, self.index-1, "cough", _deposit*2 , 1, 0, 2, true);

        return self.index - 1 ;
    }
    
    function newGameItem(
        Data storage self,
        uint256 game_index,
        string memory _name,
        uint256 _price,
        uint32 _duration,
        uint8 _production_rate,
        uint8 _mushroom_rate,
        bool _unique
    ) 
        internal 
    {
        MushroomGame storage _m = self.mushroomGames[game_index];
        _m.items[_m.items_count] = Item({
            name: _name,
            price: _price,
            duration: _duration,
            production_rate: _production_rate,
            mushroom_rate: _mushroom_rate,
            unique: _unique
        });
        _m.items_count += 1;
        
    }
    
    function gameStatus(Data storage self, uint256 index) view internal returns (string memory) {
        MushroomGame memory _m = self.mushroomGames[index];
        string memory status;
        if(_m.game_start_at == 0) {
            if(block.number - _m.created_at_block >= _m.pending_block) {
                status = "aborted";
            } else {
                status = "pending";
            }
        } else {
            if(block.number - _m.game_start_at >= _m.gaming_block) {
                status = "ended";
            } else {
                status = "started";
            }
        }
        return status;
    }
    function isEnd(Data storage self, uint256 index) 
        internal
        view
        returns(bool) 
    {
        MushroomGame storage m = self.mushroomGames[index];
        if(m.game_start_at == 0) {
            if((block.number - m.created_at_block) >= m.pending_block) {
                return true;
            }
        } else {
            if((block.number - m.game_start_at) >= m.gaming_block) {
                return true;
            }
        }
        return false;
    }
    
    function banker_withdrawal(Data storage self, uint256 index) internal {
        MushroomGame storage m = self.mushroomGames[index];
        require(
            m.game_start_at == 0 
            && m.created_at_block + block.number <= m.pending_block);
        require(m.banker.send(m.banker_deposit));
    }
    
    function joinGame(Data storage self, uint256 game_index, address user) 
        internal
        returns (bool) 
    {
        MushroomGame storage _m = self.mushroomGames[game_index];
        if(_m.game_start_at != 0) {
            return false;
        }
        if(_m.gamer_count < 2) {
            _m.gamer[_m.gamer_count] = user;
            _m.levels[user] = 1;
            _m.gamer_count += 1;
        } 
        if(_m.gamer_count >= 2) {
            randomGamer(self, game_index);
            _m.game_start_at = block.number;
        }
        return true;
    }
    
    function randomGamer(Data storage self, uint256 game_index) internal {
        MushroomGame storage _m = self.mushroomGames[game_index];
        for(uint8 i=0; i<_m.gamer_count; i++) {
            _m.team_member[_m.gamer[i]] = (i+1) % 2; 
        }
        return;
    }
    
    function addUserDeposit(Data storage self, uint256 game_index, uint256 balance) internal {
        MushroomGame storage _m = self.mushroomGames[game_index];
        _m.user_deposit = _m.user_deposit.add(balance);
    }
}
