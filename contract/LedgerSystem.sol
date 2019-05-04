pragma solidity ^0.5.1;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

library LedgerSystem {
    using SafeMath for uint256;
    struct Data { 
        mapping(uint256 => Ledger) ledgers;
        uint256 index;
    }
    
    struct Ledger {
        uint256 amount;
        bool positive;
        string desc;
    }
    
    function operation(
        Data storage self,
        uint256 _amount,
        bool _positive,
        string memory _desc
    ) 
        internal 
    {
        self.ledgers[self.index] = Ledger({
            amount: _amount,
            positive: _positive,
            desc: _desc
        });
        self.index += 1;
    }
    
    function getBalance(
        Data storage self,
        uint256 _init
    ) 
        internal
        view 
        returns (uint256)
    {
        uint256 base = _init;
        for(uint64 i=0; i<self.index; i++) {
            if(self.ledgers[i].positive) {
                base = base.add(self.ledgers[i].amount);
            } else {
                base = base.sub(self.ledgers[i].amount);
            }
        }
        return base;
    }
}
