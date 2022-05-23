pragma solidity >=0.6.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/token/ERC721/ERC721.sol";
contract ArtRegistry is ERC721 {
    constructor() public ERC721("ArtRegistryToken", "ART") {}
    struct Artwork {
        string name;
        string artist;
        uint256 appraisalValue;
    }
    mapping(uint256 => Artwork) public artCollection;
    event Appraisal(uint256 tokenId, uint256 appraisalValue, string reportURI);
    function registerArtwork(
        address owner,
        string memory name,
        string memory artist,
        uint256 initialAppraisalValue,
        string memory tokenURI
    ) public returns (uint256) {
        uint256 tokenId = totalSupply();
        _mint(owner, tokenId);
        _setTokenURI(tokenId, tokenURI);
        artCollection[tokenId] = Artwork(name, artist, initialAppraisalValue);
        return tokenId;
    }
    function newAppraisal(
        uint256 tokenId,
        uint256 newAppraisalValue,
        string memory reportURI
    ) public returns (uint256) {
        artCollection[tokenId].appraisalValue = newAppraisalValue;
        emit Appraisal(tokenId, newAppraisalValue, reportURI);
        return artCollection[tokenId].appraisalValue;
    }
}

