// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract chai is Ownable{
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    event ChaiBought(
        string name,
        string message,
        uint256 timestamp,
        address buyer,
        uint256 amountPaid
    );

    event AddressAddedToWhitelist(address indexed addedAddress);
    event AddressRemovedFromWhitelist(address indexed removedAddress);

    Memo[] memos;
    address payable owner_address;

    constructor() {
        owner_address = payable(msg.sender);
    }

    function buyChai(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner_address.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
        emit ChaiBought(name, message, block.timestamp, msg.sender, msg.value);
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    mapping(address => bool) public whitelist;

    function addToWhitelist(address[] calldata toAddAddresses) 
    external onlyOwner
    {
        for (uint i = 0; i < toAddAddresses.length; i++) {
            whitelist[toAddAddresses[i]] = true;
        }
    }

    function removeFromWhitelist(address[] calldata toRemoveAddresses)
    external onlyOwner
    {
        for (uint i = 0; i < toRemoveAddresses.length; i++) {
            delete whitelist[toRemoveAddresses[i]];
        }
    }
}
