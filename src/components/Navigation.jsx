import React from "react";
import { Link } from "react-router-dom";
import WalletConnect from "../context/WalletConnect";

function Navigation({ account, onConnect }) {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/section", label: "Section" }
  ];

  return (
    <nav
      style={{
        background: "#1e1e2f",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #2e2e3e",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div style={{ fontWeight: "600", fontSize: "20px", color: "#00bcd4" }}>
        MetaCoin DApp
      </div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "24px",
          margin: 0,
          padding: 0
        }}
      >
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseOver={(e) => (e.target.style.color = "#00bcd4")}
              onMouseOut={(e) => (e.target.style.color = "#ffffff")}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        {!account ? (
          <div style={{ marginLeft: "10px" }}>
            <WalletConnect onConnect={onConnect} />
          </div>
        ) : (
          <span
            style={{
              fontSize: 14,
              backgroundColor: "#2a2a3c",
              padding: "6px 12px",
              borderRadius: "8px",
              color: "#00e676",
              fontWeight: "500"
            }}
          >
            🔗 {account.slice(0, 6)}...{account.slice(-4)}
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

