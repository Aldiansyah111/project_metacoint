import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1e1e2f",
        color: "#bbb",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "14px",
        marginTop: "40px",
        borderTop: "1px solid #2e2e3e",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} <span style={{ color: "#00bcd4" }}>MetaCoin DApp</span>. Built with 💙 by <strong style={{ color: "#fff" }}>Aldiansyah</strong>.
      </p>
    </footer>
  );
}

export default Footer;
