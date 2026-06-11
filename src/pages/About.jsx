import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

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
            <h3 style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Our Journey</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              Founded with a vision to redefine education, ABHYAS School has been at the forefront of academic excellence for over two decades. We believe in nurturing the unique potential within every child. Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center flex-row-reverse">
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
      </Container>
    </motion.div>
  );
};

export default About;
