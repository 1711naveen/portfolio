import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="text-sm">Designed and Developed by Naveen Yadav</div>
      <div className="text-sm">Copyright © 2025 SB</div>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-400">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <FaGithub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;