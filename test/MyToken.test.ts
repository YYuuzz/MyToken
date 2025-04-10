import { loadFixture, ethers, expect } from "./setup";

describe("MyToken", function() {
    async function deploy() {
        const [owner, seller1, seller2, buyer1, buyer2] = await ethers.getSigners(); // exist 20 users

        const Factory = await ethers.getContractFactory("MyToken"); // name contract
        const shop = await Factory.deploy(owner, owner); // params start contract
        await shop.waitForDeployment(); // awaiting confirmation of the transaction

        return {owner, seller1, seller2, buyer1, buyer2, shop}
    }

    it("Should have an owner and a token", async function() {
        const { owner, seller1, seller2, buyer1, buyer2, shop } = await loadFixture(deploy);
        
        console.log("owner:", owner.address);
        console.log("shop:", shop.target);
        console.log("seller1:", seller1.address);
        console.log("buyer1:", buyer1.address);

        expect(await shop.owner()).to.be.eq(owner);
    })
});
