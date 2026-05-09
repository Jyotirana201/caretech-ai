import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import BannerGeneralHealth from './bannergeneralhealth.jsx';
import TipsGeneralHealthSection from './tipsgeneralhealth.jsx';
import CategoriesSection from './categoriesgeneralhealth.jsx';
import Footer from './footer.jsx';

import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

const GeneralHealth = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container fluid className="p-0">
        <CustomNavbar />
        <BannerGeneralHealth />
        <TipsGeneralHealthSection />
        <CategoriesSection />
        <Footer />
      </Container>
    </div>
  );
};

export default GeneralHealth;

