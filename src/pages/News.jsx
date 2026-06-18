import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaRegEye } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const newsData = getResource('abhyas_news').filter(n => n.published !== false);

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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>News & Announcements</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Stay updated with the latest happenings, milestones, and reports from ABHYAS School.
          </p>
        </motion.div>

        {/* News Grid */}
        <Row>
          {newsData.map((news, idx) => (
            <Col md={6} key={news.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-100"
              >
                <Card className="h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                  <Card.Img variant="top" src={news.image} style={{ height: '220px', objectFit: 'cover' }} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex gap-3 mb-2 text-muted" style={{ fontSize: '0.85rem' }}>
                        <span className="d-flex align-items-center gap-1">
                          <FaCalendarAlt /> {news.date}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <FaUser /> {news.author}
                        </span>
                      </div>
                      <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.4' }}>
                        {news.title}
                      </Card.Title>
                      <Card.Text style={{ color: 'var(--text-dark)', marginTop: '10px', fontSize: '0.95rem' }}>
                        {news.shortDesc}
                      </Card.Text>
                    </div>
                    <Button 
                      variant="link" 
                      className="p-0 text-start mt-3 d-flex align-items-center gap-2"
                      style={{ color: 'var(--secondary-color)', fontWeight: 'bold', textDecoration: 'none' }}
                      onClick={() => setSelectedNews(news)}
                    >
                      Read Full Article <FaRegEye />
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* News Details Modal */}
      {selectedNews && (
        <Modal 
          show={!!selectedNews} 
          onHide={() => setSelectedNews(null)} 
          size="lg" 
          centered 
          contentClassName="border-0 shadow-lg"
          style={{ borderRadius: '20px', overflow: 'hidden' }}
        >
          <Modal.Header closeButton style={{ borderBottom: 'none', padding: '20px 30px' }}>
            <Modal.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              {selectedNews.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '0 30px 30px 30px' }}>
            <div className="d-flex gap-3 mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
              <span className="d-flex align-items-center gap-1">
                <FaCalendarAlt /> Publish Date: {selectedNews.date}
              </span>
              <span className="d-flex align-items-center gap-1">
                <FaUser /> Posted by: {selectedNews.author}
              </span>
            </div>
            <img 
              src={selectedNews.image} 
              alt={selectedNews.title} 
              className="img-fluid rounded mb-4" 
              style={{ width: '100%', maxHeight: '350px', objectFit: 'cover' }} 
            />
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)', whiteSpace: 'pre-line' }}>
              {selectedNews.fullContent}
            </p>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: 'none', padding: '0 30px 20px 30px' }}>
            <Button 
              style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', borderRadius: '25px', padding: '8px 25px' }}
              onClick={() => setSelectedNews(null)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </motion.div>
  );
};

export default News;
