import React, { useEffect } from 'react';
import CustomNavbar from './navbar.jsx';
import  Chatbot from './chatbot';
import Footer from './footer.jsx';

import { Container } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";


const ChatBotHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Container fluid className="p-0">
        <CustomNavbar />
        <Chatbot />
        <Footer />
      </Container>
    </div>
  );
};

export default ChatBotHome;
