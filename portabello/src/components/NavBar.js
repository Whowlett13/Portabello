import React from "react";
import Mushroom from "./assets/mushroom.jpeg";
import HamMenuClose from "./assets/ham-menu-close.svg";
import HamMenu from "./assets/ham-menu.svg";
import {NavBarJs} from "./assets/NavBar.js"

export default function NavBar({currentPage, handlePageChange}){
    return(
      
      <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src={Mushroom}
              alt="Logo Image"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Portabello</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link">
                Projects
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#contact" class="header__link"> Contact </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src={HamMenu}
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src={HamMenuClose}
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#French"> French </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#Contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    );
}

