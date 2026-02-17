import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-page">
      <Link to="/" className="signup-back" aria-label="Go back">
        ←
      </Link>

      <div className="signup-mascot" aria-hidden>
        <img src="/mascot.png" alt="" className="signup-mascot-img" />
      </div>

      <div className="signup-center">
        <p className="signup-hero">Sign up</p>
        <div className="signup-card">
          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <label className="signup-label" htmlFor="signup-name">
              Name
            </label>
            <input
              id="signup-name"
              type="text"
              className="signup-input"
              placeholder="Your name"
              autoComplete="name"
            />

            <label className="signup-label" htmlFor="signup-email">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              className="signup-input"
              placeholder="name@example.com"
              autoComplete="email"
            />

            <label className="signup-label" htmlFor="signup-password">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              className="signup-input"
              placeholder="Choose a password"
              autoComplete="new-password"
            />

            <button type="submit" className="signup-submit">
              Sign up
            </button>

            <span className="signup-links-text">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
