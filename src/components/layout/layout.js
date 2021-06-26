import PropTypes from 'prop-types';
import Header from './header/header';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
