import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-light)', paddingTop: '60px', paddingBottom: '20px', marginTop: '50px' }}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img src="/logo.png" alt="ABHYAS School Logo" style={{ height: '60px', marginRight: '15px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '5px', borderRadius: '8px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--text-light)', letterSpacing: '2px', lineHeight: '1' }}>ABHYAS</span>
                <span style={{ fontWeight: '500', fontSize: '0.8rem', color: 'var(--accent-color)', letterSpacing: '4px', marginTop: '2px' }}>SCHOOL</span>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
              Empowering students to become compassionate, responsible, and innovative global citizens through holistic education and excellence.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaFacebook /></a>
              <a href="#" style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaTwitter /></a>
              <a href="#" style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaInstagram /></a>
              <a href="#" style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaLinkedin /></a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '20px' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="mb-2"><Link to="/home" style={{ color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>Home</Link></li>
              <li className="mb-2"><Link to="/about" style={{ color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>About Us</Link></li>
              <li className="mb-2"><Link to="/admission" style={{ color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>Admission</Link></li>
              <li className="mb-2"><Link to="/achievements" style={{ color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>Achievements</Link></li>
              <li className="mb-2"><Link to="/gallery" style={{ color: 'var(--text-light)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>Photo Gallery</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 style={{ fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '20px' }}>Contact Info</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="mt-1 me-3" style={{ color: 'var(--secondary-color)', minWidth: '16px' }} />
                <div style={{ width: '100%' }}>
                  <span>123 Education Lane, Knowledge Park, Cityville, State, 12345</span>
                  <div className="mt-2" style={{ width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', border: '2px solid var(--accent-color)' }}>
                    <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.18693015574!2d83.5496475!3d18.2930577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bf51fd86c9d27%3A0x5c73b5482220911d!2sAbhyas%20School%2C%20A%20Center%20For%20Excellence%2C%20IIT%20JEE%20Foundation!5e0!3m2!1sen!2sin!4v1781195909684!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location Map"
                    ></iframe>
                  </div>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3" style={{ color: 'var(--secondary-color)' }} />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3" style={{ color: 'var(--secondary-color)' }} />
                <span>info@abhyasschool.edu</span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '20px', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} ABHYAS School. All rights reserved. Designed for Excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
