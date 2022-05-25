import os
import json
from web3 import Web3
from pathlib import Path
from dotenv import load_dotenv
import streamlit as st

from pinata import pin_file_to_ipfs, pin_json_to_ipfs, convert_data_to_json

load_dotenv()

# Define and connect a new Web3 provider
w3 = Web3(Web3.HTTPProvider(os.getenv("WEB3_PROVIDER_URI")))

################################################################################
# Load-Contract function
################################################################################


@st.cache(allow_output_mutation=True)
def load_contract():

    # Load the contract ABI
    with open(Path('./contracts/compiled/artregistry_abi.json')) as f:
        contract_abi = json.load(f)

    # Set the contract address (this is the address of the deployed contract)
    contract_address = os.getenv("SMART_CONTRACT_ADDRESS")

    # Get the contract
    contract = w3.eth.contract(
        address=contract_address,
        abi=contract_abi
    )

    return contract


# Load the contract
contract = load_contract()

################################################################################
# Helper functions to pin files and json to Pinata
################################################################################


def pin_artwork(artwork_name, artwork_file):
    # Pin the file to IPFS with Pinata
    ipfs_file_hash = pin_file_to_ipfs(artwork_file.getvalue())

    # Build a token metadata file for the artwork
    token_json = {
        "name": artwork_name,
        "image": f"ipfs.io/ipfs/{ipfs_file_hash}"
    }
    json_data = convert_data_to_json(token_json)

    # Pin the json to IPFS with Pinata
    json_ipfs_hash = pin_json_to_ipfs(json_data)

    return json_ipfs_hash


def pin_appraisal_report(report_content):
    json_report = convert_data_to_json(report_content)
    report_ipfs_hash = pin_json_to_ipfs(json_report)
    return report_ipfs_hash


st.title("NFT Art Registry System")
st.write("Choose an account to get started")
accounts = w3.eth.accounts
address = st.selectbox("Select Account", options=accounts)
st.markdown("---")

################################################################################
# Register New Artwork
################################################################################
st.markdown("## Register New NFT Artwork")
artwork_name = st.text_input("Enter the name of the artwork")
artist_name = st.text_input("Enter the artist name")
initial_appraisal_value = st.text_input("Enter the initial appraisal amount")
file = st.file_uploader("Upload Artwork", type=["jpg", "jpeg", "png"])
if st.button("Register Artwork"):
    artwork_ipfs_hash = pin_artwork(artwork_name, file)
    artwork_uri = f"ipfs://{artwork_ipfs_hash}"
    tx_hash = contract.functions.registerArtwork(
        address,
        artwork_name,
        artist_name,
        int(initial_appraisal_value),
        artwork_uri
    ).transact({'from': address, 'gas': 1000000})
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    st.write("Transaction receipt mined:")
    st.write(dict(receipt))
    st.write("You can view the pinned metadata file with the following IPFS Gateway Link")
    st.markdown(f"[Artwork IPFS Gateway Link](https://ipfs.io/ipfs/{artwork_ipfs_hash})")
st.markdown("---")

################################################################################
# Display Registered Art
################################################################################
st.markdown("## Registered NFT Artwork")
st.markdown("Luna Leon")
st.image("https://ipfs.io/ipfs/QmQJm7dMYoruYZg7iK82i1iKYnAdfhtorRKBZsn8A1ya42", width=300)
st.markdown("NFT:  {'name':'Luna Leon','image':'ipfs.io/ipfs/QmQJm7dMYoruYZg7iK82i1iKYnAdfhtorRKBZsn8A1ya42'}")
st.markdown("TokenID: 0")

st.markdown("Blue Eyes")
st.image("https://ipfs.io/ipfs/QmNor6mGAXfbenwy9v7VBtCT4cyQrZ8pSbujeQe26itZfq", width=300)
st.markdown("NFT:  {'name':'Blue Eyes','image':'ipfs.io/ipfs/QmNor6mGAXfbenwy9v7VBtCT4cyQrZ8pSbujeQe26itZfq'}")
st.markdown("TokenID: 1")

st.markdown("Red Eyes")
st.image("https://ipfs.io/ipfs/QmYqWZF5HVTZ26wW846qYnv2QCsSCSofcuypP4QC3ZyjRQ", width=300)
st.markdown("NFT:  {'name':'Red Eyes','image':'ipfs.io/ipfs/QmYqWZF5HVTZ26wW846qYnv2QCsSCSofcuypP4QC3ZyjRQ'}")
st.markdown("TokenID: 2")

st.markdown("Phoenix")
st.image("https://ipfs.io/ipfs/QmVouVJ8fbTFMhqqi2NfJMgMLfmrLmWUxCrpU8UhH561ZR", width=300)
st.markdown("NFT:  {'name':'Phoenix','image':'ipfs.io/ipfs/QmVouVJ8fbTFMhqqi2NfJMgMLfmrLmWUxCrpU8UhH561ZR'}")
st.markdown("TokenID: 3")

################################################################################
# Transfer Artwork from owner to new wallet
################################################################################
st.markdown("## Transfer Artwork")
owner_address = st.text_input("Enter Artwork Owner Address")
transfer_address = st.text_input("Enter Address to Transfer Artwork")
token_URI = st.text_input("Enter Token URI")

# if st.button("Transfer"):

st.markdown("---")

################################################################################
# Get Appraisals
################################################################################
st.markdown("## Get the appraisal report history")
art_token_id = st.number_input("Artwork ID", value=0, step=1)
if st.button("Get Appraisal Reports"):
    appraisal_filter = contract.events.Appraisal.createFilter(
        fromBlock=0, argument_filters={"tokenId": art_token_id}
    )
    reports = appraisal_filter.get_all_entries()
    if reports:
        for report in reports:
            report_dictionary = dict(report)
            st.markdown("### Appraisal Report Event Log")
            st.write(report_dictionary)
            st.markdown("### Pinata IPFS Report URI")
            report_uri = report_dictionary["args"]["reportURI"]
            report_ipfs_hash = report_uri[7:]
            st.markdown(
                f"The report is located at the following URI: "
                f"{report_uri}"
            )
            st.write("You can also view the report URI with the following ipfs gateway link")
            st.markdown(f"[IPFS Gateway Link](https://ipfs.io/ipfs/{report_ipfs_hash})")
            st.markdown("### Appraisal Event Details")
            st.write(report_dictionary["args"])
    else:
        st.write("This artwork has no new appraisals")
