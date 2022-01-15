import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
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
          <small className={styles.websiteRights}>Laurindo Muginga © {getCurrentYear()}</small>
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
                aria-label='github'
              >              
              <i className='fab fa-github' />
              </Link>            
              <Link
                className={styles.socialIconLink}
                to='/'
                target='_blank'
                aria-label='gmail'
                href="mailto:mg.elijames@gmail.com"
              >
              <i className='fab fa-google' />
              </Link>
              <Link
                className={styles.socialIconLink}
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                href="https://www.linkedin.com/in/eli-james-47626921b/"
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
