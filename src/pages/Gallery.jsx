import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Gallery = () => {
  // Using high-quality placeholder images for the school gallery
  const photos = [
    "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Photo Gallery</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Glimpses of life and learning at ABHYAS School.
          </p>
        </motion.div>

        <Row>
          {photos.map((photo, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ overflow: 'hidden', borderRadius: '15px', cursor: 'pointer' }}
                className="shadow-sm"
              >
                <img 
                  src={photo} 
                  alt={`School Gallery ${index + 1}`} 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Gallery;
