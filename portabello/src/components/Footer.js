import React from "react";

import FacebookLogo from "./assets/facebook.png";
import InstagramLogo from "./assets/insta-ico.png";
import TwitterLogo from "./assets/twitter-ico.png";

export default function Footer({ currentPage, handlePageChange }) {
return(
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Socials</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com"
              >
                <img class="main-footer__icon" src={FacebookLogo} alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com"
              >
                <img class="main-footer__icon" src={TwitterLogo} alt="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com"
              >
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src={InstagramLogo}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Portabello</h4>
            <p class="main-footer__short-desc">
              lorem Tempor cillum enim tempor esse laboris excepteur officia.
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2023 Portabello.com | Website by Wyatt Howlett | All Rights Reserved
        </div>
      </div>
    </footer>
);
}