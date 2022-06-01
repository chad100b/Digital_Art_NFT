# Digital_Art_NFT
Create a digital art NFT, register art to unique ID, pin to Pinata/IPFS, sell art on Streamlit front-end

![NFT Art Scene](Images/NFT_ART.png)

## Background

My client, a prominate Tatoo Artist named Stang in Southwest Florida, would like to have an NFT created and each token associated with individual tatoo artwork that she has created. She would like to be able to transfer her NFT tokens to other wallets, a video game designer for example, for use in the game as an items of purchase for the game players.

The objective of this Smart Contract NFT project is to create an NFT token for digital Tatoo Art. Once the NFT token is created, I will develop, compile, and deploy a Smart Contract using Solidity and the ERC721 standard. The contract will have two primary functions, an art token creation and registration and secondly a token transfer function. I will then create two .py files, the first containing functions to create a json out of the data and pin to an ipfs file for distribution onto the Pinata gateway and stored on the InterPlanetary Filing System (IPFS). The second .py file will load in the deployed contract, pull in and use a Ganache blockchain, and create a UI utilizing Streamlit.

---

## Solidity (.sol), Python (.py), and JSON (.json) Files

The following files are associated with the Art NFT project:

[Solidity Smart Contract](./ArtRegistry/contracts/ArtRegistry.sol)

[Solidity Smart Contract](./ArtRegistry/app.py)

[Solidity Smart Contract](./ArtRegistry/pinata.py)

[Deployed Smart Contract ABI File](./ArtRegistry/contracts/compiled/artregistry_abi.json)

---

## Project Objectives

The following development was performed to complete the project:

1. Create an Non Fungible Token (NFT), using the ERC721 standard, called "Art Registry Token" and symbol of "ART". Map the tokens/art to a collection called "Art Collection".

2. Develop a function that registers each NFT token to a specific piece of digital art and tie it to a unique identifier.

3. Develop a function within the contract that will allow the owner of the NFT Token to transfer the ART Token to another wallet.

4. Deploy the Smart Contract on Remix within an Injected Web 3 environment connecting to a Meta Max digital wallet, using a Ganache blockchain to capture and memorialize the transactions. Use an ethereum test net Rinkerby to test the functionality.

5. Develop a set of functions, using Python, that will take the data of the digital image, turn it into a json string and "pin" it to the InterPlanatery Filing System (IPFS) utilizing call functions and capablities within Pinata.com.

6. Develop a front-end UI/UX using Streamlit to allow user ease in performing the functions of ART Registry, Display Art, and Transfer ART.
    a. Using Python, import functions to create JSON string to post to IPFS.
    b. Creat Streamlit front-end and launch.

7. Demonstrate Functionity using Streamlit User Interface.

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
