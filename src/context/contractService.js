import { ethers } from "ethers";
import MetaCoinABI from "./MetaCoin.json";

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const localProvider = new ethers.JsonRpcProvider("http://localhost:8545");

export function createContract(signerOrProvider) {
  return new ethers.Contract(contractAddress, MetaCoinABI.abi, signerOrProvider);
}

export async function getBalance(account) {
  if (!ethers.isAddress(account)) throw new Error("Invalid address");
  const contract = createContract(localProvider);
  const bal = await contract.getBalance(account);
  return ethers.formatUnits(bal, 0);
}

export async function sendCoin(signer, receiver, amount) {
  if (!ethers.isAddress(receiver)) throw new Error("Invalid receiver address");
  if (Number(amount) <= 0) throw new Error("Amount must be > 0");

  const contract = createContract(signer);
  const tx = await contract.sendCoin(receiver, ethers.parseUnits(amount, 0));
  await tx.wait();
  return tx;
}
