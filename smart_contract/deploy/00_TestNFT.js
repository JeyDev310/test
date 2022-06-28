const hre = require("hardhat");
async function main() {
  const TestNFT = await hre.ethers.getContractFactory("TestNFT");
  const testNFT = await TestNFT.deploy();
  await testNFT.deployed();
  console.log(testNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


/** 1 - dev 2022-06-29 */
// npx hardhat run .\deploy\00_TestNFT.js --network rinkeby
// npx hardhat verify --contract contracts/TestNFT.sol:TestNFT 0x596802721c2Da8A6A6d01C63C147ec095198c950 --network rinkeby
