# Getting Started with Create React App

This document provides detailed documentation for each method in the Charity DApp Solidity smart contract.

## Withdraw

### Description

Allows the owner of the contract to withdraw a specified amount of Ether from the contract balance.

### Parameters

- `uint256 _amount`: Amount of Ether (in Wei) to withdraw from the contract.

### Example

```solidity
// Example usage of withdrawFunds function
function withdrawFunds(uint256 _amount) external onlyOwner {
    require(balances[address(this)] >= _amount, "Insufficient funds");
    payable(owner).transfer(_amount);
    balances[address(this)] -= _amount;
}
```

## Donate

### Description

Allows users to donate Ether to the charity. Each donation is recorded with a message from the donor.

### Parameters

- string memory \_message: Message provided by the donor along with the donation.

### Example

```solidity
// Example usage of donate function
function donate(string memory _message) external payable {
    require(msg.value > 0, "Donation amount must be greater than 0");

    uint256 donationId = donationCount;
    donations[donationId] = Donation(msg.sender, _message, msg.value, false);
    donationCount++;

    emit DonationReceived(donationId, msg.sender, _message, msg.value);

    balances[address(this)] += msg.value;
}

```

## Reward Donor

### Description

Allows the owner of the contract to reward a donor with a virtual coin or token (conceptual representation).

### Parameters

- uint256 \_donationId: ID of the donation to reward.

### Example

```solidity
// Example usage of rewardDonor function
function rewardDonor(uint256 _donationId) external onlyOwner {
    require(_donationId < donationCount, "Invalid donation ID");
    require(!donations[_donationId].rewarded, "Donor has already been rewarded");

    address donor = donations[_donationId].donor;
    uint256 amountDonated = donations[_donationId].amount;

    balances[donor] += amountDonated;

    donations[_donationId].rewarded = true;
}


```

## Get Donor Balance

### Description

Returns the balance of virtual coins or tokens (conceptual) for a specific donor.

### Parameters

- address \_donor: Address of the donor whose balance is to be retrieved.

### Example

```solidity
// Example usage of getDonorBalance function
function getDonorBalance(address _donor) external view returns (uint256) {
    return balances[_donor];
}

```

## Receive Function

### Description

Allows the current owner of the contract to transfer ownership to a new address.

### Parameters

- address \_newOwner: Address of the new owner.

### Example

```solidity
// Example usage of receive function
receive() external payable {
    emit DonationReceived(donationCount, msg.sender, "", msg.value);
    donationCount++;
    balances[address(this)] += msg.value;
}

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
