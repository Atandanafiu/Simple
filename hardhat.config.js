require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block_number")
require("hardhat-gas-reporter");
require("solidity-coverage");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY 
const COIN_MARKET_CAP = process.env.COIN_MARKET_CAP
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/aab825c5b8a24c8fbfb7bb0ebf7cfd65",
      accounts: [PRIVATE_KEY],
      chainId: 3,
    },
    localhost:  {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apikey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enable: true,
    outputFile: "gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COIN_MARKET_CAP, 
  }
};
