import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChalkboardTeacher, FaBookReader, FaTrophy, FaLaptopCode } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Home = () => {
  const features = [
    { icon: <FaChalkboardTeacher size={40} />, title: "Expert Faculty", desc: "Learn from the best educators in the industry." },
    { icon: <FaBookReader size={40} />, title: "Modern Library", desc: "Access thousands of resources for comprehensive learning." },
    { icon: <FaLaptopCode size={40} />, title: "Tech-Driven", desc: "State-of-the-art computer labs and smart classrooms." },
    { icon: <FaTrophy size={40} />, title: "Sports Excellence", desc: "Fostering physical well-being through top-tier sports facilities." }
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
      
      {/* Hero Section */}
      <Container className="mt-5 pt-4">
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.2', color: 'var(--text-dark)' }}>
                Empowering <br />
                <span className="text-gradient">Future Leaders</span>
              </h1>
              <p className="mt-4" style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6' }}>
                At ABHYAS School, we blend traditional values with modern educational methodologies to nurture well-rounded individuals ready to conquer the world.
              </p>
            </motion.div>
          </Col>
          <Col md={6} className="text-center">
            <motion.img 
              src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="School Campus" 
              className="img-fluid rounded shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ border: '5px solid white' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center mb-5" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Why Choose ABHYAS?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={3} key={index} className="mb-4">
              <motion.div
                whileHover={{ translateY: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-100 text-center glass-panel" style={{ border: 'none', padding: '30px 15px' }}>
                  <Card.Body>
                    <div style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>
                      {feature.icon}
                    </div>
                    <Card.Title style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>{feature.title}</Card.Title>
                    <Card.Text style={{ color: 'var(--text-dark)' }}>
                      {feature.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Message from Principal Section */}
      <Container className="mt-5 pt-5 pb-4">
        <Row className="align-items-center p-4 glass-panel" style={{ backgroundColor: 'var(--primary-color)' }}>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Principal" 
              className="img-fluid rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover', border: '5px solid var(--accent-color)' }}
            />
          </Col>
          <Col md={8}>
            <h3 style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Message from the Principal</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6' }}>
              "Education is not just about academic excellence; it is about character building. At ABHYAS School, we are committed to providing an environment where every child can discover their true potential and flourish into a responsible global citizen. Welcome to our family."
            </p>
            <h5 style={{ color: 'var(--text-light)', fontWeight: 'bold', marginTop: '20px' }}>- Dr. Sarah Jenkins</h5>
          </Col>
        </Row>
      </Container>


      {/* Testimonials Section */}
      <Container className="mt-5 mb-5 pt-4">
        <h2 className="text-center mb-5" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>What Parents Say</h2>
        <Row>
          {[
            { quote: "ABHYAS School has transformed my child. The balance of academics and extracurriculars is unmatched.", author: "Mr. Sharma, Parent" },
            { quote: "The teachers here truly care about the students' well-being. It feels like a second home.", author: "Mrs. Patel, Parent" },
            { quote: "Top-notch facilities and a curriculum that prepares them for the real world.", author: "Mr. Reddy, Parent" }
          ].map((testi, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="h-100">
                <Card className="shadow-sm h-100" style={{ borderRadius: '15px', border: 'none', backgroundColor: 'var(--bg-white)' }}>
                  <Card.Body className="p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div style={{ color: 'var(--accent-color)', fontSize: '2rem', marginBottom: '10px', lineHeight: 1 }}>"</div>
                      <Card.Text style={{ color: 'var(--text-dark)', fontStyle: 'italic', fontSize: '1.05rem' }}>
                        {testi.quote}
                      </Card.Text>
                    </div>
                    <div className="mt-4" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                      - {testi.author}
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

export default Home;
