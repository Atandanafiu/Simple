const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Simple", function () {

  beforeEach(async function (){
    let simple, Simple
    Simple = await ethers.getContractFactory("Simple")
    simple = Simple.deploy();
  })
  it("Should start with favorite number of 0", async function () {
    const currentValu = await simple.retrieve()
    const expectedValue = "0"

    assert.equal(currentValu.toString(), expectedValue)
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
  });

  it("Should update when call store", async function(){
    const expectedValue= "7";
    const transactionResponse = await simple.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValu = await simple.retrieve();
    assert.equal(currentValu.toString(),  expectedValue)
  });
});
