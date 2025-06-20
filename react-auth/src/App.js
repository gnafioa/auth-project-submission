import React, { useState } from "react";

function AuthForm({ isLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    alert(`${isLogin ? "Logging in" : "Signing up"} with: ` + JSON.stringify(formData));
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default function App() {
  const [loginMode, setLoginMode] = useState(true);

  return (
    <div style={styles.pageWrapper}>
      <AuthForm isLogin={loginMode} />
      <p style={styles.switchPrompt}>
        {loginMode ? "No account?" : "Already have an account?"}
        <button
          onClick={() => setLoginMode(!loginMode)}
          style={styles.switchButton}
        >
          {loginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

// 🎨 Centralized styles
const styles = {
  pageWrapper: {
    background: "#eee",
    height: "100vh",
    paddingTop: 100,
    fontFamily: "Segoe UI, sans-serif",
  },
  formContainer: {
    padding: 30,
    maxWidth: 400,
    margin: "0 auto",
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: 20,
    color: "#2c3e50",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    display: "block",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: "16px",
    cursor: "pointer",
    marginTop: 10,
  },
  switchPrompt: {
    textAlign: "center",
    marginTop: 20,
    fontSize: "14px",
  },
  switchButton: {
    marginLeft: 8,
    padding: "5px 10px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
    borderRadius: 4,
  },
};
