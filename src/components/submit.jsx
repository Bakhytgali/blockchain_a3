// import React, { useState } from 'react';
// import Web3 from 'web3'; // or import ethers from 'ethers';
// import ReviewContractABI from './ReviewContractABI.json'; // Assuming you have the ABI JSON file
// import ReviewContractAddress from './ReviewContractAddress.json';
// import web3 from "web3/src/web3"; // Assuming you have the contract address JSON file
//
// const Submit = () => {
//     const [review, setReview] = useState('');
//
//     // Function to handle review submission
//     const handleSubmit = async () => {
//         try {
//             // Check if MetaMask is installed and enabled
//             if (window.ethereum) {
//                 // Request access to the user's MetaMask account
//                 await window.ethereum.request({ method: 'eth_requestAccounts' });
//
//                 // Get the current provider from MetaMask
//                 const provider = new Web3(window.ethereum);
//
//                 // Get the contract instance
//                 const contract = new provider.eth.Contract(ReviewContractABI, ReviewContractAddress);
//
//                 // Submit the review to the contract
//                 const accounts = await provider.eth.getAccounts();
//                 await contract.methods.submitReview(review).send({ from: accounts[0], value: web3.utils.toWei('0.02', 'ether') });
//
//                 // Clear the review input after submission
//                 setReview('');
//             } else {
//                 alert('Please install MetaMask to submit a review.');
//             }
//         } catch (error) {
//             console.error('Error submitting review:', error);
//         }
//     };
//
//     return (
//         <div style={{paddingTop: "50px", color: "#fff"}}>
//             <h4>You can leave your review about our app!</h4>
//             <form style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
//                 <input type="text" style={{height: "100px", width: "100%"}} value={review} onChange={(e) => setReview(e.target.value)} />
//                 <button type="button" style={{width: "100px", marginTop: "30px", backgroundColor: "inherit", color: "white",
//                     padding: "3px 14px", border: "2px solid #fff", borderRadius: "5px"}} onClick={handleSubmit}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default Submit;
