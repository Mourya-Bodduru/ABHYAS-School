import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const leadership = getResource('abhyas_leadership') || {};

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', paddingBottom: '50px' }}
    >
      <Navigation />
      
      <Container className="mt-5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>About ABHYAS</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
        </motion.div>

        {/* Our Journey / School Profile */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img 
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our History" 
              className="img-fluid rounded shadow"
              style={{ border: '4px solid var(--secondary-color)' }}
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Our Journey & Profile</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              Founded with a vision to redefine education, ABHYAS School has been at the forefront of academic excellence for over two decades. We believe in nurturing the unique potential within every child. Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning. Today, we cater to over 1,500 students with a stellar track record in both board exams and national level sports championships.
            </p>
          </Col>
        </Row>

        {/* Vision & Mission */}
        <Row className="align-items-center flex-row-reverse mb-5">
          <Col md={6}>
            <img 
              src="https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our Vision" 
              className="img-fluid rounded shadow"
              style={{ border: '4px solid var(--primary-color)' }}
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3 style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Vision & Mission</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              <strong>Vision:</strong> To be a globally recognized center for excellence in education, empowering students to become compassionate, responsible, and innovative global citizens. <br/><br/>
              <strong>Mission:</strong> To provide a holistic educational environment that balances academic rigor with co-curricular activities, ensuring the physical, mental, and emotional well-being of our students.
            </p>
          </Col>
        </Row>

        {/* Chairman & Principal Messages */}
        <h2 className="text-center mb-4 mt-5" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Our Leadership Messages</h2>
        <div style={{ width: '65px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto 40px auto' }}></div>
        
        {/* Chairman Message */}
        <Row className="align-items-center mb-5 p-4 glass-panel" style={{ borderLeft: '8px solid var(--secondary-color)' }}>
          <Col md={3} className="text-center mb-3 mb-md-0">
            <img 
              src="https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Chairman" 
              className="img-fluid rounded shadow"
              style={{ width: '180px', height: '180px', objectFit: 'cover', border: '4px solid var(--secondary-color)' }}
            />
            <h5 className="mt-3 mb-0" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Shri. R. K. Prasad</h5>
            <small className="text-muted">Chairman, ABHYAS Group</small>
          </Col>
          <Col md={9}>
            <h4 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Chairman's Message</h4>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-dark)', fontStyle: 'italic' }}>
              "{leadership.chairmanMessage}"
            </p>
          </Col>
        </Row>

        {/* Principal Message */}
        <Row className="align-items-center p-4 glass-panel" style={{ borderLeft: '8px solid var(--primary-color)' }}>
          <Col md={3} className="text-center mb-3 mb-md-0">
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Principal" 
              className="img-fluid rounded shadow"
              style={{ width: '180px', height: '180px', objectFit: 'cover', border: '4px solid var(--primary-color)' }}
            />
            <h5 className="mt-3 mb-0" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Dr. Sarah Jenkins</h5>
            <small className="text-muted">Principal, ABHYAS School</small>
          </Col>
          <Col md={9}>
            <h4 style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Principal's Message</h4>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-dark)', fontStyle: 'italic' }}>
              "{leadership.principalMessage}"
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
