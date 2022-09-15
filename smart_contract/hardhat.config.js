require("@nomiclabs/hardhat-waffle")

const { mnemonic, alchemyApiKey, url, privateKey } = require("./secrets.json")

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `${url}${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
      //   accounts: [privateKey]
    },
  },
}
