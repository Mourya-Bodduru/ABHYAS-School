import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const Faculty = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const facultyData = getResource('abhyas_faculty').filter(f => f.published !== false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const getBio = (fac) => {
    if (fac.name.includes("Jenkins")) {
      return "Dr. Sarah Jenkins has over 15 years of experience in educational leadership. She is dedicated to fostering a supportive, student-centric academic culture that prepares learners for future challenges and global citizenship.";
    }
    if (fac.name.includes("Kumar")) {
      return "Mr. Ramesh Kumar leads the Mathematics department with passion. He specializes in making abstract concepts intuitive and has coached numerous students to top ranks in regional math olympiads.";
    }
    if (fac.name.includes("Carter")) {
      return "Mrs. Evelyn Carter oversees our state-of-the-art physics and chemistry laboratories. She is committed to experimental learning and guides students through hands-on projects in ecological sustainability and modern physics.";
    }
    if (fac.name.includes("Miller")) {
      return "Mr. David Miller inspires a love of literature and creative expression in his classes. He organizes the school's annual drama production and debate championships, helping students build public speaking confidence.";
    }
    if (fac.name.includes("Rao")) {
      return "Mrs. Sunita Rao has a passion for computer science and coding. She teaches software development fundamentals, web design, and robotics, ensuring students are fully prepared for the digital future.";
    }
    if (fac.name.includes("Rodriguez")) {
      return "Mr. Carlos Rodriguez directs our physical education program. A former athlete, he believes in physical health as the foundation for academic focus and coaches our football and athletics teams.";
    }
    return `${fac.name} is a dedicated member of the ABHYAS faculty, committed to guiding students toward academic excellence and overall personal growth in their respective disciplines.`;
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

      {/* Header */}
      <Container className="mt-5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Our Expert Faculty</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Meet the dedicated leaders and educators who inspire and guide our students.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <Row style={{ position: 'relative' }}>
          {facultyData.map((fac, idx) => {
            const isDeemphasized = selectedFaculty && selectedFaculty.id !== fac.id;
            return (
              <Col lg={4} md={6} key={fac.id || idx} className="mb-4">
                <div 
                  className={`h-100 faculty-card-container ${isDeemphasized ? 'faculty-card-de-emphasized' : ''}`}
                  onClick={() => setSelectedFaculty(fac)}
                  style={{ cursor: 'pointer' }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={selectedFaculty ? {} : { y: -8, scale: 1.02 }}
                    className="h-100"
                  >
                    <Card className="h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                      <div style={{ height: '300px', overflow: 'hidden' }}>
                        <Card.Img 
                          variant="top" 
                          src={fac.photo} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      <Card.Body className="text-center p-4">
                        <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.35rem', margin: 0 }}>
                          {fac.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Spotlight Overlay & Modal Details */}
      {selectedFaculty && (
        <>
          <div className="spotlight-overlay" onClick={() => setSelectedFaculty(null)} />
          <div className="spotlight-container" onClick={() => setSelectedFaculty(null)}>
            <div className="spotlight-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="spotlight-close-btn" 
                onClick={() => setSelectedFaculty(null)}
                aria-label="Close Spotlight"
              >
                <FaTimes />
              </button>
              <div className="spotlight-img-wrapper">
                <img 
                  src={selectedFaculty.photo} 
                  alt={selectedFaculty.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="spotlight-details">
                <h3 style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '5px' }}>
                  {selectedFaculty.name}
                </h3>
                <h5 style={{ color: 'var(--secondary-color)', fontWeight: '600', marginBottom: '15px' }}>
                  {selectedFaculty.designation}
                </h5>
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-color)', marginBottom: '15px' }}></div>
                <p style={{ fontSize: '1rem', color: 'var(--text-dark)', margin: '0 0 10px 0' }}>
                  <strong>Qualification:</strong> {selectedFaculty.qualification}
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.6', margin: '10px 0 20px 0' }}>
                  {getBio(selectedFaculty)}
                </p>
                <div className="d-flex gap-3 align-items-center">
                  <a 
                    href={`mailto:${selectedFaculty.email}`} 
                    style={{ color: 'var(--primary-color)', fontSize: '1.3rem', transition: 'transform 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    title="Send Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a 
                    href="#" 
                    style={{ color: 'var(--primary-color)', fontSize: '1.3rem', transition: 'transform 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    title="LinkedIn Profile"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Faculty;
