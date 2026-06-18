import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLock, FaUser } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If session exists, redirect directly
    if (localStorage.getItem('abhyas_admin_session')) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('abhyas_admin_session', 'active_session_token_' + Date.now());
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password. Use admin / admin123');
    }
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #3a0026 100%)',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: '420px' }}
      >
        <Card className="glass-panel text-white" style={{ border: 'none', background: 'rgba(255, 255, 255, 0.1)', padding: '25px' }}>
          <Card.Body>
            <div className="text-center mb-4">
              <img 
                src="/logo.png" 
                alt="ABHYAS Logo" 
                style={{ height: '70px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '5px', borderRadius: '10px' }} 
              />
              <h3 className="mt-3 text-white" style={{ fontWeight: '800', letterSpacing: '1px' }}>ABHYAS Admin Panel</h3>
              <p className="text-white-50" style={{ fontSize: '0.9rem' }}>Sign in to manage portal content</p>
            </div>

            {error && <Alert variant="danger" style={{ fontSize: '0.9rem' }}>{error}</Alert>}

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="adminUsername">
                <Form.Label className="text-white-50" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Username</Form.Label>
                <div style={{ position: 'relative' }}>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ paddingLeft: '35px', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff' }}
                    required
                  />
                  <FaUser style={{ position: 'absolute', left: '12px', top: '12px', color: 'rgba(255,255,255,0.6)' }} />
                </div>
              </Form.Group>

              <Form.Group className="mb-4" controlId="adminPassword">
                <Form.Label className="text-white-50" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Password</Form.Label>
                <div style={{ position: 'relative' }}>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingLeft: '35px', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff' }}
                    required
                  />
                  <FaLock style={{ position: 'absolute', left: '12px', top: '12px', color: 'rgba(255,255,255,0.6)' }} />
                </div>
              </Form.Group>

              <Button 
                type="submit" 
                style={{ 
                  backgroundColor: 'var(--secondary-color)', 
                  borderColor: 'var(--secondary-color)', 
                  fontWeight: 'bold', 
                  borderRadius: '25px', 
                  padding: '10px' 
                }}
                className="w-100"
              >
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
