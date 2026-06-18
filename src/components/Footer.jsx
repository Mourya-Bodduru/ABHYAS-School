import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { getResource } from '../services/mockDataService';

const Footer = () => {
  const contact = getResource('abhyas_contact') || {};

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
              <a href={contact.facebook || '#'} style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaFacebook /></a>
              <a href={contact.twitter || '#'} style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaTwitter /></a>
              <a href={contact.instagram || '#'} style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaInstagram /></a>
              <a href={contact.linkedin || '#'} style={{ color: 'var(--text-light)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}><FaLinkedin /></a>
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
                  <span>{contact.address}</span>
                  <div className="mt-2" style={{ width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', border: '2px solid var(--accent-color)' }}>
                    <iframe 
                      src={contact.mapEmbedUrl}
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
                <span>{contact.phone}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3" style={{ color: 'var(--secondary-color)' }} />
                <span>{contact.email}</span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '20px', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} {contact.footerCopyright}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
