import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Achievements = () => {
  const achievements = [
    { title: "State Level Debate Winners", image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Our students clinched the 1st prize at the inter-state debate championship." },
    { title: "Best Science Innovation", image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Awarded for the most sustainable environmental project at the National Science Fair." },
    { title: "Sports Championship Cup", image: "https://images.pexels.com/photos/163209/soccer-stadium-cup-football-163209.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Under-19 Football team brought home the regional championship cup." },
    { title: "Excellence in Arts", image: "https://images.pexels.com/photos/1183986/pexels-photo-1183986.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Top honors received at the Annual National Arts Exhibition." },
    { title: "100% Board Results", image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Achieved a consecutive 5th year of 100% pass rate in standard 10 and 12 boards." },
    { title: "Community Service Award", image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Recognized by the city council for outstanding student-led social service initiatives." }
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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Our Achievements</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Celebrating the milestones that make ABHYAS School a center for excellence.
          </p>
        </motion.div>

        <Row>
          {achievements.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{item.title}</Card.Title>
                    <Card.Text style={{ color: 'var(--text-dark)' }}>
                      {item.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Achievements;
