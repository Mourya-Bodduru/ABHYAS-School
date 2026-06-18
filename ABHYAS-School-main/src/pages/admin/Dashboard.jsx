import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Button, Navbar, Form } from 'react-bootstrap';
import { 
  FaSignOutAlt, FaChartBar, FaImage, FaNewspaper, FaCalendarAlt, 
  FaImages, FaUsers, FaTrophy, FaDownload, FaInbox, FaPhoneSquare, FaTools,
  FaBars, FaSearch
} from 'react-icons/fa';
import ContentManager from './ContentManager';
import { getResource } from '../../services/mockDataService';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState('overview');
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [stats, setStats] = useState({
    banners: 0,
    news: 0,
    events: 0,
    gallery: 0,
    faculty: 0,
    achievements: 0,
    downloads: 0,
    enquiries: 0
  });

  useEffect(() => {
    // Session Validation
    if (!localStorage.getItem('abhyas_admin_session')) {
      navigate('/admin');
    } else {
      loadStats();
    }
  }, [navigate]);

  const loadStats = () => {
    setStats({
      banners: getResource('abhyas_banners').length,
      news: getResource('abhyas_news').length,
      events: getResource('abhyas_events').length,
      gallery: getResource('abhyas_gallery').length,
      faculty: getResource('abhyas_faculty').length,
      achievements: getResource('abhyas_achievements').length,
      downloads: getResource('abhyas_downloads').length,
      enquiries: getResource('abhyas_enquiries').length
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('abhyas_admin_session');
    navigate('/admin');
  };

  const menuItems = [
    { key: 'overview', label: 'Overview Dashboard', icon: <FaChartBar /> },
    { key: 'banners', label: 'Banner Management', icon: <FaImage /> },
    { key: 'news', label: 'News Management', icon: <FaNewspaper /> },
    { key: 'events', label: 'Events Management', icon: <FaCalendarAlt /> },
    { key: 'gallery', label: 'Gallery Management', icon: <FaImages /> },
    { key: 'faculty', label: 'Faculty Management', icon: <FaUsers /> },
    { key: 'achievements', label: 'Achievements Mgr', icon: <FaTrophy /> },
    { key: 'downloads', label: 'Downloads & Circulars', icon: <FaDownload /> },
    { key: 'enquiries', label: 'Admissions Enquiries', icon: <FaInbox /> },
    { key: 'contact', label: 'Contact Details Mgr', icon: <FaPhoneSquare /> }
  ];

  return (
    <div className="admin-dashboard-container">
      {/* Top Navbar */}
      <Navbar className="admin-navbar px-4 py-3 shadow-sm" variant="dark" expand="lg">
        <div className="d-flex align-items-center gap-3">
          <Button 
            variant="link" 
            className="text-white d-lg-none p-0 me-2" 
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            <FaBars size={22} />
          </Button>
          <Navbar.Brand className="admin-navbar-brand m-0">
            <img 
              src="/logo.png" 
              alt="ABHYAS Logo" 
            />
            <span className="admin-brand-text">ABHYAS ADMIN</span>
          </Navbar.Brand>
        </div>

        {/* Top Header Search Section like reference */}
        <div className="d-none d-md-block ms-5 flex-grow-1">
          <div className="admin-header-search-wrapper">
            <Form.Control 
              type="text" 
              placeholder="Search resource, files or settings..." 
              className="admin-header-search"
            />
            <FaSearch className="admin-header-search-icon" />
          </div>
        </div>

        <Nav className="ms-auto align-items-center gap-3">
          {/* User profile card reference visual alignment */}
          <div className="d-none d-sm-flex align-items-center gap-2 me-2 text-white">
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}>
              A
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Administrator</span>
          </div>

          <Button 
            variant="outline-light" 
            size="sm" 
            onClick={handleLogout} 
            className="admin-btn px-3 py-1.5"
            style={{ borderRadius: '20px' }}
          >
            <FaSignOutAlt /> Sign Out
          </Button>
        </Nav>
      </Navbar>

      <div className="admin-main-layout">
        {/* Sidebar */}
        <div className={`admin-sidebar ${showMobileSidebar ? 'show-mobile' : ''}`}>
          {menuItems.map((item) => (
            <Button
              key={item.key}
              onClick={() => {
                setActiveModule(item.key);
                loadStats();
                setShowMobileSidebar(false);
              }}
              className={`admin-sidebar-btn ${activeModule === item.key ? 'active' : ''}`}
            >
              {item.icon} <span>{item.label}</span>
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="admin-content-area">
          {activeModule === 'overview' ? (
            <div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <h2 className="mb-1" style={{ color: '#2c3e50', fontWeight: '800' }}>Dashboard Overview</h2>
                  <p className="text-muted mb-0">Welcome back! Here is a summary of the current portal content.</p>
                </div>
              </div>
              
              {/* Stats Widgets */}
              <Row className="mb-5">
                {[
                  { label: "Banners Active", value: stats.banners, icon: <FaImage size={24} />, color: "#3498db" },
                  { label: "News Posts", value: stats.news, icon: <FaNewspaper size={24} />, color: "#2ecc71" },
                  { label: "Scheduled Events", value: stats.events, icon: <FaCalendarAlt size={24} />, color: "#e67e22" },
                  { label: "Gallery Files", value: stats.gallery, icon: <FaImages size={24} />, color: "#9b59b6" },
                  { label: "Faculty Members", value: stats.faculty, icon: <FaUsers size={24} />, color: "#1abc9c" },
                  { label: "Achievements", value: stats.achievements, icon: <FaTrophy size={24} />, color: "var(--accent-color)" },
                  { label: "Downloads PDF", value: stats.downloads, icon: <FaDownload size={24} />, color: "#34495e" },
                  { label: "Admission Enquiries", value: stats.enquiries, icon: <FaInbox size={24} />, color: "var(--primary-color)" }
                ].map((stat, idx) => (
                  <Col lg={3} md={4} sm={6} key={idx} className="mb-4">
                    <Card className="admin-stat-card text-white" style={{ backgroundColor: stat.color }}>
                      <Card.Body className="d-flex align-items-center justify-content-between p-4">
                        <div>
                          <h6 className="text-white-50 text-uppercase mb-2" style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.5px' }}>{stat.label}</h6>
                          <h2 className="m-0" style={{ fontWeight: '800', fontSize: '2rem' }}>{stat.value}</h2>
                        </div>
                        <div style={{ opacity: 0.85 }}>{stat.icon}</div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Quick Actions Card */}
              <Row>
                <Col lg={12}>
                  <Card className="admin-card border-0 p-4">
                    <Card.Body>
                      <h4 className="mb-3" style={{ color: '#2c3e50', fontWeight: '800' }}>
                        <FaTools className="me-2 text-warning" /> Quick Settings Panel
                      </h4>
                      <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        Use the sidebar to jump directly into specific module tables where you can search, filter, edit details, upload mockup images/PDFs, or toggle publishing toggles directly to the live portal.
                      </p>
                      
                      <div className="d-flex flex-wrap gap-3 mt-4">
                        <Button variant="primary" className="admin-btn px-4" onClick={() => setActiveModule('news')}>Manage News</Button>
                        <Button variant="success" className="admin-btn px-4" onClick={() => setActiveModule('events')}>Manage Events</Button>
                        <Button variant="info" className="admin-btn px-4 text-white" onClick={() => setActiveModule('enquiries')}>View Enquiries ({stats.enquiries})</Button>
                        <Button variant="secondary" className="admin-btn px-4" onClick={() => setActiveModule('contact')}>Update Contacts</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ) : (
            <ContentManager module={activeModule} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
