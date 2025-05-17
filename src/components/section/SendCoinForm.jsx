import React from "react";

const styles = {
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 8,
    borderRadius: 6,
    border: "1px solid #00bcd4",
    backgroundColor: "#121426",
    color: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "none",
    backgroundColor: "#00bcd4",
    color: "#1a1a2e",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

function SendCoinForm({ receiver, amount, setReceiver, setAmount, handleSendCoin }) {
  return (
    <>
      <input
        type="text"
        placeholder="Receiver address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount to send"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        style={styles.input}
      />
      <button onClick={handleSendCoin} style={styles.button}>
        Send Coin
      </button>
    </>
  );
}

export default SendCoinForm;
