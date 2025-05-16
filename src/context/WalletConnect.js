import React from "react";
import { ethers } from "ethers";

export default function WalletConnect({ onConnect }) {
  async function connectWallet() {
    if (!window.ethereum) {
      alert("Install MetaMask dulu!");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      onConnect(accounts[0], browserProvider);
    } catch (error) {
      alert("Gagal connect wallet: " + error.message);
    }
  }

  return <button onClick={connectWallet}>Connect Wallet</button>;
}
