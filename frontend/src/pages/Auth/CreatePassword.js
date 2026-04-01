import React from 'react';
import { Link } from 'react-router-dom';
import './CreatePassword.css';

const CreatePassword = () => {
  return (
    <div className="create-page">
      <Link to="/" className="create-back" aria-label="Go back">
        ←
      </Link>

      <div className="create-mascot" aria-hidden>
        <img src="/mascot.png" alt="" className="create-mascot-img" />
      </div>

      <div className="create-center">
        <p className="create-hero">Create password</p>
        <div className="create-card">
          <form className="create-form" onSubmit={(e) => e.preventDefault()}>
            <p className="create-description">
              Enter your new password below.
            </p>

            <label className="create-label" htmlFor="create-password">
              New password
            </label>
            <input
              id="create-password"
              type="password"
              className="create-input"
              placeholder="Enter new password"
              autoComplete="new-password"
            />

            <label className="create-label" htmlFor="create-confirm">
              Confirm password
            </label>
            <input
              id="create-confirm"
              type="password"
              className="create-input"
              placeholder="Confirm new password"
              autoComplete="new-password"
            />

            <button type="submit" className="create-submit">
              Create password
            </button>

            <span className="create-links-text">
              <Link to="/login">Back to login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
