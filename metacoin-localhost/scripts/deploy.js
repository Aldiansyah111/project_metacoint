const hre = require("hardhat");

async function main() {
  const MetaCoin = await hre.ethers.getContractFactory("MetaCoin");
  const metaCoin = await MetaCoin.deploy();

  await metaCoin.waitForDeployment(); // Ethers v6
  console.log("MetaCoin deployed to:", await metaCoin.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
