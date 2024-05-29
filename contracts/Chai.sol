// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chai {
    address public owner; // Owner of the contract

    // Struct to represent a donation
    struct Donation {
        address donor; // Address of the donor
        string message; // Message provided by the donor
        uint256 amount; // Amount donated in wei
        bool rewarded; // Flag to track if donor has been rewarded
    }

    // Mapping to store donations
    mapping(uint256 => Donation) public donations;
    uint256 public donationCount; // Counter for donations

    // Mapping to store the balance received by the contract
    mapping(address => uint256) public balances;

    // Event to log donations
    event DonationReceived(
        uint256 donationId,
        address indexed donor,
        string message,
        uint256 amount
    );

    // Constructor to set the owner of the contract
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict functions to the owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Function to donate to the charity
    function donate(string memory _message) external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");

        uint256 donationId = donationCount;
        donations[donationId] = Donation(
            msg.sender,
            _message,
            msg.value,
            false
        );
        donationCount++;

        // Emit an event to log the donation
        emit DonationReceived(donationId, msg.sender, _message, msg.value);

        // Update the balance of the contract
        balances[address(this)] += msg.value;
    }

    // Function to reward donors with a coin (token) for their generosity
    function rewardDonor(uint256 _donationId) external onlyOwner {
        require(_donationId < donationCount, "Invalid donation ID");
        require(
            !donations[_donationId].rewarded,
            "Donor has already been rewarded"
        );

        address donor = donations[_donationId].donor;
        uint256 amountDonated = donations[_donationId].amount;

        // Simulate minting a coin or token to the donor (in practice, use a token standard like ERC20)
        // Here, we increase the balance of the donor by the amount they donated
        balances[donor] += amountDonated;

        // Mark the donation as rewarded
        donations[_donationId].rewarded = true;
    }

    // Function to withdraw funds from the contract (only owner)
    function withdrawFunds(uint256 _amount) external onlyOwner {
        require(balances[address(this)] >= _amount, "Insufficient funds");
        payable(owner).transfer(_amount);
        balances[address(this)] -= _amount;
    }

    // Function to get contract's balance in Wei
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // Function to get donor's balance of tokens/coins (not implemented for real token)
    function getDonorBalance(address _donor) external view returns (uint256) {
        return balances[_donor];
    }

    // Function to change owner of the contract (only current owner can call)
    function changeOwner(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Invalid new owner address");
        owner = _newOwner;
    }

    // Fallback function to receive Ether donations
    receive() external payable {
        emit DonationReceived(donationCount, msg.sender, "", msg.value);
        donationCount++;

        // Update the balance of the contract
        balances[address(this)] += msg.value;
    }
}
