import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-3">
      <div className="container">
        <p className="mb-1">&copy; 2024 Sudarshan. All rights reserved.</p>
        <div>
          <a href="#" className="text-white me-3"><FaFacebookF /></a>
          <a href="#" className="text-white me-3"><FaTwitter /></a>
          <a href="#" className="text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;