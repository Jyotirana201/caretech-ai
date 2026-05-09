import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import Banner from './bannerhome.jsx';
import WorkSection from './workhome.jsx'; 
import ServicesSection from './servicehome.jsx';
import AboutSection from './abouthome.jsx';
import UpgradeSection from './upgradehome.jsx';
import Footer from './footer.jsx';
import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="p-0">
      <CustomNavbar/>
      <Banner />
      <WorkSection /> 
      <ServicesSection /> 
      <AboutSection/>
      <UpgradeSection/>
      <Footer/>
    </Container>
  );
}

export default HomePage;
