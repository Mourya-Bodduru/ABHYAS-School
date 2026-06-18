import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Row, Col, Card, Modal, Badge, Pagination } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes, FaSearch, FaFilter } from 'react-icons/fa';
import { 
  getResource, setResource, addRecord, updateRecord, deleteRecord 
} from '../../services/mockDataService';

const ITEMS_PER_PAGE = 5;

const ContentManager = ({ module }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Form states mapping dynamically
  const [formFields, setFormFields] = useState({});

  const resourceKeys = {
    banners: 'abhyas_banners',
    news: 'abhyas_news',
    events: 'abhyas_events',
    gallery: 'abhyas_gallery',
    faculty: 'abhyas_faculty',
    achievements: 'abhyas_achievements',
    downloads: 'abhyas_downloads',
    enquiries: 'abhyas_enquiries',
    contact: 'abhyas_contact',
    leadership: 'abhyas_leadership'
  };

  useEffect(() => {
    loadData();
    setSearchTerm('');
    setCategoryFilter('all');
    setCurrentPage(1);
  }, [module]);

  const loadData = () => {
    const key = resourceKeys[module];
    if (key) {
      const data = getResource(key);
      setItems(data);
    }
  };

  // Toggle publish state
  const handleTogglePublish = (id, currentStatus) => {
    const key = resourceKeys[module];
    updateRecord(key, id, { published: !currentStatus });
    loadData();
  };

  // Toggle enquiry status
  const handleToggleEnquiryStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === 'pending' ? 'reviewed' : currentStatus === 'reviewed' ? 'resolved' : 'pending';
    updateRecord(resourceKeys.enquiries, id, { status: nextStatus });
    loadData();
  };

  // Delete item
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const key = resourceKeys[module];
      deleteRecord(key, id);
      loadData();
    }
  };

  // Open modal for Adding
  const handleOpenAdd = () => {
    setIsEditing(false);
    setSelectedId(null);
    // Initialize default fields based on active module
    const defaults = {};
    if (module === 'banners') {
      defaults.title = '';
      defaults.desc = '';
      defaults.image = 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800';
      defaults.published = true;
    } else if (module === 'news') {
      defaults.title = '';
      defaults.shortDesc = '';
      defaults.fullContent = '';
      defaults.date = new Date().toISOString().split('T')[0];
      defaults.author = 'Admin';
      defaults.image = 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800';
      defaults.published = true;
    } else if (module === 'events') {
      defaults.title = '';
      defaults.desc = '';
      defaults.date = new Date().toISOString().split('T')[0];
      defaults.time = '9:00 AM - 12:00 PM';
      defaults.venue = 'School Campus';
      defaults.category = 'upcoming';
      defaults.image = 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800';
      defaults.published = true;
    } else if (module === 'gallery') {
      defaults.caption = '';
      defaults.type = 'photo';
      defaults.category = 'academics';
      defaults.url = 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800';
      defaults.thumb = '';
      defaults.published = true;
    } else if (module === 'faculty') {
      defaults.name = '';
      defaults.designation = '';
      defaults.qualification = '';
      defaults.photo = 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400';
      defaults.email = '';
      defaults.published = true;
    } else if (module === 'achievements') {
      defaults.title = '';
      defaults.desc = '';
      defaults.category = 'student';
      defaults.image = 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600';
      defaults.published = true;
    } else if (module === 'downloads') {
      defaults.title = '';
      defaults.category = 'calendar';
      defaults.date = new Date().toISOString().split('T')[0];
      defaults.size = '1.0 MB';
      defaults.link = '#';
      defaults.published = true;
    }
    setFormFields(defaults);
    setShowModal(true);
  };

  // Open modal for Editing
  const handleOpenEdit = (item) => {
    setIsEditing(true);
    setSelectedId(item.id);
    setFormFields({ ...item });
    setShowModal(true);
  };

  // Handle Form field updates
  const handleFieldChange = (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormFields({ ...formFields, [e.target.name]: val });
  };

  // Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const key = resourceKeys[module];
    if (isEditing) {
      updateRecord(key, selectedId, formFields);
    } else {
      addRecord(key, formFields);
    }
    setShowModal(false);
    loadData();
  };

  // Update contact settings
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setResource(resourceKeys.contact, formFields);
    alert("Contact settings updated successfully!");
  };

  // Load Contact and Leadership fields when in contact mode
  useEffect(() => {
    if (module === 'contact') {
      const contactData = getResource('abhyas_contact');
      const leadershipData = getResource('abhyas_leadership');
      setFormFields({ ...contactData, ...leadershipData });
    }
  }, [module]);

  const handleContactFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prev => {
      const next = { ...prev, [name]: value };
      // Save contact & leadership split
      const contactKeys = ['address', 'phone', 'altPhone', 'email', 'altEmail', 'facebook', 'twitter', 'instagram', 'linkedin', 'mapEmbedUrl', 'footerCopyright'];
      const contactObj = {};
      const leadershipObj = {};
      Object.keys(next).forEach(k => {
        if (contactKeys.includes(k)) contactObj[k] = next[k];
        else leadershipObj[k] = next[k];
      });
      setResource('abhyas_contact', contactObj);
      setResource('abhyas_leadership', leadershipObj);
      return next;
    });
  };

  // Search and Filter logic
  const filteredItems = Array.isArray(items) ? items.filter(item => {
    const matchesSearch = Object.values(item).some(val => 
      typeof val === 'string' && val.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory = categoryFilter === 'all' || 
      (item.category && item.category === categoryFilter) ||
      (item.type && item.type === categoryFilter);

    return matchesSearch && matchesCategory;
  }) : [];

  // Pagination Logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="admin-card-header-title text-capitalize m-0" style={{ fontSize: '1.75rem', fontWeight: '800' }}>
          {module.replace(/([A-Z])/g, ' $1')} Management
        </h2>
        {module !== 'contact' && module !== 'enquiries' && (
          <Button variant="success" className="admin-btn px-4" onClick={handleOpenAdd}>
            <FaPlus className="me-2" /> Add New
          </Button>
        )}
      </div>

      {module === 'contact' ? (
        <Card className="admin-card border-0 p-4">
          <Form onSubmit={(e) => e.preventDefault()}>
            <h5 className="mb-4" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>School Address & Contacts</h5>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group controlId="address">
                  <Form.Label className="admin-form-label">Address</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="address" value={formFields.address || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="phone">
                  <Form.Label className="admin-form-label">Primary Phone</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="phone" value={formFields.phone || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="altPhone">
                  <Form.Label className="admin-form-label">Alternate Phone</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="altPhone" value={formFields.altPhone || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="email">
                  <Form.Label className="admin-form-label">Primary Email</Form.Label>
                  <Form.Control className="admin-form-control" type="email" name="email" value={formFields.email || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="altEmail">
                  <Form.Label className="admin-form-label">Alternate Email</Form.Label>
                  <Form.Control className="admin-form-control" type="email" name="altEmail" value={formFields.altEmail || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
            </Row>

            <h5 className="mb-4 mt-4" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>Social Media & Map</h5>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="facebook">
                  <Form.Label className="admin-form-label">Facebook URL</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="facebook" value={formFields.facebook || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="twitter">
                  <Form.Label className="admin-form-label">Twitter URL</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="twitter" value={formFields.twitter || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="instagram">
                  <Form.Label className="admin-form-label">Instagram URL</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="instagram" value={formFields.instagram || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="linkedin">
                  <Form.Label className="admin-form-label">LinkedIn URL</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="linkedin" value={formFields.linkedin || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="mapEmbedUrl">
                  <Form.Label className="admin-form-label">Google Maps Embed src URL</Form.Label>
                  <Form.Control className="admin-form-control" as="textarea" rows={2} name="mapEmbedUrl" value={formFields.mapEmbedUrl || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="footerCopyright">
                  <Form.Label className="admin-form-label">Footer Copyright Text</Form.Label>
                  <Form.Control className="admin-form-control" type="text" name="footerCopyright" value={formFields.footerCopyright || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
            </Row>

            <h5 className="mb-4 mt-4" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>Leadership Messages (About Us)</h5>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group controlId="chairmanMessage">
                  <Form.Label className="admin-form-label">Chairman Message</Form.Label>
                  <Form.Control className="admin-form-control" as="textarea" rows={3} name="chairmanMessage" value={formFields.chairmanMessage || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="principalMessage">
                  <Form.Label className="admin-form-label">Principal Message</Form.Label>
                  <Form.Control className="admin-form-control" as="textarea" rows={3} name="principalMessage" value={formFields.principalMessage || ''} onChange={handleContactFieldChange} />
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-4">
              <Button variant="success" className="admin-btn admin-btn-lg" onClick={() => alert("Settings saved automatically!")}>
                Save Details
              </Button>
            </div>
          </Form>
        </Card>
      ) : (
        <Card className="admin-card border-0 p-4">
          {/* Search and Filter Area */}
          <Row className="mb-4 align-items-center justify-content-between">
            <Col lg={4} md={6} className="mb-2 mb-md-0">
              <div style={{ position: 'relative' }}>
                <Form.Control
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="admin-form-control admin-search-input"
                />
                <FaSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              </div>
            </Col>
            {['gallery', 'downloads', 'achievements', 'events'].includes(module) && (
              <Col lg={3} md={5}>
                <div className="d-flex align-items-center gap-2">
                  <FaFilter style={{ color: '#64748b' }} />
                  <Form.Select 
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="admin-form-select"
                  >
                    <option value="all">All Categories</option>
                    {module === 'gallery' && (
                      <>
                        <option value="photo">Photos Only</option>
                        <option value="video">Videos Only</option>
                        <option value="academics">Academics</option>
                        <option value="facilities">Facilities</option>
                        <option value="sports">Sports</option>
                        <option value="events">Events</option>
                      </>
                    )}
                    {module === 'downloads' && (
                      <>
                        <option value="calendar">Academic Calendar</option>
                        <option value="circulars">Circulars</option>
                        <option value="syllabus">Syllabus</option>
                        <option value="other">Other Forms</option>
                      </>
                    )}
                    {module === 'achievements' && (
                      <>
                        <option value="student">Student Achievements</option>
                        <option value="academic">Academic Excellence</option>
                        <option value="sports">Sports Achievements</option>
                        <option value="school">School Awards</option>
                      </>
                    )}
                    {module === 'events' && (
                      <>
                        <option value="upcoming">Upcoming Events</option>
                        <option value="past">Past Events</option>
                      </>
                    )}
                  </Form.Select>
                </div>
              </Col>
            )}
          </Row>

          {/* List Table */}
          <div className="admin-table-container border">
            <Table hover responsive className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  {module === 'banners' && <th>Title</th>}
                  {module === 'news' && <th>Headline</th>}
                  {module === 'events' && <th>Event Name</th>}
                  {module === 'gallery' && <th>Caption</th>}
                  {module === 'faculty' && <th>Name</th>}
                  {module === 'achievements' && <th>Title</th>}
                  {module === 'downloads' && <th>File Name</th>}
                  {module === 'enquiries' && <th>From Name</th>}

                  {module === 'banners' && <th>Preview</th>}
                  {module === 'news' && <th>Publish Date</th>}
                  {module === 'events' && <th>Date & Venue</th>}
                  {module === 'gallery' && <th>Type / Category</th>}
                  {module === 'faculty' && <th>Designation</th>}
                  {module === 'achievements' && <th>Category</th>}
                  {module === 'downloads' && <th>Category & Size</th>}
                  {module === 'enquiries' && <th>Type / Contact Details</th>}

                  {module !== 'enquiries' ? <th>Status</th> : <th>Process Status</th>}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    {module === 'banners' && <td>{item.title || 'Untitled Banner'}</td>}
                    {module === 'news' && <td>{item.title}</td>}
                    {module === 'events' && <td>{item.title}</td>}
                    {module === 'gallery' && <td>{item.caption}</td>}
                    {module === 'faculty' && <td>{item.name}</td>}
                    {module === 'achievements' && <td>{item.title}</td>}
                    {module === 'downloads' && <td>{item.title}</td>}
                    {module === 'enquiries' && (
                      <td>
                        <div style={{ fontWeight: '600' }}>{item.name}</div>
                        {item.studentName && <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Student: {item.studentName} (DOB: {item.dob})</div>}
                      </td>
                    )}

                    {module === 'banners' && (
                      <td>
                        <img src={item.image} alt="preview" style={{ height: '40px', width: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                      </td>
                    )}
                    {module === 'news' && <td>{item.date}</td>}
                    {module === 'events' && (
                      <td>
                        <div>{item.date}</div>
                        <small className="text-muted">{item.venue}</small>
                      </td>
                    )}
                    {module === 'gallery' && (
                      <td>
                        <Badge bg="secondary" className="admin-badge me-1 text-capitalize">{item.type}</Badge>
                        <Badge bg="primary" className="admin-badge text-capitalize">{item.category}</Badge>
                      </td>
                    )}
                    {module === 'faculty' && <td>{item.designation}</td>}
                    {module === 'achievements' && <td><Badge bg="info" className="admin-badge text-white text-capitalize">{item.category}</Badge></td>}
                    {module === 'downloads' && (
                      <td>
                        <div><Badge bg="dark" className="admin-badge text-capitalize">{item.category}</Badge></div>
                        <small className="text-muted">{item.size}</small>
                      </td>
                    )}
                    {module === 'enquiries' && (
                      <td>
                        <div><Badge bg={item.type === 'admission' ? 'success' : 'primary'} className="admin-badge text-capitalize">{item.type}</Badge></div>
                        <small className="text-muted">{item.phone} / {item.email}</small>
                      </td>
                    )}

                    {module !== 'enquiries' ? (
                      <td>
                        <Button 
                          size="sm" 
                          variant={item.published ? "outline-success" : "outline-secondary"}
                          onClick={() => handleTogglePublish(item.id, item.published)}
                          className="admin-badge"
                          style={{ border: '1px solid', backgroundColor: 'transparent' }}
                        >
                          {item.published ? <><FaCheck className="me-1" /> Published</> : <><FaTimes className="me-1" /> Draft</>}
                        </Button>
                      </td>
                    ) : (
                      <td>
                        <Button
                          size="sm"
                          variant={item.status === 'resolved' ? 'success' : item.status === 'reviewed' ? 'warning' : 'danger'}
                          onClick={() => handleToggleEnquiryStatus(item.id, item.status)}
                          className="admin-badge text-white text-capitalize"
                          style={{ color: item.status === 'reviewed' ? '#000 !important' : '#fff' }}
                        >
                          {item.status}
                        </Button>
                      </td>
                    )}

                    <td>
                      <div className="d-flex gap-2">
                        {module !== 'enquiries' ? (
                          <Button variant="outline-primary" className="admin-btn p-2" onClick={() => handleOpenEdit(item)}>
                            <FaEdit size={14} />
                          </Button>
                        ) : (
                          <Button 
                            variant="outline-info" 
                            size="sm" 
                            className="admin-btn px-2.5 py-1.5"
                            onClick={() => {
                              alert(`Query/Message Detail:\n\n"${item.message}"`);
                            }}
                          >
                            View msg
                          </Button>
                        )}
                        <Button variant="outline-danger" className="admin-btn p-2" onClick={() => handleDelete(item.id)}>
                          <FaTrash size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {currentItems.length === 0 && (
                  <tr>
                    <td colSpan={10} className="text-center py-4 text-muted">No records found.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="justify-content-center mt-3">
              <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
              <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item 
                  key={index + 1} 
                  active={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
              <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
          )}
        </Card>
      )}

      {/* CRUD Form Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Form onSubmit={handleFormSubmit}>
          <Modal.Header closeButton style={{ borderBottom: '1px solid #e2e8f0' }}>
            <Modal.Title style={{ fontWeight: '800', color: 'var(--primary-color)' }}>
              {isEditing ? 'Edit Item' : 'Add New Item'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <Row>
              {/* Render dynamic inputs based on current fields */}
              {Object.keys(formFields).map((field) => {
                if (field === 'id' || field === 'published') return null;

                let inputType = 'text';
                if (field === 'date' || field === 'dob') inputType = 'date';
                
                // Textarea fields
                if (['desc', 'fullContent', 'shortDesc', 'message'].includes(field)) {
                  return (
                    <Col md={12} key={field} className="mb-3">
                      <Form.Group controlId={field}>
                        <Form.Label className="admin-form-label text-capitalize">{field.replace(/([A-Z])/g, ' $1')}</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={4} 
                          name={field}
                          value={formFields[field] || ''} 
                          onChange={handleFieldChange}
                          required
                          className="admin-form-control"
                        />
                      </Form.Group>
                    </Col>
                  );
                }

                // Dropdown selectors
                if (field === 'category' || field === 'type') {
                  let options = [];
                  if (module === 'events') options = [{ v: 'upcoming', l: 'Upcoming' }, { v: 'past', l: 'Past' }];
                  else if (module === 'gallery' && field === 'type') options = [{ v: 'photo', l: 'Photo' }, { v: 'video', l: 'Video' }];
                  else if (module === 'gallery' && field === 'category') options = [{ v: 'academics', l: 'Academics' }, { v: 'facilities', l: 'Facilities' }, { v: 'sports', l: 'Sports' }, { v: 'events', l: 'Events' }];
                  else if (module === 'downloads') options = [{ v: 'calendar', l: 'Academic Calendar' }, { v: 'circulars', l: 'Circulars' }, { v: 'syllabus', l: 'Syllabus' }, { v: 'other', l: 'Other PDF Forms' }];
                  else if (module === 'achievements') options = [{ v: 'student', l: 'Student Achievement' }, { v: 'academic', l: 'Academic Excellence' }, { v: 'sports', l: 'Sports Achievement' }, { v: 'school', l: 'School Award' }];

                  if (options.length > 0) {
                    return (
                      <Col md={6} key={field} className="mb-3">
                        <Form.Group controlId={field}>
                          <Form.Label className="admin-form-label text-capitalize">{field}</Form.Label>
                          <Form.Select name={field} value={formFields[field] || ''} onChange={handleFieldChange} className="admin-form-select">
                            {options.map(opt => <option key={opt.v} value={opt.v}>{opt.l}</option>)}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    );
                  }
                }

                // General Text/Date inputs
                return (
                  <Col md={6} key={field} className="mb-3">
                    <Form.Group controlId={field}>
                      <Form.Label className="admin-form-label text-capitalize">
                        {field.replace(/([A-Z])/g, ' $1')}
                      </Form.Label>
                      <Form.Control 
                        type={inputType}
                        name={field}
                        value={formFields[field] || ''} 
                        onChange={handleFieldChange}
                        required={field !== 'link' && field !== 'thumb'}
                        className="admin-form-control"
                      />
                    </Form.Group>
                  </Col>
                );
              })}
            </Row>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: '1px solid #e2e8f0' }}>
            <Button variant="secondary" className="admin-btn" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button type="submit" className="admin-btn" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
              {isEditing ? 'Save Changes' : 'Add Record'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ContentManager;
