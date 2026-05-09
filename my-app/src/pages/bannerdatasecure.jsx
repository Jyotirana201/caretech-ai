import React from 'react';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './bannerhome.module.css'; 

const BannerDataSecure = () => {
  return (
    <div className={styles.bsection}>
      <Carousel>
      
              <Carousel.Item>
                        <img className="d-block w-100" src="banner6.png" alt="Third slide" />
                        <Carousel.Caption className={styles['carousel-caption']}>
                          <h2 className={styles.ban3}>Your Data, Our Top Priority?</h2>
                        </Carousel.Caption>
                      </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="Untitled design (77).png" alt="Second slide" />
                        <Carousel.Caption className={styles['carousel-caption']}>
                          <h2 className={styles.ban2}>Built on Trust. Secured by Technology.</h2>
                        </Carousel.Caption>
                      </Carousel.Item>
      
            </Carousel>
    </div>
  );
};

export default BannerDataSecure;
