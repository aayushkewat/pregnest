// src/HomePage.tsx
import React from 'react';
import '../style/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomePage: React.FC = () => {


  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Pregnest</h1>
            
            <button className="join-classes-button">Join Classes</button>
          </div>
          <div className="hero-image ">
          <img src={ require('../assets/home.png')} alt="Prenatal Care" />
          </div>
        </div>
      </header>
      <section className="class-info">
        <div className="class">
          <img src={require('../assets/home.png')} alt="Class 1" />
          <div className="class-details">
            <h2>Class 1: Prenatal Yoga</h2>
            <p>Join our prenatal yoga classes for a relaxing and rejuvenating experience during your pregnancy.</p>
            <button className="select-class-button">Select Class</button>
          </div>
        </div>
        <div className="class">
          <img src={require('../assets/home.png')} alt="Class 2" />
          <div className="class-details">
            <h2>Class 2: Nutrition and Diet</h2>
            <p>Learn about nutrition and diet essentials for a healthy pregnancy and optimal baby development.</p>
            <button className="select-class-button">Select Class</button>
          </div>
        </div>
      </section>
      <section className="info-cards">
        <div className="card">
          <div className="card-image">
            <img src="path/to/your/image1.jpg" alt="Healthcare" />
          </div>
          <div className="card-content">
            <h2>Expert Advice</h2>
            <p>Get guidance from experienced healthcare professionals.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="path/to/your/image2.jpg" alt="Support" />
          </div>
          <div className="card-content">
            <h2>Continuous Support</h2>
            <p>24/7 support for all your pregnancy-related questions.</p>
          </div>
        </div>
      </section>
      
      
      <section className="features">
        <div className="feature">
          <h2>Personalized Plans</h2>
          <p>Customized health plans tailored to your needs.</p>
        </div>
        <div className="feature">
          <h2>Health Monitoring</h2>
          <p>Track your health and progress with our advanced tools.</p>
        </div>
        <div className="feature">
          <h2>Community</h2>
          <p>Join a community of expecting mothers and share your experiences.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Journey with Us</h2>
        <p>Sign up today to receive personalized care and support throughout your pregnancy.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
     
      <footer className="footer">
        <div className="footer-content">
          <div className="section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/class">Classes</a></li>
              <li><a href="/product">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="section">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              <a href="/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Prenatal Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

