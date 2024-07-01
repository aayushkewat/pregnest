// src/pages/AboutPage.tsx
import React from 'react';
import '../style/AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission and the team behind Prenatal Care</p>
      </header>
      
      <section className="founders">
        <h2>Our Founders</h2>
        <div className="founders-content">
          <div className="founder">
            <img src={require('../assets/home.png')} alt="Founder 1" />
            <h3>Jane Doe</h3>
            <p>CEO & Co-Founder</p>
          </div>
          <div className="founder">
            <img src={require('../assets/home.png')} alt="Founder 2" />
            <h3>John Smith</h3>
            <p>CFO & Co-Founder</p>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To provide exceptional prenatal care and support for expecting mothers, ensuring a healthy pregnancy journey.</p>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>We offer a variety of services to support expecting mothers:</p>
        <ul>
          <li>Personalized health plans</li>
          <li>24/7 support</li>
          <li>Expert advice from healthcare professionals</li>
          <li>Community support</li>
          <li>Health monitoring tools</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={require('../assets/home.png')} alt="Team Member 1" />
            <h3>Emily Johnson</h3>
            <p>Chief Medical Officer</p>
          </div>
          <div className="team-member">
            <img src={require('../assets/home.png')} alt="Team Member 2" />
            <h3>Michael Brown</h3>
            <p>Lead Nutritionist</p>
          </div>
          <div className="team-member">
            <img src={require('../assets/home.png')} alt="Team Member 3" />
            <h3>Sarah Williams</h3>
            <p>Yoga Instructor</p>
          </div>
        </div>
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

export default AboutPage;
