import React, { useState } from 'react';
import '../style/Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store JWT token received as a cookie in the browser
        document.cookie = `jwt=${data.token}; path=/;`;
        // Redirect or perform other actions after successful login
        window.location.href = '/about';
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error logging in');
      console.log(error);
    }
  };

  return (
    <div className="container">

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </div>
  );
};

export default Login;
