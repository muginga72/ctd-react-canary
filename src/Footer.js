import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
          <Router>
          <div className={styles.footerLogo}>
            <Link to='/' className={styles.socialLogo}>
              MUGINGA
              <i className="fas fa-user-check" />
            </Link>
          </div>
          <small className={styles.websiteRights}>MUGINGA © 2021</small>
          <div className={styles.socialIcons}>            
            <Link
              className={styles.socialIconLink}
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className={styles.socialIconLink}
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
              </Link>
            </div>
          </Router>
        </div>
      </section>
    </div>
    
  )
}

export default Footer;
