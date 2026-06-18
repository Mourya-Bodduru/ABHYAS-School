import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { FaUserShield, FaUser } from 'react-icons/fa';

const Intro = () => {
  const navigate = useNavigate();

  // You can replace this string with your YouTube Video ID.
  // Example: If link is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  const youtubeVideoId = "nxcoS9qNhS0"; 

  const handleEnter = () => {
    navigate('/home');
  };

  const handleUserLogin = () => {
    alert("User/Student Login feature coming soon!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      {/* YouTube Background Video */}
      {youtubeVideoId !== "https://www.youtube.com/watch?v=nxcoS9qNhS0" ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${youtubeVideoId}&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', /* 16:9 aspect ratio */
            minHeight: '100vh',
            minWidth: '177.77vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: -2,
          }}
        ></iframe>
      ) : (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--primary-color)',
            zIndex: -2,
          }}
        ></div>
      )}

      {/* Dark Overlay for better text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <img src="/logo.png" alt="ABHYAS School Logo" style={{ height: '150px', marginBottom: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '10px', borderRadius: '20px' }} />
          <h1 style={{ color: 'var(--text-light)', fontSize: '5rem', fontWeight: '800', letterSpacing: '4px', marginBottom: '10px' }}>
            ABHYAS <span style={{ color: 'var(--primary-color)' }}>School</span>
          </h1>
          <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem', fontWeight: '300', fontStyle: 'italic', letterSpacing: '2px', marginBottom: '40px' }}>
            A Center for Excellence
          </h3>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="d-flex flex-column align-items-center gap-3"
        >
          <Button 
            onClick={handleEnter}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '15px 40px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '30px',
              backdropFilter: 'blur(5px)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--secondary-color)';
              e.currentTarget.style.borderColor = 'var(--secondary-color)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(242, 101, 34, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Enter the Campus
          </Button>

          {/* Quick Login Buttons */}
          <div className="d-flex gap-3 mt-3">
            <Button 
              as={Link} 
              to="/admin" 
              style={{ 
                backgroundColor: 'var(--primary-color)', 
                borderColor: 'var(--primary-color)', 
                color: 'white',
                fontWeight: 'bold', 
                borderRadius: '25px',
                padding: '10px 25px',
                fontSize: '0.95rem',
                boxShadow: '0 4px 15px rgba(197, 22, 114, 0.4)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color-hover)';
                e.currentTarget.style.borderColor = 'var(--primary-color-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(197, 22, 114, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.borderColor = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(197, 22, 114, 0.4)';
              }}
            >
              <FaUserShield /> Admin Login
            </Button>
            <Button 
              onClick={handleUserLogin} 
              style={{ 
                backgroundColor: 'var(--secondary-color)', 
                borderColor: 'var(--secondary-color)', 
                color: 'white',
                fontWeight: 'bold', 
                borderRadius: '25px',
                padding: '10px 25px',
                fontSize: '0.95rem',
                boxShadow: '0 4px 15px rgba(242, 101, 34, 0.4)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--secondary-color-hover)';
                e.currentTarget.style.borderColor = 'var(--secondary-color-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(242, 101, 34, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--secondary-color)';
                e.currentTarget.style.borderColor = 'var(--secondary-color)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(242, 101, 34, 0.4)';
              }}
            >
              <FaUser /> User Login
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Intro;

