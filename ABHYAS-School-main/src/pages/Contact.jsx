import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource, addRecord } from '../services/mockDataService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contact = getResource('abhyas_contact') || {};

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      // Save contact enquiry to LocalStorage
      addRecord('abhyas_enquiries', {
        type: 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      });

      setValidated(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Contact Us</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Have a question, feedback, or inquiry? Feel free to reach out to us.
          </p>
        </motion.div>

        <Row className="mb-5">
          {/* Contact Information & Socials */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100 p-4 glass-panel" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
              <Card.Body>
                <h3 className="mb-4" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Get In Touch</h3>
                
                <div className="d-flex align-items-start mb-4">
                  <FaMapMarkerAlt className="me-3 mt-1" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }} />
                  <div>
                    <h5 style={{ color: 'white', fontWeight: 'bold' }}>Address</h5>
                    <p style={{ opacity: 0.9 }}>{contact.address}</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaPhoneAlt className="me-3 mt-1" style={{ fontSize: '1.4rem', color: 'var(--accent-color)' }} />
                  <div>
                    <h5 style={{ color: 'white', fontWeight: 'bold' }}>Phone Lines</h5>
                    <p style={{ opacity: 0.9 }}>{contact.phone}<br />{contact.altPhone}</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <FaEnvelope className="me-3 mt-1" style={{ fontSize: '1.4rem', color: 'var(--accent-color)' }} />
                  <div>
                    <h5 style={{ color: 'white', fontWeight: 'bold' }}>Emails</h5>
                    <p style={{ opacity: 0.9 }}>{contact.email}<br />{contact.altEmail}</p>
                  </div>
                </div>

                <h4 className="mt-5 mb-3" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Connect With Us</h4>
                <div className="d-flex gap-3">
                  <a href={contact.facebook || '#'} style={{ color: 'white', fontSize: '1.8rem', transition: 'transform 0.3s' }} className="social-icon"><FaFacebook /></a>
                  <a href={contact.twitter || '#'} style={{ color: 'white', fontSize: '1.8rem', transition: 'transform 0.3s' }} className="social-icon"><FaTwitter /></a>
                  <a href={contact.instagram || '#'} style={{ color: 'white', fontSize: '1.8rem', transition: 'transform 0.3s' }} className="social-icon"><FaInstagram /></a>
                  <a href={contact.linkedin || '#'} style={{ color: 'white', fontSize: '1.8rem', transition: 'transform 0.3s' }} className="social-icon"><FaLinkedin /></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm h-100 p-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <h3 className="mb-4" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Send Us A Message</h3>
                
                {submitted && (
                  <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label style={{ fontWeight: '600' }}>Your Name</Form.Label>
                    <Form.Control 
                      required
                      type="text" 
                      placeholder="Enter full name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label style={{ fontWeight: '600' }}>Email Address</Form.Label>
                        <Form.Control 
                          required
                          type="email" 
                          placeholder="name@example.com" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactPhone">
                        <Form.Label style={{ fontWeight: '600' }}>Phone Number</Form.Label>
                        <Form.Control 
                          required
                          type="tel" 
                          placeholder="Phone number" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your contact number.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="contactMessage">
                    <Form.Label style={{ fontWeight: '600' }}>Message / Inquiry Details</Form.Label>
                    <Form.Control 
                      required
                      as="textarea" 
                      rows={5} 
                      placeholder="Write your message here..." 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message or query details.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button 
                    type="submit" 
                    style={{ 
                      backgroundColor: 'var(--secondary-color)', 
                      borderColor: 'var(--secondary-color)', 
                      borderRadius: '30px', 
                      padding: '10px 30px', 
                      fontWeight: 'bold', 
                      fontSize: '1.05rem' 
                    }}
                    className="w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    Send Message <FaPaperPlane />
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Google Map Section */}
        <h3 className="mb-4 text-center" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Find Us on Google Maps</h3>
        <div className="shadow-sm rounded overflow-hidden mb-5" style={{ height: '400px', border: '5px solid white' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.18693015574!2d83.5496475!3d18.2930577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bf51fd86c9d27%3A0x5c73b5482220911d!2sAbhyas%20School%2C%20A%20Center%20For%20Excellence%2C%20IIT%20JEE%20Foundation!5e0!3m2!1sen!2sin!4v1781195909684!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location Map Main"
          ></iframe>
        </div>
      </Container>
    </motion.div>
  );
};

export default Contact;
