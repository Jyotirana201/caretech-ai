import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import BannerSymptoms from './bannersymptoms.jsx';
import AboutSymptomsSection from './aboutsymptoms';
import OptionSection from './optionsymptoms';
import Footer from './footer.jsx';

import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

const SymptomsChecker = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container fluid className="p-0">
        <CustomNavbar />
        <BannerSymptoms />
        <AboutSymptomsSection />
        <OptionSection />
        <Footer />
      </Container>
    </div>
  );
};

export default SymptomsChecker;