// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC5192/IERC5192.sol";


contract SBT is ERC721, Ownable, ERC721Burnable, ERC721Enumerable, ERC721URIStorage, IERC5192{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Soulbound2", "SBT2") {}

    struct User{
        string UserName;
        string UserInformation;
    }
    mapping(uint256 => User) public user;

     function mintSBT2(string memory tokenURI, address account, string memory _userName, string memory _userInformation) public onlyOwner returns(uint256){
        uint256 newTokenId = _tokenIds.current();
        _safeMint(account, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
      
        user[newTokenId] = User(_userName, _userInformation);

        _tokenIds.increment();
        return newTokenId;
    }

    mapping(uint256 => bool) private _isLock;

    function locked(uint256 tokenId) external override view returns(bool){
        return _isLock[tokenId];
    }

    function lockToken(uint256 tokenId) public{
        _isLock[tokenId] = true;
        emit Locked(tokenId);
    }

    function unlockToken(uint256 tokenId) private{
        _isLock[tokenId] = false;
        emit Unlocked(tokenId);
     }

     function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)internal override(ERC721, ERC721Enumerable)
    {
        require(from == address(0), "Token not transferable");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // function safeMint(address to) public onlyOwner(
    //     uint256 tokenId = _tokenIds.current();
    //     _tokenIds.increment();
    //     _safeMint(to, tokenId);
    // )

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage){
        unlockToken(tokenId);
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function getUserName(uint256 tokenId) public view returns(string memory){
        return user[tokenId].UserName;
    }

    function getUserInformation(uint256 tokenId) public view returns(string memory){
        return user[tokenId].UserInformation;
    }

    function showTokenId() public view returns (uint256){
        return _tokenIds.current();
    }


}