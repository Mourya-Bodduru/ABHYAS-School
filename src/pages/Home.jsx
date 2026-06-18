import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Carousel, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaBookReader, FaTrophy, FaLaptopCode, FaCalendarAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegImages } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  // Load from local storage
  const banners = getResource('abhyas_banners').filter(b => b.published !== false);
  const stats = getResource('abhyas_stats');
  const newsList = getResource('abhyas_news').filter(n => n.published !== false).slice(0, 2);
  const eventsList = getResource('abhyas_events')
    .filter(e => e.published !== false && e.category === 'upcoming')
    .slice(0, 2);
  const galleryPhotos = getResource('abhyas_gallery')
    .filter(g => g.published !== false && g.type === 'photo')
    .slice(0, 3);
  const contact = getResource('abhyas_contact') || {};
  const leadership = getResource('abhyas_leadership') || {};

  const facilitiesPreview = [
    { icon: <FaLaptopCode size={30} />, title: "Computer Lab", desc: "Equipped with high-speed computers and core programming packages." },
    { icon: <FaBookReader size={30} />, title: "Modern Library", desc: "Thousands of books, references, journals, and digital e-books." },
    { icon: <FaChalkboardTeacher size={30} />, title: "Smart Classrooms", desc: "Digital smart boards in every class for experiential visuals." }
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

      {/* Admissions Open Banner */}
      <div 
        style={{ 
          background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))', 
          color: 'white', 
          padding: '12px 20px', 
          textAlign: 'center', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
        }}
      >
        <Badge bg="warning" className="me-2" style={{ color: '#333' }}>NEW</Badge>
        Admissions Open for Academic Session 2026-27! 
        <Button 
          as={Link} 
          to="/admission" 
          variant="light" 
          size="sm" 
          className="ms-3"
          style={{ color: 'var(--primary-color)', fontWeight: 'bold', borderRadius: '15px' }}
        >
          Apply Now
        </Button>
      </div>
      
      {/* Dynamic Hero Slider */}
      <Carousel interval={5000} fade className="shadow-lg">
        {banners.map((slide, idx) => (
          <Carousel.Item key={slide.id || idx} style={{ height: '70vh', minHeight: '400px', backgroundColor: '#000' }}>
            <img
              className="d-block w-100 h-100"
              src={slide.image}
              alt={slide.title}
              style={{ objectFit: 'cover', opacity: '0.65' }}
            />
            <Carousel.Caption style={{ bottom: '25%', textAlign: 'left', left: '10%', right: '10%' }}>
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '3.5rem', fontWeight: '800', textShadow: '2px 2px 8px rgba(0,0,0,0.7)', color: '#fff' }}
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ fontSize: '1.3rem', textShadow: '1px 1px 5px rgba(0,0,0,0.7)', maxWidth: '650px', marginTop: '15px' }}
              >
                {slide.desc}
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4"
              >
                <Button 
                  as={Link} 
                  to="/about" 
                  style={{ backgroundColor: 'var(--secondary-color)', borderColor: 'var(--secondary-color)', borderRadius: '25px', padding: '10px 30px', fontWeight: 'bold' }}
                >
                  Explore School
                </Button>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* About School Overview Section */}
      <Container className="mt-5 pt-4">
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Welcome to ABHYAS School</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px 0 25px 0' }}></div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              ABHYAS School represents a benchmark for holistic education, where academic rigor is paired with physical training, moral education, and high-tech skillsets. Our primary focus is nurturing each child's inherent spark, giving them the confidence and expertise to lead with integrity.
            </p>
            <Button 
              as={Link} 
              to="/about" 
              variant="outline-primary"
              style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)', borderRadius: '25px', padding: '8px 25px', fontWeight: 'bold', marginTop: '10px' }}
            >
              Read More About Us
            </Button>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0 text-center">
            <img 
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="School Overview" 
              className="img-fluid rounded shadow"
              style={{ border: '5px solid white' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Achievements Counters Section */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '50px 0', marginTop: '60px' }}>
        <Container>
          <Row className="text-center">
            {stats.map((stat, idx) => (
              <Col md={3} sm={6} key={stat.id || idx} className="mb-4 mb-md-0">
                <div style={{ color: 'var(--accent-color)', fontSize: '3rem', fontWeight: '800' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500', marginTop: '5px' }}>
                  {stat.label}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Facilities Highlights Section */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center mb-2" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Key Facilities</h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto 40px auto' }}></div>
        <Row>
          {facilitiesPreview.map((fac, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <motion.div whileHover={{ y: -8 }} className="h-100">
                <Card className="h-100 text-center border-0 glass-panel" style={{ padding: '30px 20px' }}>
                  <Card.Body>
                    <div style={{ color: 'var(--secondary-color)', marginBottom: '15px' }}>{fac.icon}</div>
                    <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{fac.title}</Card.Title>
                    <Card.Text style={{ color: 'var(--text-dark)' }}>{fac.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-3">
          <Button 
            as={Link} 
            to="/facilities" 
            style={{ backgroundColor: 'var(--secondary-color)', borderColor: 'var(--secondary-color)', borderRadius: '25px', padding: '8px 30px', fontWeight: 'bold' }}
          >
            View All Facilities
          </Button>
        </div>
      </Container>

      {/* Latest News & Upcoming Events Preview */}
      <Container className="mt-5 pt-5">
        <Row>
          {/* Latest News Column */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <h3 style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '20px' }}>Latest News</h3>
            {newsList.map(news => (
              <Card className="border-0 shadow-sm mb-3" key={news.id}>
                <Card.Body>
                  <div className="d-flex align-items-center gap-2 text-muted mb-2" style={{ fontSize: '0.85rem' }}>
                    <FaCalendarAlt /> {news.date}
                  </div>
                  <Card.Title style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>{news.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.95rem' }}>
                    {news.shortDesc}
                  </Card.Text>
                  <Button as={Link} to="/news" variant="link" className="p-0 text-decoration-none" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Upcoming Events Column */}
          <Col lg={6}>
            <h3 style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '20px' }}>Upcoming Events</h3>
            {eventsList.map(event => {
              const eventDateObj = new Date(event.date);
              const day = eventDateObj.getDate() || event.date.split('-')[2] || '15';
              const month = eventDateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase() || 'JUNE';

              return (
                <Card className="border-0 shadow-sm mb-3" key={event.id}>
                  <Card.Body className="d-flex gap-3 align-items-center">
                    <div className="text-center p-3 rounded" style={{ backgroundColor: 'var(--bg-light)', minWidth: '80px' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', lineHeight: 1 }}>{day}</div>
                      <div style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>{month}</div>
                    </div>
                    <div>
                      <h5 style={{ fontWeight: 'bold', color: 'var(--text-dark)', margin: 0 }}>{event.title}</h5>
                      <small className="text-muted">{event.time} @ {event.venue}</small>
                      <p className="margin-0 mt-1" style={{ fontSize: '0.9rem', color: '#666' }}>{event.desc.substring(0, 50)}...</p>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
            <div className="text-end mt-3">
              <Button as={Link} to="/events" variant="link" className="text-decoration-none" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>
                View All Events &rarr;
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Gallery Preview Section */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center mb-2" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Campus Moments</h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto 40px auto' }}></div>
        <Row>
          {galleryPhotos.map((item, index) => (
            <Col md={4} key={item.id || index} className="mb-4">
              <div style={{ overflow: 'hidden', borderRadius: '15px', height: '220px' }}>
                <img src={item.url} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-2">
          <Button as={Link} to="/gallery" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', borderRadius: '25px', padding: '8px 30px', fontWeight: 'bold' }}>
            <FaRegImages className="me-2" /> Explore Gallery
          </Button>
        </div>
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
              "{leadership.principalMessage}"
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

      {/* Contact Info Quick Section */}
      <Container className="mt-5 pt-4">
        <div className="glass-panel p-4" style={{ borderLeft: '8px solid var(--secondary-color)' }}>
          <Row className="align-items-center">
            <Col md={8}>
              <h3 style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Have Questions? We are here to help!</h3>
              <p className="margin-0 text-muted" style={{ fontSize: '1.05rem' }}>Get in touch with our helpdesk or visit our campus for details.</p>
              <div className="d-flex flex-wrap gap-4 mt-3">
                <span className="d-flex align-items-center gap-2"><FaPhoneAlt style={{ color: 'var(--secondary-color)' }} /> {contact.phone}</span>
                <span className="d-flex align-items-center gap-2"><FaEnvelope style={{ color: 'var(--secondary-color)' }} /> {contact.email}</span>
                <span className="d-flex align-items-center gap-2"><FaMapMarkerAlt style={{ color: 'var(--secondary-color)' }} /> {contact.address}</span>
              </div>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Button as={Link} to="/contact" style={{ backgroundColor: 'var(--secondary-color)', borderColor: 'var(--secondary-color)', borderRadius: '25px', padding: '10px 30px', fontWeight: 'bold' }}>
                Contact Support
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
};

export default Home;
