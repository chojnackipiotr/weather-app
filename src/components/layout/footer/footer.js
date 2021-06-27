import styles from './footer.module.css';
import AppLogo from '../../_reusable/app-logo/app-logo';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/all';
import {SiTiktok} from 'react-icons/all';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <AppLogo className={styles.logo}/>
        <span className={styles.copyright}>&copy; {new Date().getFullYear()}</span>
      </div>
      <div className={styles.socialMedia}>
        Follow us on:
        <FaFacebook />
        <FaInstagram />
        <FaTwitter/>
        <SiTiktok />
      </div>
    </footer>
  );
};

export default Footer;
