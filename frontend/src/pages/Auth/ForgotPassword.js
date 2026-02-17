import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an email with a reset link
    // For frontend-only, navigate directly to create password page
    navigate('/create-password');
  };

  return (
    <div className="forgot-page">
      <Link to="/" className="forgot-back" aria-label="Go back">
        ←
      </Link>

      <div className="forgot-mascot" aria-hidden>
        <img src="/mascot.png" alt="" className="forgot-mascot-img" />
      </div>

      <div className="forgot-center">
        <p className="forgot-hero">Forgot password?</p>
        <div className="forgot-card">
          <form className="forgot-form" onSubmit={handleSubmit}>
            <p className="forgot-description">
              Enter your email and we&apos;ll send you a link to reset your password.
            </p>

            <label className="forgot-label" htmlFor="forgot-email">
              Email
            </label>
            <input
              id="forgot-email"
              type="email"
              className="forgot-input"
              placeholder="name@example.com"
              autoComplete="email"
            />

            <button type="submit" className="forgot-submit">
              Send reset link
            </button>

            <span className="forgot-links-text">
              <Link to="/login">Back to login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
