import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import styles from './navbarsection.module.css';
import { useAuth } from './context/UserAuth';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <BootstrapNavbar expand="lg" className={`${styles.navbg} shadow-sm`} variant="light">
      <Container>
        <BootstrapNavbar.Brand href="/Homepage">
          <img src="logobrain.png" alt="Healthcare Assistant Logo" className={styles.navbarLogo} />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto ${styles.navLinks} d-flex align-items-center`}>
            <Nav.Link href="/Homepage" className={`fs-5 ${styles.homelink}`}>Home</Nav.Link>

            <NavDropdown title="About" id="about-dropdown" className={`fs-5 ${styles.linkmenu}`} style={{ color: "#19bcb3" }}>
              <NavDropdown.Item href="/aiworking" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>How Our AI Works</NavDropdown.Item>
              <NavDropdown.Item href="/datasecure" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>Data Privacy & Security</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="services-dropdown" className={`fs-5 ${styles.linkmenu}`}>
              <NavDropdown.Item href="/symptomschecker" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>AI Symptom Checker</NavDropdown.Item>
              <NavDropdown.Item href="/haircareform" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>Skin and Hair Care</NavDropdown.Item>
              <NavDropdown.Item href="/generalhealth" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>General Health</NavDropdown.Item>
              <NavDropdown.Item href="/chatbot" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>Child Care</NavDropdown.Item>
              <NavDropdown.Item href="/chatbot" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>AI Chatbot</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="FAQ" id="faq-dropdown" className={`fs-5 ${styles.linkmenu}`}>
              <NavDropdown.Item href="/generalquestions" target="_blank" rel="noopener noreferrer" className={styles.dropmenu}>General Questions</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <NavDropdown
                  title={`Hi, ${user?.username || 'user'}`}
                  id="profile-dropdown"
                  className={`fs-5 ${styles.linkmenu}`}
                >
                  <NavDropdown.Item onClick={() => navigate('/profile')} className={styles.dropmenu}>
                    My Profile
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                 <Button variant="outline-danger" onClick={handleLogout} aria-label="Logout" className={styles.signbtn}>
  Logout
</Button>

                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <Button variant="outline-primary" onClick={() => navigate('/Login')} className={styles.loginbtn} aria-label="Login">
                    Login
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button variant="primary" onClick={() => navigate('/Signup')} className={styles.signbtn} aria-label="Sign Up">
                    Sign Up
                  </Button>
                </Nav.Link>
                <Nav.Link href="#upgrade">
                  <Button variant="primary" className={styles.signbtn} aria-label="Upgrade">Upgrade</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
