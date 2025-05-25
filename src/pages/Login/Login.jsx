import React, { useState } from 'react';
import './Login.css';
import { FiMail, FiLock, FiShield } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with email:', { email, password });
  };

  const handleADLogin = () => {
    console.log('Logging in with Active Directory...');
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google...');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <img src="/logo.png" alt="Logo" className="login-logo" />
          <h2>QuickDesk</h2>
        </div>

        <form onSubmit={handleEmailLogin} className="login-form">
          <h4>Welcome Back 👋</h4>
          <p className="login-subtext">Sign in to continue</p>

          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <FiMail />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <FiLock />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Link to='/dashboard' className="btn-primary2">Sign in</Link>

          <div className="divider">OR</div>

          <button type="button" className="btn-google" onClick={handleGoogleLogin}>
            <FcGoogle size={18} /> Login with Google
          </button>

          <button type="button" className="btn-ad" onClick={handleADLogin}>
            <FiShield /> Login with Active Directory
          </button>

          <p className="login-footer">
            New here? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
