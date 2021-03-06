import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import styles from './layout.module.css';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
