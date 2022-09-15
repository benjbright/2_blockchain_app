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
