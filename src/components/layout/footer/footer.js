import React from 'react';
import AppLogo from '../../_reusable/app-logo/app-logo';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/all';
import {SiTiktok} from 'react-icons/all';

const Footer = props => {
  return (
    <footer>
      <div><AppLogo /> &copy; { new Date().getFullYear() }</div>
      <div>
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
