// test/DKRCoin.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DKRCoin", function () {
    let DKRCoin;
    let dkrCoin;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        DKRCoin = await ethers.getContractFactory("DKRCoin");
        dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();
    });

    it("Should set the owner as the deployer", async function () {
        expect(await dkrCoin.owner()).to.equal(owner.address);
    });

    // Add more tests as needed

});
