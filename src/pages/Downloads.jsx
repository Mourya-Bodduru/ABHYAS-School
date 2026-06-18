import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Tab, Tabs, Table, Button } from 'react-bootstrap';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import { getResource } from '../services/mockDataService';

const Downloads = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const allDocs = getResource('abhyas_downloads').filter(d => d.published !== false);
  const downloadsData = {
    calendar: allDocs.filter(d => d.category === 'calendar'),
    circulars: allDocs.filter(d => d.category === 'circulars'),
    syllabus: allDocs.filter(d => d.category === 'syllabus'),
    other: allDocs.filter(d => d.category === 'other')
  };

  const renderTable = (items) => (
    <Table hover responsive style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', borderCollapse: 'separate', borderSpacing: '0' }}>
      <thead style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <tr>
          <th style={{ padding: '15px' }}>Document Title</th>
          <th style={{ padding: '15px' }}>Publish Date</th>
          <th style={{ padding: '15px' }}>File Size</th>
          <th style={{ padding: '15px', textAlign: 'center' }}>Download</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            <td style={{ padding: '15px', fontWeight: '500' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaFilePdf style={{ color: '#E2574C', fontSize: '1.3rem', flexShrink: 0 }} /> <span>{item.title}</span>
              </div>
            </td>
            <td style={{ padding: '15px', color: 'var(--text-dark)' }}>{item.date}</td>
            <td style={{ padding: '15px', color: '#666' }}>{item.size}</td>
            <td style={{ padding: '15px', textAlign: 'center' }}>
              <Button 
                variant="outline-primary"
                style={{ 
                  borderColor: 'var(--secondary-color)', 
                  color: 'var(--secondary-color)', 
                  borderRadius: '20px',
                  padding: '5px 15px',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}
                href={item.link}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-color)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--secondary-color)';
                }}
              >
                <FaDownload className="me-1" /> Download
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
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

      {/* Header */}
      <Container className="mt-5">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-5"
        >
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Downloads & Circulars</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '10px auto' }}></div>
          <p className="mt-3" style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>
            Access syllabus sheets, academic calendars, registration files, and circular notices.
          </p>
        </motion.div>

        {/* Tabbed Documents */}
        <div className="glass-panel p-4 mb-5">
          <Tabs defaultActiveKey="calendar" id="downloads-tabs" className="mb-4 custom-tabs" fill>
            <Tab eventKey="calendar" title="Academic Calendar">
              <div className="pt-2">{renderTable(downloadsData.calendar)}</div>
            </Tab>
            <Tab eventKey="circulars" title="Circulars & Notices">
              <div className="pt-2">{renderTable(downloadsData.circulars)}</div>
            </Tab>
            <Tab eventKey="syllabus" title="Syllabus Sheets">
              <div className="pt-2">{renderTable(downloadsData.syllabus)}</div>
            </Tab>
            <Tab eventKey="other" title="Other Forms & PDFs">
              <div className="pt-2">{renderTable(downloadsData.other)}</div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </motion.div>
  );
};

export default Downloads;
