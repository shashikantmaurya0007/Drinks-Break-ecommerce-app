import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <div class="footer-drinks-break-main">
          <h2>&copy; shashi Made with Love ❤️</h2>
          <div class="footer-drinksbreak-link-container">
            <a
              class="link"
              target="_blank "
              href="https://github.com/shashikantmaurya0007 "
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              class="link"
              target="_blank "
              href="https://www.linkedin.com/in/shashikant-maurya-2aa39668/ "
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              class="link"
              target="_blank "
              href="https://instagram.com/shashimourya1?utm_medium=copy_link "
            >
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
