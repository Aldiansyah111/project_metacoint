import React from "react";
import { GiMoneyStack } from "react-icons/gi";

function Home() {
  const cards = [
    { title: "Connect Wallet", description: "Securely connect your crypto wallet." },
    { title: "Send Tokens", description: "Transfer MetaCoins to other users easily." },
    { title: "Check Balance", description: "See your MetaCoin balance in real time." },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>🚀 Welcome to MetaCoin DApp</h1>
        <p style={styles.heroSubtitle}>Your gateway to decentralized MetaCoin transactions.</p>
      </div>

      {/* Icon Animation */}
      <div style={styles.iconRow}>
        {[...Array(7)].map((_, i) => (
          <GiMoneyStack
            key={i}
            style={styles.icon}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      {/* Cards Section */}
      <div style={styles.cardGrid}>
        {cards.map((card, idx) => (
          <div key={idx} style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 700,
    margin: "80px auto",
    padding: "40px 24px",
    backgroundColor: "#1a1a2e",
    borderRadius: 20,
    boxShadow: "0 0 20px rgba(0, 188, 212, 0.3)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
    minHeight: "80vh",
  },
  hero: {
    marginBottom: 30,
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: 10,
    background: "linear-gradient(90deg, #00bcd4, #00e676)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    opacity: 0.9,
    maxWidth: 500,
    margin: "0 auto",
    color: "#cccccc",
  },
  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: 15,
    flexWrap: "wrap",
    marginTop: 30,
    marginBottom: 40,
  },
  icon: {
    fontSize: "2.5rem",
    color: "#00bcd4",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#2a2a40",
    padding: 24,
    borderRadius: 12,
    width: 280,
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: 18,
    color: "#00e676",
    marginBottom: 12,
  },
  cardDesc: {
    fontSize: 14,
    color: "#dddddd",
  },
};

export default Home;
