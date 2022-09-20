# 2_blockchain_app

Build and deploy a modern Web 3.0 blockchain app, using Vite and Tailwind CSS

## Project set up

Set up in the client folder

- `npm create vite@latest` - select `./` to run in current folder
- then `npm install` and `npm run dev`
- install Tailwind CSS - follow instructions for Vite
- `npm install react-icons ethers` - install react-icons and ethers.js

Set up in the smart_contract folder

- run `npm init -y` to create an empty `package.json`
- run `npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers` to install Web3 dependencies

## Tailwind CSS notes

- md:justify-center - on medium devices justify-center otherwise justify-between
- items-center - align items along the center of the container's cross axis

## Ethereum smart contract notes

- run `npx hardhat`

## React context API

- allows all of the state logic to be written in one place and used across all components
- set up all of the Web3 connectivity in the Context Provider

## Areas to revise

- try and catch blocks
- React context provider
- computed property names - in the handleChange function in the Transaction Context

## Additional features to add

- instead of removing button if account connected, either disable or change text to say 'connected'
- add the connected network to the Ethereum card
- run tests using Hardhat
- listen for events?

## Hosting the App

- run `npm run build` - creates an optimised version ready for production
- deployed version will be under the dist folder
