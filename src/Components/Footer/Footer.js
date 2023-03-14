import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social">
        <li className="social-list">
          <a
            aria-label="github icon"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/deathmukh"
            className="social-link"
          >
            <i className="fab fa-github-alt"></i>
          </a>
        </li>
      </ul>
      <div className="copyright__div">
        <p className="copyright__p">
          <a className="copyright" href="#top" aria-label="copyright">
            ©{new Date().getFullYear()} deathmukh
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
