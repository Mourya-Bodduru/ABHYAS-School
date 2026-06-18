import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaAward, FaUserCheck, FaGraduationCap, FaRunning } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const categories = [
    { key: 'all', label: 'All Achievements', icon: <FaAward /> },
    { key: 'student', label: 'Student Achievements', icon: <FaUserCheck /> },
    { key: 'academic', label: 'Academic Excellence', icon: <FaGraduationCap /> },
    { key: 'sports', label: 'Sports Achievements', icon: <FaRunning /> },
    { key: 'school', label: 'School Awards', icon: <FaAward /> }
  ];

  const achievements = [
    { 
      category: "student",
      title: "State Level Debate Winners", 
      image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Our students clinched the 1st prize at the inter-state debate championship." 
    },
    { 
      category: "academic",
      title: "Best Science Innovation", 
      image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Awarded for the most sustainable environmental project at the National Science Fair." 
    },
    { 
      category: "sports",
      title: "Sports Championship Cup", 
      image: "https://images.pexels.com/photos/163209/soccer-stadium-cup-football-163209.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Under-19 Football team brought home the regional championship cup." 
    },
    { 
      category: "student",
      title: "Excellence in Arts", 
      image: "https://images.pexels.com/photos/1183986/pexels-photo-1183986.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Top honors received at the Annual National Arts Exhibition." 
    },
    { 
      category: "academic",
      title: "100% Board Results", 
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Achieved a consecutive 5th year of 100% pass rate in standard 10 and 12 boards." 
    },
    { 
      category: "school",
      title: "Community Service Award", 
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600", 
      desc: "Recognized by the city council for outstanding student-led social service initiatives." 
    },
    {
      category: "school",
      title: "National Clean Campus Award",
      image: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Awarded the cleanest and greenest school campus trophy in the district ranking."
    },
    {
      category: "sports",
      title: "Individual Swimming Gold",
      image: "https://images.pexels.com/photos/8612196/pexels-photo-8612196.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Junior class swimmer secured the gold medal in the 100m freestyle at the State Aquatic Meet."
    }
  ];

  const filteredItems = achievements.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Our Achievements</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Celebrating the milestones that make ABHYAS School a center for excellence.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                borderRadius: '25px',
                padding: '8px 25px',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                backgroundColor: activeCategory === cat.key ? 'var(--primary-color)' : 'white',
                color: activeCategory === cat.key ? 'white' : 'var(--primary-color)',
                borderColor: 'var(--primary-color)',
                borderWidth: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: activeCategory === cat.key ? '0 4px 12px rgba(197,22,114,0.3)' : 'none',
                transition: 'all 0.3s'
              }}
            >
              {cat.icon} {cat.label}
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <Row>
          {filteredItems.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="h-100"
              >
                <Card className="h-100 shadow-sm border-0 overflow-hidden" style={{ borderRadius: '15px' }}>
                  <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <span className="badge mb-2 text-uppercase" style={{ backgroundColor: 'var(--accent-color)', color: '#333', fontWeight: 'bold', fontSize: '0.75rem' }}>
                        {item.category}
                      </span>
                      <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{item.title}</Card.Title>
                      <Card.Text style={{ color: 'var(--text-dark)' }}>
                        {item.desc}
                      </Card.Text>
                    </div>
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
