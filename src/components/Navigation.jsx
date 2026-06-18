import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserShield, FaUser, FaSun, FaMoon } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const isAcademicsActive = ['/academics', '/facilities', '/faculty', '/downloads'].includes(location.pathname);
  const isExploreActive = ['/achievements', '/gallery', '/news', '/events'].includes(location.pathname);

  const handleUserLogin = () => {
    alert("User/Student Login feature coming soon!");
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar expand="lg" className="glass-panel mb-4 py-3 sticky-top" style={{ border: 'none', borderRadius: '0 0 20px 20px', backgroundColor: 'var(--nav-bg, rgba(255, 255, 255, 0.9))', zIndex: 1050 }}>
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
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/home" style={{ color: location.pathname === '/home' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: location.pathname === '/about' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>About</Nav.Link>
              
              <NavDropdown 
                title="Academics" 
                id="academics-dropdown" 
                style={{ fontWeight: '600', margin: '0 10px' }}
                className={isAcademicsActive ? 'active-dropdown' : ''}
              >
                <NavDropdown.Item as={Link} to="/academics">Academic Programs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/facilities">School Facilities</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faculty">Our Faculty</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/downloads">Downloads & Circulars</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/admission" style={{ color: location.pathname === '/admission' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Admission</Nav.Link>
              
              <NavDropdown 
                title="Campus Life" 
                id="explore-dropdown" 
                style={{ fontWeight: '600', margin: '0 10px' }}
                className={isExploreActive ? 'active-dropdown' : ''}
              >
                <NavDropdown.Item as={Link} to="/achievements">Achievements</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gallery">Photo & Video Gallery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/news">News & Announcements</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/events">Upcoming & Past Events</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact" style={{ color: location.pathname === '/contact' ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600', margin: '0 10px' }}>Contact</Nav.Link>

              {/* Login & Toggle Buttons */}
              <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0 align-items-center">
                <Button
                  onClick={() => setDarkMode(!darkMode)}
                  size="sm"
                  style={{
                    backgroundColor: darkMode ? '#334155' : '#e2e8f0',
                    borderColor: darkMode ? '#475569' : '#cbd5e1',
                    color: darkMode ? '#f8fafc' : '#1e293b',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.3s ease'
                  }}
                  title="Toggle Dark Mode"
                >
                  {darkMode ? <FaSun style={{ color: '#FBB03B' }} /> : <FaMoon style={{ color: '#C51672' }} />}
                  <span>{darkMode ? 'Light' : 'Dark'}</span>
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;

