const { ethers } = require('hardhat');

async function main() {
  const NFTMarketplace = await ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  const nftMarketplaceAddress = nftMarketplace.address;

  console.log(`NFT Marketplace deployed to: ${nftMarketplaceAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
