import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WalletConnect from "./context/WalletConnect";
import { getBalance, sendCoin } from "./context/contractService";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Section from "./components/section/Section";

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

  async function handleSendCoin(e) {
    e.preventDefault();
    if (!browserProvider) return alert("Hubungkan wallet dulu.");

    try {
      const signer = await browserProvider.getSigner(); // ambil signer dari provider
      await sendCoin(signer, receiver, amount); // kirim signer ke fungsi sendCoin

      const newBalance = await getBalance(account);
      setBalance(newBalance);
      setReceiver("");
      setAmount("");
      alert("Transaksi berhasil!");
    } catch (err) {
      console.error("Error transaksi:", err);
      alert(
        "Transaksi gagal: " +
          (err?.reason || err?.message || "Error tidak diketahui")
      );
    }
  }

  useEffect(() => {
    if (account) {
      getBalance(account)
        .then(setBalance)
        .catch(() => setBalance("0"));
    }
  }, [account]);

  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navigation account={account} onConnect={handleConnect} />

        <main style={{ flex: 1, padding: "24px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/section"
              element={
                <Section
                  account={account}
                  balance={balance}
                  receiver={receiver}
                  amount={amount}
                  setReceiver={setReceiver}
                  setAmount={setAmount}
                  handleSendCoin={handleSendCoin}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
