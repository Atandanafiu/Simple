//Imports
const { getContractAddress } = require("ethers/lib/utils");
const {ethers, run, network  } = require("hardhat");

//Async functions
async function main() {
// We get the contract to deploy
  const Simple = await ethers.getContractFactory("Simple");
  const simple = await Simple.deploy();
  await simple.deployed();
  console.log("Dapp storage deployed to:", simple.address);

  if (network.config.chainId === 3 && ETHERSCAN_API_KEY) {
    await simple.deployTransaction.wait(6);
    await verify(simple.address, []);
   
    //Updating the currnet value 
    const currentValu = await simple.retrieve();
    console.log(currentValu);

    const transactionResponse = await simple.store(7);
    await transactionResponse.wait(2);
    const updateValue = await simple.retrieve();
    console.log(updateValue);
  }

  async function verify(){
    console.log("Deploying ......");
    try {
      await run("verify:verify", {
        address: getContractAddress,
        constructorArguments: arg,
      })
    } catch (error) {
      if (error.message.toLowerCase().include("already verified")) {
        console.log("Already Verified");
      }else{
        console.log(error)
      }
    } 
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  