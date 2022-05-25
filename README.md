# Digital_Art_NFT
Create a digital art NFT, register art to unique ID, pin to Pinata/IPFS, sell art on Streamlit front-end

![NFT Art Scene](Images/NFT_ART.png)

## Background - Martian Token Crowdsale

My client, a prominate Tatoo Artist named Stang in Southwest Florida, would like to have an NFT created and associated with individual tatoo artwork that she has created. She would like to be able to transfer her NFT tokens to other wallets, a video game designer for example, for use in the game as items of purchase for the game players.

The objective of this Smart Contract NFT project is to create an NFT token for digital Tatoo Art. Once the NFT token is created, I will develop, compile, and deploy a Smart Contract using Solidity and the ERC721 standard. The contract will have two primary functions, an art token creation and registration and secondly a token transfer function. I will then create two .py files, the first containing functions to create a json out of the data and pin to an ipfs file for distribution onto the Pinata gateway and stored on the InterPlanetary Filing System (IPFS). The second .py file will load in the deployed contract, pull in and use a Ganache blockchain, and create a UI utilizing Streamlit.

---

## Solidity (.sol) & Python (.py) Files

The following files are associated with the Art NFT project:

[Solidity Smart Contract](./ArtRegistry/contracts/ArtRegistry.sol)

[Deployed Smart Contract ABI File](./ArtRegistry/contracts/compiled/artregistry_abi.json)

[Solidity Smart Contract](./ArtRegistry/app.py)

[Solidity Smart Contract](./ArtRegistry/pinata.py)
---
## Project Objectives

The following subsections will be performed to complete the project:

1. Develop a KaseiCoin Token Contract - smart contract that defines KaseiCoin as an ERC-20 token.

2. Develop a KaseiCoin Crowdsale Contract - the crowdsale contract will manage the entire crowdsale process. This process will allow users to send ether to the contract and receive KaseiCoin tokens, or **KAI**, in return. The contract will automatically mint the tokens and distribute them to a buyer in one transaction.

3. Develop a KaseiCoin Deployer Contract - The Crowdsale will be deployed to a local blockchain by using Remix, MetaMask, and Ganache.

4. Deploy and Test the Crowdsale on a Local Blockchain - Deployment and testing results contained in **Evaluation Evidence** section.

## Evaluation Evidence

### 1. Compile the contracts by using Remix.

* Successful Compile of KaseiCoin.sol

![Pinata](Images/Pinata_jsonNFT.png)

* Successful Compile of KaseiCoinCrowdsale.sol Minter Contract

![KaseiCoinCrowdsale Compiled](Images/KaseiCoinCrowdsale_Minter.png)

* Successful Compile of KaseiCoinCrowdsale.sol Deployer Contract

![KaseiCoinCrowdsale Compiled](Images/KaseiCoinCrowdsale_Deployer.png)

### 2. Deploy and Test the crowdsale to a local blockchain by using Remix, MetaMask, and Ganache.

* Successful Deploy of KaseiCoinCrowdsale.sol Deployer Contract

![KaseiCoinCrowdsale Deployment](Images/KaseiCoinCrowdsaleDeployer_Deployed.png)

* Kasei Crowdsale Address and Token Address

![Crowdsale Address](Images/Crowdsale_Address_Token.png)

2. Test the functionality of the crowdsale by using test accounts to buy new tokens and then checking the balances of those accounts.

* Crowdsale Launch, ready to buy Tokens

![Crowdsale Launch](Images/Crowdsale_buyTokens.png)

* Balance of Account that purchased the crowdsale token

![Crowdsale Launch](Images/Crowdsale_balancePurchase.png)

3. Review the total supply of minted tokens and the amount of wei that the crowdsale contract has raised.

* Total supply of minted tokens the crowdsale has raised

![Crowdsale Launch](Images/Crowdsale_totalSupply.png)

---
