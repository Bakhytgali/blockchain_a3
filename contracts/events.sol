// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ReviewContract {
    event ReviewSubmitted(address indexed sender, string review);

    constructor() {}

    function submitReview(string memory _review) public {
        emit ReviewSubmitted(msg.sender, _review);
    }
}