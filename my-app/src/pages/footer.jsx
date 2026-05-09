import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from './footer.module.css'; // CSS Module import

const Footer = () => {
  return (
    <footer className={styles.footerbg + " text-light pt-5 pb-3"}>
      <Container>
        <Row className="mb-4">
          {/* Logo and About */}
          <Col md={3}>
            <img src="logobrainfooter.png" alt="Logo" className={styles["footer-logo"] + " mb-2"} />
            <p>Your health AI assistant. Helping you stay informed, supported, and in control of your health journey.</p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className={styles["footer-title"]}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/homepage" target="_blank" rel="noopener noreferrer" className={styles["footer-link"]}>Home</a></li>
              <li><a href="/aiworking" target="_blank" rel="noopener noreferrer" className={styles["footer-link"]}>About Us</a></li>
              <li><a href="/generalquestions" target="_blank" rel="noopener noreferrer"  className={styles["footer-link"]}>FAQ</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3}>
            <h5 className={styles["footer-title"]}>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/symptomschecker" target="_blank" rel="noopener noreferrer"  className={styles["footer-link"]}>AI Symptoms Checker</a></li>
              <li><a href="/generalhealth"  target="_blank" rel="noopener noreferrer"  className={styles["footer-link"]}>General Health</a></li>
              <li><a href="/haircareform" target="_blank" rel="noopener noreferrer"  className={styles["footer-link"]}>Hair and Skin Care</a></li>
              <li><a href="/chatbot" target="_blank" rel="noopener noreferrer"  className={styles["footer-link"]}>AI ChatBot</a></li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          <Col md={3}>
            <h5 className={styles["footer-title"]}>Newsletter</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
              </Form.Group>
              <Button variant="primary" type="submit" className={`w-100 ${styles.subbtn}`}>Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom line */}
        <hr className="bg-light" />
        <Row>
          <Col md={6}>
            <p className="mb-0">© 2025 CareTechAI. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#privacy" className={styles["footer-link"] + " me-3"}>Privacy</a>
            <a href="#terms" className={styles["footer-link"]}>Terms</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
