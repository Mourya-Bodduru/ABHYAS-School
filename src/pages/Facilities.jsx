import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaMicroscope, FaBookOpen, FaRunning, FaBusAlt, FaTv } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Facilities = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const facilities = [
    {
      title: "Smart Classrooms",
      icon: <FaTv size={35} />,
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "All classrooms are equipped with modern interactive smart boards, audio-visual systems, and high-speed internet to enhance the learning process with visual aids."
    },
    {
      title: "Computer Lab",
      icon: <FaLaptopCode size={35} />,
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "State-of-the-art computer labs with high-end computers, programming software, and tools to ensure every student gains critical digital literacy and technical capabilities."
    },
    {
      title: "Science Lab",
      icon: <FaMicroscope size={35} />,
      image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Fully equipped Physics, Chemistry, and Biology laboratories allowing students to safely conduct experiments and gain hands-on practical scientific knowledge."
    },
    {
      title: "Modern Library",
      icon: <FaBookOpen size={35} />,
      image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A spacious library housing thousands of books, educational journals, research papers, and digital e-book systems, fostering reading habits and self-study."
    },
    {
      title: "Sports Facilities",
      icon: <FaRunning size={35} />,
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "An expansive sports complex including a football field, basketball court, running track, and indoor gaming halls for table tennis, badminton, and gymnastics."
    },
    {
      title: "Safe Transportation",
      icon: <FaBusAlt size={35} />,
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "A fleet of modern, GPS-enabled school buses covering all major routes in the city, staffed with trained drivers, helpers, and safety assistants."
    }
  ];

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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Our Facilities</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Providing a world-class infrastructure to support academic and personal growth.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <Row>
          {facilities.map((fac, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-100"
              >
                <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={fac.image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      className="facility-img"
                    />
                    <div 
                      style={{ 
                        position: 'absolute', 
                        bottom: '15px', 
                        left: '15px', 
                        backgroundColor: 'var(--primary-color)', 
                        color: 'white', 
                        padding: '10px', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                      }}
                    >
                      {fac.icon}
                    </div>
                  </div>
                  <Card.Body className="pt-4">
                    <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.3rem' }}>
                      {fac.title}
                    </Card.Title>
                    <Card.Text style={{ color: 'var(--text-dark)', marginTop: '10px', fontSize: '1rem', lineHeight: '1.6' }}>
                      {fac.desc}
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

export default Facilities;
