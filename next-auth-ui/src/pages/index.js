import Link from "next/link";

export default function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to the Auth Demo</h1>
        <p style={styles.subtitle}>Please choose an action to continue</p>

        <div style={styles.buttonGroup}>
          <Link href="/login">
            <button style={{ ...styles.button, backgroundColor: "#2c3e50" }}>
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button style={{ ...styles.button, backgroundColor: "#3498db" }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "30px",
    color: "#555",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  },
};
