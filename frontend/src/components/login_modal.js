// src/components/Modal.js
import React from 'react';
import '../stylesheets/Login.css'; // Update to correct CSS file

const Modal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <span className="closeIcon" onClick={onClose}>&times;</span>
        <h2>{type === 'signIn' ? 'Sign In' : 'Sign Up'}</h2>
        <form>
          {type === 'signUp' && (
            <>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </>
          )}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">{type === 'signIn' ? 'Sign In' : 'Sign Up'}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
