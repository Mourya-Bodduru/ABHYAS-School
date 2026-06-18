import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Nav, Button, Modal } from 'react-bootstrap';
import { FaPlay, FaRegImages, FaVideo } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const Gallery = () => {
  const [filterType, setFilterType] = useState('photo'); // 'photo' or 'video'
  const [filterCategory, setFilterCategory] = useState('all'); // 'all', 'academics', 'facilities', 'sports', 'events'
  const [lightbox, setLightbox] = useState(null); // stores { type, url } of active preview

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const galleryItems = getResource('abhyas_gallery').filter(item => item.published !== false);

  const filteredItems = galleryItems.filter(item => 
    item.type === filterType && 
    (filterCategory === 'all' || item.category === filterCategory)
  );

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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Photo & Video Gallery</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Explore visual records of academic excellence, campus infrastructure, sports, and celebrations.
          </p>
        </motion.div>

        {/* Media Type Selectors (Photo / Video) */}
        <Nav className="justify-content-center mb-4 gap-2">
          <Nav.Item>
            <Button 
              onClick={() => { setFilterType('photo'); setFilterCategory('all'); }}
              style={{
                backgroundColor: filterType === 'photo' ? 'var(--primary-color)' : 'transparent',
                color: filterType === 'photo' ? 'white' : 'var(--primary-color)',
                border: '2px solid var(--primary-color)',
                borderRadius: '25px',
                padding: '8px 25px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              <FaRegImages className="me-2" /> Photos
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button 
              onClick={() => { setFilterType('video'); setFilterCategory('all'); }}
              style={{
                backgroundColor: filterType === 'video' ? 'var(--primary-color)' : 'transparent',
                color: filterType === 'video' ? 'white' : 'var(--primary-color)',
                border: '2px solid var(--primary-color)',
                borderRadius: '25px',
                padding: '8px 25px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              <FaVideo className="me-2" /> Videos
            </Button>
          </Nav.Item>
        </Nav>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {['all', 'academics', 'facilities', 'sports', 'events'].map((cat) => (
            <Button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              variant="outline-secondary"
              style={{
                borderRadius: '20px',
                padding: '5px 20px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                backgroundColor: filterCategory === cat ? 'var(--secondary-color)' : 'white',
                color: filterCategory === cat ? 'white' : 'var(--text-dark)',
                borderColor: filterCategory === cat ? 'var(--secondary-color)' : '#ddd',
                boxShadow: filterCategory === cat ? '0 4px 10px rgba(242,101,34,0.3)' : 'none'
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <Row>
          {filteredItems.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                style={{ overflow: 'hidden', borderRadius: '15px', cursor: 'pointer', position: 'relative' }}
                className="shadow-sm h-100"
                onClick={() => setLightbox(item)}
              >
                {item.type === 'photo' ? (
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    style={{ width: '100%', height: '240px', objectFit: 'cover' }} 
                  />
                ) : (
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img 
                      src={item.thumb} 
                      alt={item.caption} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: 'rgba(0,0,0,0.3)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      <div 
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          backgroundColor: 'var(--secondary-color)', 
                          color: 'white', 
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                        }}
                      >
                        <FaPlay size={18} style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div style={{ padding: '15px', backgroundColor: 'white' }}>
                  <h6 style={{ margin: 0, color: 'var(--primary-color)', fontWeight: 'bold' }}>{item.caption}</h6>
                </div>
              </motion.div>
            </Col>
          ))}
          {filteredItems.length === 0 && (
            <div className="text-center w-100 py-5 text-muted">
              <h5>No items found in this category.</h5>
            </div>
          )}
        </Row>
      </Container>

      {/* Lightbox / Video Player Modal */}
      {lightbox && (
        <Modal 
          show={!!lightbox} 
          onHide={() => setLightbox(null)} 
          size="lg" 
          centered 
          contentClassName="bg-transparent border-0 text-center"
        >
          <Modal.Header closeButton closeVariant="white" style={{ borderBottom: 'none' }}>
            <h5 className="text-white text-start w-100" style={{ fontWeight: 'bold' }}>{lightbox.caption}</h5>
          </Modal.Header>
          <Modal.Body style={{ padding: 0 }}>
            {lightbox.type === 'photo' ? (
              <img 
                src={lightbox.url} 
                alt={lightbox.caption} 
                className="img-fluid rounded" 
                style={{ maxHeight: '80vh', objectFit: 'contain' }} 
              />
            ) : (
              <div className="ratio ratio-16x9 rounded overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${lightbox.url}?autoplay=1`}
                  title={lightbox.caption}
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            )}
          </Modal.Body>
        </Modal>
      )}
    </motion.div>
  );
};

export default Gallery;
