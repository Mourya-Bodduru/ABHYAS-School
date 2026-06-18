import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Admission = () => {
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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Process of Admission</h1>
          <div style={{ width: '120px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Join our vibrant community. Here is how you can become a part of ABHYAS School.
          </p>
        </motion.div>

        <Row className="justify-content-center">
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
