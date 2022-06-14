const {task} = require("hardhat/config")

task("block_number", "print the current block number").setAction(
    async (taskArgs, hre) => {
        const block_number = await hre.ethers.provider.getBlockNumber();
        console.log(block_number)
    }
)