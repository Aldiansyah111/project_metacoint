// import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
// import MetaCoinABI from "./MetaCoin.json";

// const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // pastikan ini benar

// // Buat provider JsonRpc untuk baca data lokal (localhost)
// const localProvider = new ethers.JsonRpcProvider("http://localhost:8545");

// function App() {
//   const [account, setAccount] = useState(null);
//   const [balance, setBalance] = useState("0");
//   const [receiver, setReceiver] = useState("");
//   const [amount, setAmount] = useState("");
//   const [browserProvider, setBrowserProvider] = useState(null);

//   // Connect ke MetaMask dan set BrowserProvider sekali saja
//   async function connectWallet() {
//     if (!window.ethereum) {
//       alert("Install MetaMask dulu!");
//       return;
//     }

//     try {
//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       setAccount(accounts[0]);
//       setBrowserProvider(new ethers.BrowserProvider(window.ethereum));
//     } catch (error) {
//       alert("Gagal connect wallet: " + error.message);
//     }
//   }

//   // Ambil balance dari kontrak MetaCoin
//   async function getBalance() {
//     if (!account) return;

//     try {
//       if (!ethers.isAddress(account)) {
//         console.warn("Account bukan address valid");
//         setBalance("0");
//         return;
//       }

//       const contract = new ethers.Contract(contractAddress, MetaCoinABI.abi, localProvider);
//       const bal = await contract.getBalance(account);
//       setBalance(ethers.formatUnits(bal, 0));
//     } catch (error) {
//       console.error("Error getBalance:", error);
//       setBalance("0");
//     }
//   }

//   // Kirim koin ke address lain
//   async function sendCoin() {
//     if (!account) {
//       alert("Connect wallet dulu!");
//       return;
//     }
//     if (!ethers.isAddress(receiver)) {
//       alert("Alamat penerima harus berupa address ETH valid, bukan ENS.");
//       return;
//     }
//     if (!amount || Number(amount) <= 0) {
//       alert("Masukkan jumlah yang valid (lebih dari 0)");
//       return;
//     }
//     if (!browserProvider) {
//       alert("Browser provider tidak tersedia, pastikan MetaMask terpasang");
//       return;
//     }

//     try {
//       const signer = await browserProvider.getSigner();
//       const contract = new ethers.Contract(contractAddress, MetaCoinABI.abi, signer);

//       const tx = await contract.sendCoin(receiver, ethers.parseUnits(amount, 0));
//       await tx.wait();

//       alert("Transfer berhasil!");
//       getBalance();
//     } catch (err) {
//       alert("Gagal transfer: " + err.message);
//     }
//   }

//   // Setiap account berubah, ambil balance
//   useEffect(() => {
//     if (account) {
//       getBalance();
//     }
//   }, [account]);

//   return (
//     <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
//       <h2>MetaCoin DApp</h2>
//       {!account ? (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       ) : (
//         <div>
//           <p><strong>Connected Account:</strong> {account}</p>
//           <p><strong>Balance:</strong> {balance} MC</p>

//           <input
//             type="text"
//             placeholder="Receiver address"
//             value={receiver}
//             onChange={(e) => setReceiver(e.target.value)}
//             style={{ width: "100%", marginBottom: 10 }}
//           />
//           <input
//             type="number"
//             placeholder="Amount to send"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             style={{ width: "100%", marginBottom: 10 }}
//             min="0"
//           />
//           <button onClick={sendCoin} style={{ width: "100%" }}>
//             Send Coin
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import WalletConnect from "./context/WalletConnect";
import { getBalance, sendCoin } from "./context/contractService";

function App() {
  const [account, setAccount] = useState(null);
  const [browserProvider, setBrowserProvider] = useState(null);
  const [balance, setBalance] = useState("0");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  async function handleConnect(account, provider) {
    setAccount(account);
    setBrowserProvider(provider);
  }

  useEffect(() => {
    if (account) {
      getBalance(account)
        .then(setBalance)
        .catch(() => setBalance("0"));
    }
  }, [account]);

  async function handleSendCoin() {
    if (!browserProvider) {
      alert("Provider belum tersedia");
      return;
    }
    try {
      const signer = await browserProvider.getSigner();
      await sendCoin(signer, receiver, amount);
      alert("Transfer berhasil!");
      const newBalance = await getBalance(account);
      setBalance(newBalance);
    } catch (e) {
      alert("Gagal transfer: " + e.message);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>MetaCoin DApp</h2>
      {!account ? (
        <WalletConnect onConnect={handleConnect} />
      ) : (
        <>
          <p><strong>Connected Account:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} MC</p>

          <input
            type="text"
            placeholder="Receiver address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />
          <input
            type="number"
            placeholder="Amount to send"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
            min="0"
          />
          <button onClick={handleSendCoin} style={{ width: "100%" }}>
            Send Coin
          </button>
        </>
      )}
    </div>
  );
}

export default App;

