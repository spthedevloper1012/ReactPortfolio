import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smit</h1>

        <ui className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ui>

        <div className="footer__social">
          <a
          href="https://www.facebook.com/"
            className="footer__social-link"
            traget="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            traget="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/spthedevloper1012"
            className="footer__social-link"
            traget="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; SmitPatel. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
