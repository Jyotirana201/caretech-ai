import React from 'react';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './bannerhome.module.css'; 

const Banner = () => {
  return (
    <div className={styles.bsection}>
      <Carousel>

        <Carousel.Item>
          <img className="d-block w-100" src="Untitled design (39).png" alt="First slide" />
          <Carousel.Caption className={styles['carousel-caption']}>
            <h2 className={styles.ban1}>Your Personal Dermatologist</h2>
            <p className={styles.ban1para}>
              Say goodbye to skin troubles and hair fall with AI-driven care! Our advanced technology analyzes your needs and provides tailored solutions for healthier skin and stronger hair.
            </p>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="Untitled design (43).png" alt="Second slide" />
          <Carousel.Caption className={styles['carousel-caption']}>
            <h2 className={styles.ban2}>From Tears to Smiles</h2>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="Untitled design (42).png" alt="Third slide" />
          <Carousel.Caption className={styles['carousel-caption']}>
            <h2 className={styles.ban3}>Care That Comes from the Heart</h2>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="Untitled design (41).png" alt="Fourth slide" />
          <Carousel.Caption className={styles['carousel-caption']}>
            <h2 className={styles.ban4}>Your Everyday Wellness Partner</h2>
            <p className={styles.ban4para}>
              Stay healthy, stay informed. Our AI assistant guides your daily habits, tracks your progress, and helps you make smarter wellness choices. From nutrition to mental clarity — we’re with you every step of the way.
            </p>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="Untitled design (40).png" alt="Fifth slide" />
          <Carousel.Caption className={styles['carousel-caption']}>
            <h2 className={styles.ban5}>Because Every Child Deserves a Smart Mom</h2>
           
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Banner;
