import React from 'react';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './bannerhome.module.css';

const BannerSymptoms = () => {
  return (
    <div className={styles.bsection}>
      <Carousel>

        <Carousel.Item>
                  <img className="d-block w-100" src="Untitled design (50).png" alt="Third slide" />
                  <Carousel.Caption className={styles['carousel-caption']}>
                    <h2 className={styles.ban3}>Not Feeling Well? Let’s Figure It Out</h2>
                    
                  </Carousel.Caption>
                </Carousel.Item>

        <Carousel.Item>
                  <img className="d-block w-100" src="Untitled design (49).png" alt="Second slide" />
                  <Carousel.Caption className={styles['carousel-caption']}>
                    <h2 className={styles.ban2}>Glow Starts with Clarity</h2>
                   
                  </Carousel.Caption>
                </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default BannerSymptoms;
