import React, { useState, useEffect } from "react"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../utils/constants"

export const TransactionContext = React.createContext()

// Destructure the object from window.ethereum
const { ethereum } = window

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  )

  console.log({
    provider,
    signer,
    transactionContract,
  })
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("")
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  })
  
  const handleChange = (e, name) => {
    // whenever updating the new state using the old state, provide a callback function and use prevState
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask")

      const accounts = await ethereum.request({ method: "eth_accounts" })

      console.log(accounts)

      if (accounts.length) {
        setCurrentAccount(accounts[0])

        //   getAllTransactions()
      } else {
        console.log("No accounts found")
      }
    } catch (error) {
      console.log(error)

      throw new Error("No ethereum object found.")
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask")

      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)

      throw new Error("No ethereum object found.")
    }
  }

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask")

      //   get the data from the form
    } catch (error) {
      console.log(error)

      throw new Error("No ethereum object found.")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  )
}
