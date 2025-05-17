import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const styles = {
  container: {
    maxWidth: 700,
    margin: '80px auto',
    padding: 30,
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    boxShadow: '0 0 15px rgba(0, 188, 212, 0.5)',
    color: '#00bcd4',
    fontFamily: "'Inter', sans-serif",
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 40,
    color: '#00bcd4',
  },
  card: {
    background: '#162239', // sedikit lebih gelap dari container tapi masih biru tua
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)',
    color: '#00bcd4',
    flex: '1',
    margin: '10px',
    minWidth: '250px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#00bcd4',
  },
  socialIconsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '10px',
  },
  link: {
    color: '#00bcd4',
    textDecoration: 'none',
  },
};

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📬 Contact Me</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <div style={styles.card}>
          <FaEnvelope style={styles.icon} />
          <h2>Email</h2>
          <p>youremail@example.com</p>
        </div>

        <div style={styles.card}>
          <FaLinkedin style={styles.icon} />
          <h2>LinkedIn</h2>
          <p>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              linkedin.com/in/yourusername
            </a>
          </p>
        </div>

        <div style={styles.card}>
          <FaGithub style={styles.icon} />
          <h2>GitHub</h2>
          <p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              github.com/yourusername
            </a>
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.socialIconsWrapper}>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={styles.icon} />
            </a>
            <a
              href="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok style={styles.icon} />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube style={styles.icon} />
            </a>
          </div>
          <h2>Social Media</h2>
          <p>Follow me for updates and content!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
