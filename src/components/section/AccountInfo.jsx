import React from "react";

const styles = {
  infoText: {
    margin: "10px 0",
    fontSize: 16,
    color: "#ccc",
  },
};

function AccountInfo({ account, balance }) {
  return (
    <>
      <p style={{ ...styles.infoText, fontWeight: '600', color: '#00e676' }}>
        Connected Account: <span style={{ color: '#ccc' }}>{account}</span>
      </p>

      <p style={styles.infoText}>
        <strong>Balance:</strong> {balance} MC
      </p>
    </>
  );
}

export default AccountInfo;
