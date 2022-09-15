const { ethers } = require("hardhat")

const main = async () => {
  const Transactions = await ethers.getContractFactory("Transactions")
  const transactions = await Transactions.deploy()

  await transactions.deployed()

  console.log(`Transactions contract deployed to: ${transactions.address}`)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()

// Contract deployed to Goerli test network at address
// 0x5Bd2759e4c9562c7A20470F0F01B693Fd083bbB6
