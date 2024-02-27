import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
    <div className="footer-content">
      © {new Date().getFullYear()} Utah Tech University Cyber Club. All rights reserved.
    </div>
    </footer>
  );
}
