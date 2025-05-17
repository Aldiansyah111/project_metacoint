import React from "react";
import AccountInfo from "./AccountInfo";
import SendCoinForm from "./SendCoinForm";

const styles = {
  section: {
    maxWidth: 400,
    margin: "80px auto",
    padding: 30,
    backgroundColor: "#1a1a2e", // sesuai About & Contact
    borderRadius: 16,
    boxShadow: "0 0 15px rgba(0, 188, 212, 0.5)",
    color: "#00bcd4",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
  },
};

function Section({ account, balance, receiver, amount, setReceiver, setAmount, handleSendCoin }) {
  return (
    <section style={styles.section}>
      <AccountInfo account={account} balance={balance} />
      <SendCoinForm
        receiver={receiver}
        amount={amount}
        setReceiver={setReceiver}
        setAmount={setAmount}
        handleSendCoin={handleSendCoin}
      />
    </section>
  );
}

export default Section;
