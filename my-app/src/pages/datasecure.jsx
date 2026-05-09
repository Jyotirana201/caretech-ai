import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import BannerDataSecure from './bannerdatasecure.jsx';
import SecurityIcons from './SecurityIcons.jsx';
import ContentDataSecure from './contentdatasecure.jsx';
import SecureAIWork from './secureaiwork.jsx';
import FeatureAIWork from './featureaiwork.jsx';
import Footer from './footer.jsx';

import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

const DataSecurity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container fluid className="p-0">
        <CustomNavbar />
        <BannerDataSecure/>
         <SecurityIcons/>
        <ContentDataSecure/>
        <SecureAIWork/>
        <FeatureAIWork/>
        <Footer />
      </Container>
    </div>
  );
};

export default DataSecurity;