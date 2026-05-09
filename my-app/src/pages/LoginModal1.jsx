import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, onHide }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login button clicked');
    if (typeof onHide === 'function') {
      onHide(); // Close modal first
    }
    navigate('/Login'); // Navigate to Login page (ensure route is lowercase)
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please login or sign up to continue using the platform.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
