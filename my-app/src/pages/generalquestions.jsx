import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import FAQ from './Faq.jsx';
import Footer from './footer.jsx';

import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

const GeneralQuestion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container fluid className="p-0">
        <CustomNavbar />
        <FAQ/>
        <Footer />
      </Container>
    </div>
  );
};

export default GeneralQuestion;