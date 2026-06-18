import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaGraduationCap, FaBookOpen, FaLightbulb, FaUserTie } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Academics = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const programs = [
    {
      title: "Primary School (Grades I - V)",
      desc: "Focus on foundational literacy, numeracy, and cognitive development through play-based and inquiry-based activities.",
      subjects: "English, Mathematics, Environmental Studies, Second Language, Art & Craft, Physical Education"
    },
    {
      title: "Middle School (Grades VI - VIII)",
      desc: "Transition to formal subject-based learning, fostering critical thinking, research skills, and collaborative projects.",
      subjects: "English, Mathematics, Science, Social Sciences, Third Language, Computer Applications, Performing Arts"
    },
    {
      title: "Secondary School (Grades IX - X)",
      desc: "Rigorous preparation for board examinations while encouraging deep interest in science, humanities, and vocational skills.",
      subjects: "English, Mathematics, Science, Social Science, Language II, Information Technology"
    },
    {
      title: "Senior Secondary (Grades XI - XII)",
      desc: "Specialized streams designed to guide students towards career paths and higher university education.",
      subjects: "Science Stream (PCM/PCB), Commerce Stream, Humanities Stream"
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
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Academics at ABHYAS</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Nurturing intellectual curiosity, academic rigor, and creative thinking.
          </p>
        </motion.div>

        {/* Programs Section */}
        <h2 className="mb-4" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>
          <FaGraduationCap className="me-2" /> Academic Programs
        </h2>
        <Row className="mb-5">
          {programs.map((prog, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <motion.div whileHover={{ scale: 1.02 }} className="h-100">
                <Card className="h-100 border-0 glass-panel" style={{ padding: '20px' }}>
                  <Card.Body>
                    <Card.Title style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.3rem' }}>
                      {prog.title}
                    </Card.Title>
                    <Card.Text style={{ color: 'var(--text-dark)', marginTop: '15px' }}>
                      {prog.desc}
                    </Card.Text>
                    <div className="mt-3" style={{ fontSize: '0.9rem', color: '#777' }}>
                      <strong>Key focus/subjects:</strong> {prog.subjects}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Curriculum Details Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="mb-4" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>
              <FaBookOpen className="me-2" /> Curriculum Details
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              We follow the CBSE (Central Board of Secondary Education) curriculum, enhanced with customized learning modules that integrate science, technology, engineering, arts, and mathematics (STEAM).
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our assessment framework is continuous and comprehensive, focusing on understanding concepts rather than rote learning. Weekly tests, project-based assignments, and regular feedback ensure steady academic growth.
            </p>
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0" className="shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Assessment Structure</Accordion.Header>
                <Accordion.Body>
                  Continuous Formative Assessments (FA) through quizzes, classroom debates, laboratory assignments, and projects, coupled with Summative Assessments (SA) at the end of each term.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Co-Scholastic Framework</Accordion.Header>
                <Accordion.Body>
                  Evaluation of life skills, work education, visual and performing arts, attitude towards peers, teachers, and school programs, along with physical and health education activities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Language Policy</Accordion.Header>
                <Accordion.Body>
                  English is the primary medium of instruction. Hindi and regional languages are offered as second and third options to promote multilingual capability.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        {/* Teaching Methodology Section */}
        <Row className="p-4 rounded glass-panel align-items-center" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div style={{ color: 'var(--accent-color)', fontSize: '5rem' }}>
              <FaLightbulb />
            </div>
            <h3 className="mt-3" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Teaching Methodology</h3>
          </Col>
          <Col md={8}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
              At ABHYAS, we believe in experiential learning. Our teachers act as facilitators, encouraging students to ask questions, design experiments, and explore solutions. We implement smart classroom techniques, collaborative group work, and regular field visits to bridge the gap between classroom theory and real-world application.
            </p>
            <ul className="mt-3" style={{ listStyleType: 'circle', paddingLeft: '20px', fontSize: '1.05rem' }}>
              <li>Student-Centric Classrooms</li>
              <li>Flipped Classroom Model</li>
              <li>Project-Based Learning (PBL)</li>
              <li>Integrative STEAM Approach</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Academics;
