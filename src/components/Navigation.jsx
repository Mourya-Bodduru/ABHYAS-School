import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar expand="lg" className="glass-panel mb-4 py-3 sticky-top" style={{ border: 'none', borderRadius: '0 0 20px 20px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Container>
          <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
            <img src="/logo.png" alt="ABHYAS School Logo" style={{ height: '50px', marginRight: '15px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '800', fontSize: '1.8rem', color: 'var(--primary-color)', letterSpacing: '2px', lineHeight: '1' }}>ABHYAS</span>
              <span style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-dark)', letterSpacing: '5px', marginTop: '2px' }}>SCHOOL</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" style={{ color: location.pathname === '/home' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: location.pathname === '/about' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>About</Nav.Link>
              <Nav.Link as={Link} to="/admission" style={{ color: location.pathname === '/admission' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Admission</Nav.Link>
              <Nav.Link as={Link} to="/achievements" style={{ color: location.pathname === '/achievements' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Achievements</Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={{ color: location.pathname === '/gallery' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
