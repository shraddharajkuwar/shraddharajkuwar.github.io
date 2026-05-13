import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <h3 className="footer_title">Let’s connect</h3>

        <a
          href="mailto:rajkuwarshraddha03@gmail.com"
          className="footer_email"
        >
          rajkuwarshraddha03@gmail.com
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_linkedin"
          aria-label="LinkedIn"
        >
          in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
