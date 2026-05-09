import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import BannerAIWork from './banneraiwork.jsx';
import PurposeAIWork from './purposeaiwork.jsx';
import WorkSection from './workhome.jsx';
import SecureAIWork from './secureaiwork.jsx';
import FeatureAIWork from './featureaiwork.jsx';
import Footer from './footer.jsx';

import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

const AIWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container fluid className="p-0">
        <CustomNavbar />
        <BannerAIWork/>
        <PurposeAIWork/>
        <WorkSection />
        <SecureAIWork/>
        <FeatureAIWork/>
        <Footer />
      </Container>
    </div>
  );
};

export default AIWork;