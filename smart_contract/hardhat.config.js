require("@nomicfoundation/hardhat-toolbox");

// https://eth-goerli.g.alchemy.com/v2/LN1FIPXXAl5P8TtgI28sKqC4l87f4mOb

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-mainnet.g.alchemy.com/v2/xKsybOTZFcKdF4vdnsjPM7yv8lK2W1WN",
      accounts: ['928c2063f46f0a8156dc87494ad5213828b17608f1eda656b2318ce7e02f2907'],
    }
  }
};
