import React, { useState } from 'react';
import '../stylesheets/LandingPage.css';
import '../index.css'
import logo from '../assets/images/logo2.png'; // Update with actual path to logo image
import carImage from '../assets/images/car-image.png'; // Update with actual path to car image
import Modal from '../components/login_modal'; // Import the Modal component

const LandingPage = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="AutoMobile Logo" className="logoImage" />
        </div>
      </header>
      <main className="main">
        <div className="leftColumn">
          {/* <div className="logo">
            <img src={logo} alt="AutoMobile Logo" className="logoImage" />
          </div> */}
          <h1 className="title">
            <span className="white">IT'S TIME TO </span>
            <span className="orange">REVAMP </span>
            <span className="orange">AND GLOW</span>
          </h1>
          <p className="subtitle">
            <span>We will ensure your car </span>
            <span>is spotless and road-ready! </span>
          </p>
          <div className="buttons">
            <button className="button signInButton" onClick={() => openModal('signIn')}>Sign In</button>
            <button className="button signUpButton" onClick={() => openModal('signUp')}>Sign Up</button>
          </div>
        </div>
        <div className="rightColumn">
          <img src={carImage} alt="Car" className="carImage" />
          <div className="services">
            <div className="service">
              Interior Cleaning
              <span className="checkIcon">✓</span>
            </div>
            <div className="service">
              Carpet Cleaning
              <span className="checkIcon">✓</span>
            </div>
            <div className="service">
              Paint Restoration
              <span className="checkIcon">✓</span>
            </div>
            <div className="service">
              Scratch Removal
              <span className="checkIcon">✓</span>
            </div>
          </div>
        </div>
      </main>
      <Modal isOpen={modalType === 'signIn'} onClose={closeModal} type="signIn" />
      <Modal isOpen={modalType === 'signUp'} onClose={closeModal} type="signUp" />
    </div>
  );
};

export default LandingPage;
