import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaUserPlus, FaFileSignature, FaClipboardCheck, FaAddressCard, FaInfoCircle } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { addRecord } from '../services/mockDataService';

const Admission = () => {
  const [formData, setFormData] = useState({ studentName: '', dob: '', grade: '', parentName: '', phone: '', email: '', message: '' });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { step: 1, title: "Online Registration", desc: "Fill out the online application form available on our portal." },
    { step: 2, title: "Document Submission", desc: "Upload necessary documents like birth certificate, previous school records, and photos." },
    { step: 3, title: "Interaction / Assessment", desc: "A brief interaction session or written assessment depending on the grade applied for." },
    { step: 4, title: "Fee Payment & Confirmation", desc: "Pay the admission fee to secure the seat and complete enrollment." }
  ];

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
      // Save to local storage enquiries log
      addRecord('abhyas_enquiries', {
        type: 'admission',
        name: formData.parentName,
        studentName: formData.studentName,
        dob: formData.dob,
        grade: formData.grade,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      });

      setValidated(false);
      setSubmitted(true);
      setFormData({ studentName: '', dob: '', grade: '', parentName: '', phone: '', email: '', message: '' });
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
      
      <Container className="mt-5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Admissions</h1>
          <div style={{ width: '120px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Join our vibrant community. Here is how you can become a part of ABHYAS School.
          </p>
        </motion.div>

        {/* Admission Info & Enquiry Form */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h3 className="mb-4" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>
              <FaInfoCircle className="me-2" /> Admission Information
            </h3>
            
            <Card className="border-0 shadow-sm mb-4 glass-panel p-4">
              <h5 style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Age Criteria for Session 2026-27</h5>
              <ul className="mt-2" style={{ color: 'var(--text-dark)' }}>
                <li><strong>Nursery / LKG:</strong> 3+ years as of March 31, 2026</li>
                <li><strong>UKG:</strong> 4+ years as of March 31, 2026</li>
                <li><strong>Grade I:</strong> 5+ years as of March 31, 2026</li>
                <li><strong>Grades II - X:</strong> Based on transfer certificate and assessment test</li>
              </ul>
            </Card>

            <Card className="border-0 shadow-sm mb-4 glass-panel p-4">
              <h5 style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Required Documents</h5>
              <ul className="mt-2" style={{ color: 'var(--text-dark)' }}>
                <li>Copy of Student's Birth Certificate</li>
                <li>Transfer Certificate (TC) from the previous school (if applicable)</li>
                <li>Report card/marksheet of the last academic year</li>
                <li>Recent passport-size photographs of the student and parents</li>
                <li>Address Proof (Aadhar Card, Passport, or Electricity bill)</li>
              </ul>
            </Card>
          </Col>

          {/* Admission Enquiry Form */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <h3 className="mb-4" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Admission Enquiry Form</h3>
                
                {submitted && (
                  <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Thank you! Your admission enquiry has been submitted. Our counselor will contact you soon.
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="studentName">
                    <Form.Label style={{ fontWeight: '600' }}>Student Name</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Student full name" 
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter the student's name.</Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="dob">
                        <Form.Label style={{ fontWeight: '600' }}>Date of Birth</Form.Label>
                        <Form.Control 
                          required 
                          type="date" 
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Please enter date of birth.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="grade">
                        <Form.Label style={{ fontWeight: '600' }}>Applying for Grade</Form.Label>
                        <Form.Select 
                          required 
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                        >
                          <option value="">Choose grade...</option>
                          <option value="Nursery">Nursery / Kindergarten</option>
                          <option value="Primary (I-V)">Primary (I - V)</option>
                          <option value="Middle (VI-VIII)">Middle (VI - VIII)</option>
                          <option value="Secondary (IX-X)">Secondary (IX - X)</option>
                          <option value="Senior Secondary (XI-XII)">Senior Secondary (XI - XII)</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Please choose a grade.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="parentName">
                    <Form.Label style={{ fontWeight: '600' }}>Parent / Guardian Name</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Parent full name" 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please enter parent's name.</Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label style={{ fontWeight: '600' }}>Phone Number</Form.Label>
                        <Form.Control 
                          required 
                          type="tel" 
                          placeholder="Contact number" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label style={{ fontWeight: '600' }}>Email Address</Form.Label>
                        <Form.Control 
                          required 
                          type="email" 
                          placeholder="name@example.com" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label style={{ fontWeight: '600' }}>Additional Info / Questions</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="Specify any queries or student details..." 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    style={{ backgroundColor: 'var(--secondary-color)', borderColor: 'var(--secondary-color)', borderRadius: '30px', fontWeight: 'bold' }}
                    className="w-100 py-2"
                  >
                    Submit Inquiry Form
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Admission Process Details */}
        <h3 className="mb-4 mt-5 text-center" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Admission Process Details</h3>
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-4"
              >
                <Card className="glass-panel" style={{ borderLeft: `8px solid var(--primary-color)`, borderRadius: '15px' }}>
                  <Card.Body className="d-flex align-items-center p-4">
                    <div 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: 'var(--secondary-color)', 
                        color: 'white', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        marginRight: '20px',
                        flexShrink: 0
                      }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.4rem' }}>{item.title}</Card.Title>
                      <Card.Text style={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                        {item.desc}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Admission;
