import { useState } from "react";
import { loginUser, registerUser } from "../api";

const Login = ({ setToken }) => {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [user_fname, setFirstName] = useState("");
  const [user_lname, setLastName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ user_id, password });
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setError("Login failed! Check your credentials.");
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ user_fname, user_lname, user_id, password });
      setIsRegistering(false);
      setError("Registration successful! Now you can log in.");
    } catch (error) {
      setError("Registration failed! Try a different User ID.");
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        {isRegistering && (
          <>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
          </>
        )}
        <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      {error && <p className="error">{error}</p>}

      <p>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Login here" : "Register here"}
        </button>
      </p>
    </div>
  );
};

export default Login;