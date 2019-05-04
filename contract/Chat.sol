pragma solidity ^0.5.1;

contract Chat {
    event SendMsg(address, string);
    function sendmsg(string memory msg, address user) internal {
        emit SendMsg(user, msg);
    }
}
