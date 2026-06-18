import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Nav, Button, Modal } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const allEvents = getResource('abhyas_events').filter(e => e.published !== false);
  const eventsData = {
    upcoming: allEvents.filter(e => e.category === 'upcoming'),
    past: allEvents.filter(e => e.category === 'past')
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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Events & Activities</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Join our upcoming events or explore the highlights of our past celebrations.
          </p>
        </motion.div>

        {/* Tabs */}
        <Nav 
          variant="pills" 
          className="justify-content-center mb-5 gap-2"
          style={{ border: 'none' }}
        >
          <Nav.Item>
            <Button 
              onClick={() => setActiveTab('upcoming')}
              style={{
                backgroundColor: activeTab === 'upcoming' ? 'var(--primary-color)' : 'transparent',
                color: activeTab === 'upcoming' ? 'white' : 'var(--primary-color)',
                border: '2px solid var(--primary-color)',
                borderRadius: '25px',
                padding: '8px 25px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              Upcoming Events
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button 
              onClick={() => setActiveTab('past')}
              style={{
                backgroundColor: activeTab === 'past' ? 'var(--primary-color)' : 'transparent',
                color: activeTab === 'past' ? 'white' : 'var(--primary-color)',
                border: '2px solid var(--primary-color)',
                borderRadius: '25px',
                padding: '8px 25px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              Past Events
            </Button>
          </Nav.Item>
        </Nav>

        {/* Events List */}
        <Row className="justify-content-center">
          {eventsData[activeTab].map((event, idx) => (
            <Col md={10} key={event.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: activeTab === 'upcoming' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card className="border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                  <Row className="g-0 align-items-center">
                    <Col md={4} style={{ height: '220px', overflow: 'hidden' }}>
                      <Card.Img 
                        src={event.image} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body className="p-4">
                        <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.4rem' }}>
                          {event.title}
                        </Card.Title>
                        <div className="d-flex flex-wrap gap-3 my-3 text-muted" style={{ fontSize: '0.9rem' }}>
                          <span className="d-flex align-items-center gap-2">
                            <FaCalendarAlt style={{ color: 'var(--secondary-color)' }} /> {event.date}
                          </span>
                          <span className="d-flex align-items-center gap-2">
                            <FaClock style={{ color: 'var(--secondary-color)' }} /> {event.time}
                          </span>
                          <span className="d-flex align-items-center gap-2">
                            <FaMapMarkerAlt style={{ color: 'var(--secondary-color)' }} /> {event.venue}
                          </span>
                        </div>
                        <Card.Text style={{ color: 'var(--text-dark)' }}>
                          {event.desc.substring(0, 120)}...
                        </Card.Text>
                        <Button 
                          style={{
                            backgroundColor: 'var(--secondary-color)',
                            borderColor: 'var(--secondary-color)',
                            borderRadius: '20px',
                            padding: '6px 20px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}
                          onClick={() => setSelectedEvent(event)}
                        >
                          View Details
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Modal 
          show={!!selectedEvent} 
          onHide={() => setSelectedEvent(null)} 
          size="lg" 
          centered
          contentClassName="border-0 shadow-lg"
          style={{ borderRadius: '20px', overflow: 'hidden' }}
        >
          <Modal.Header closeButton style={{ borderBottom: 'none', padding: '20px 30px' }}>
            <Modal.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              {selectedEvent.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '0 30px 30px 30px' }}>
            <img 
              src={selectedEvent.image} 
              alt={selectedEvent.title} 
              className="img-fluid rounded mb-4" 
              style={{ width: '100%', maxHeight: '380px', objectFit: 'cover' }} 
            />
            <div className="d-flex flex-wrap gap-4 mb-4 p-3 rounded bg-light" style={{ fontSize: '0.95rem' }}>
              <span className="d-flex align-items-center gap-2">
                <FaCalendarAlt style={{ color: 'var(--primary-color)' }} /> <strong>Date:</strong> {selectedEvent.date}
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaClock style={{ color: 'var(--primary-color)' }} /> <strong>Time:</strong> {selectedEvent.time}
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt style={{ color: 'var(--primary-color)' }} /> <strong>Venue:</strong> {selectedEvent.venue}
              </span>
            </div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              {selectedEvent.desc}
            </p>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: 'none', padding: '0 30px 20px 30px' }}>
            <Button 
              style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', borderRadius: '25px', padding: '8px 25px' }}
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </motion.div>
  );
};

export default Events;
