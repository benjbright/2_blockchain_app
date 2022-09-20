const { expect } = require("chai")

describe("Crypto transfer contract", function () {
  it("Initial transfer count is zero", async function () {
    const [owner] = await ethers.getSigners()
    const transferContract = await ethers.getContractFactory("Transactions")
    const deployedContract = await transferContract.deploy()
    console.log("Deploying contract...")

    const transferCount = await deployedContract.getTransactionCount()

    expect(transferCount).to.equal(0)
  })

  it("Should emit transfer events", async function () {
    const [owner, addr1] = await ethers.getSigners()
    const transferContract = await ethers.getContractFactory("Transactions")
    const deployedContract = await transferContract.deploy()
    console.log("Deploying contract...")

    const timeStamp = (await ethers.provider.getBlock("latest")).timestamp
    console.log(`The latest block timestamp is ${timeStamp}`)

    await expect(
      deployedContract.addToBlockchain(
        addr1.address,
        1000000,
        "Test",
        "Test transaction"
      )
    )
      .to.emit(deployedContract, "Transfer")
      .withArgs(
        owner.address,
        addr1.address,
        1000000,
        "Test",
        timeStamp + 1,
        "Test transaction"
      )
  })

  it("A completed transfer should add to the transactions log", async function () {
    const [owner, addr1] = await ethers.getSigners()
    const transferContract = await ethers.getContractFactory("Transactions")
    const deployedContract = await transferContract.deploy()
    const provider = ethers.provider
    console.log("Deploying contract...")
    await deployedContract.deployed()
    console.log(`Contract address: ${deployedContract.address}`)

    await deployedContract.addToBlockchain(
      addr1.address,
      1000000,
      "Test",
      "Test transaction"
    )

    await deployedContract.deployTransaction.wait(2)

    const transferArray = await deployedContract.getAllTransactions()
    const balance = await provider.getBalance(addr1.address)

    console.log(`Receiver address: ${transferArray[0].receiver}`)
    console.log(`Receiver balance: ${balance}`)

    expect(transferArray.length).to.equal(1)
    expect(addr1.address).to.equal(transferArray[0].receiver)
  })
})
