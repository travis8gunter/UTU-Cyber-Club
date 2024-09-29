import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa'; // Import the social media icons
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="social-media-icons">
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61564578402441" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/utahtechcyber/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          {/* Discord */}
          <a
            href="https://discord.gg/your-discord-link">
            <FaDiscord className="social-icon" />
          </a>
        </div>
        © {new Date().getFullYear()} Utah Tech University Cyber Club. All rights reserved.
      </div>
    </footer>
  );
}
