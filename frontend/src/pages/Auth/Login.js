import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <Link to="/" className="login-back" aria-label="Go back">
        ←
      </Link>

      <div className="login-mascot" aria-hidden>
        <img src="/mascot.png" alt="" className="login-mascot-img" />
      </div>

      <div className="login-center">
        <h2 className="login-logo">uffsa</h2>
        <div className="login-card">
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label className="login-label" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="login-input"
              placeholder="name@example.com"
              autoComplete="email"
            />

            <label className="login-label" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="login-input"
              placeholder="Your password"
              autoComplete="current-password"
            />

            <label className="login-checkbox-label">
              <input type="checkbox" className="login-checkbox" />
              <span>Remember me</span>
            </label>

            <div className="login-actions">
              <div className="login-links">
                <span className="login-links-text">
                  Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                </span>
                <Link to="/forgot-password" className="login-link-forgot">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="login-submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
