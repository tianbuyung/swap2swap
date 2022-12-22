const { task } = require('hardhat/config');
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-chai-matchers');
const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim();

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  accounts.forEach((account) => {
    console.log(account.address);
  });
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.17',
};
