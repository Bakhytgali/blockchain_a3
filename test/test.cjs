// Import assertion library
const { expect } = require("chai");

// Define the tests
describe("DKRCoin", function () {
    let DKRCoin;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        DKRCoin = await ethers.getContractFactory("DKRCoin");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    });

    it("Should deploy with correct owner", async function () {
        const dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();

        expect(await dkrCoin.owner()).to.equal(owner.address);
    });

    it("Should mint tokens to owner", async function () {
        const dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();

        await dkrCoin.mintOwner(1);

        expect(await dkrCoin.balanceOf(owner.address)).to.equal(1);
    });

    it("Should not allow public minting when closed", async function () {
        const dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();

        expect(await dkrCoin.publicMintOpen()).to.equal(false);
    });

    it("Should allow adding to whitelist", async function () {
        const dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();

        await dkrCoin.addToWhitelist([addr1.address]);

        expect(await dkrCoin.whitelist(addr1.address)).to.equal(true);
    });

    it("Should allow removing from whitelist", async function () {
        const dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();

        await dkrCoin.addToWhitelist([addr1.address]);
        await dkrCoin.removeFromWhitelist([addr1.address]);

        expect(await dkrCoin.whitelist(addr1.address)).to.equal(false);
    });

    it("Should withdraw funds", async function () {
        const dkrCoin = await DKRCoin.deploy();
        await dkrCoin.deployed();

        await dkrCoin.mintOwner(1);

        const initialBalance = await ethers.provider.getBalance(owner.address);
        await dkrCoin.withdraw(owner.address);
        const finalBalance = await ethers.provider.getBalance(owner.address);

        expect(finalBalance).to.be.above(initialBalance);
    });
});
