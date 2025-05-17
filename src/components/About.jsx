import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About MetaCoin DApp</h2>
      <p style={styles.text}>
        MetaCoin DApp adalah platform desentralisasi yang memudahkan transaksi
        cryptocurrency dengan aman dan cepat. Kami menggunakan teknologi blockchain
        terkini untuk memberikan pengalaman jual beli yang transparan dan terpercaya.
      </p>
      <p style={styles.text}>
        Dengan MetaCoin DApp, pengguna dapat menghubungkan wallet mereka, mengirim token,
        dan memantau saldo secara real-time tanpa perlu khawatir soal keamanan.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 700,
    margin: "80px auto",
    padding: 30,
    backgroundColor: "#1a1a2e",
    borderRadius: 16,
    boxShadow: "0 0 15px rgba(0, 188, 212, 0.5)",
    color: "#ffffff",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
  },
  title: {
    color: "#00bcd4",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "#ccc",
    marginBottom: 16,
  },
};

export default About;
