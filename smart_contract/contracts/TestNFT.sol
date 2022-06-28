// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract TestNFT is Ownable, ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private s_tokenIds;
    
    constructor() ERC721("Test NFT", "TESTNFT") {
        _setBaseURI("ipfs://");
    }

    function mint(address to, string memory metadataURI) public onlyOwner returns (uint256) {
        s_tokenIds.increment();
        uint256 id = s_tokenIds.current();
        _safeMint(to, id);
        _setTokenURI(id, metadataURI);
        return id;
    }
}
