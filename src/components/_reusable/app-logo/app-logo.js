import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FiSun} from 'react-icons/all';
import {NavLink} from 'react-router-dom';

const AppLogo = ( {className} ) =>
  <NavLink
    to={'/'}
    className={ classNames(className, 'font-black tracking-tight flex content-center items-center') }>
    Weatherly.APP
    <FiSun />
  </NavLink>;

AppLogo.propTypes = {
  className: PropTypes.string,
};

export default AppLogo;
