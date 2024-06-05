import React, { useEffect } from "react";
import "./Navbar.scss";
export const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.getElementById("navbar");

      if (window.scrollY > 0) {
        nav?.classList.add("nav-colored");
      } else {
        nav?.classList.remove("nav-colored");
      }
    });
  });

  const handleMenuClick = () => {
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu?.style.display == "block") {
      mobileMenu?.setAttribute("style", "display: none;");
    } else {
      mobileMenu?.setAttribute("style", "display: block;");
    }
  };

  return (
    <nav id="navbar" className="nav-main">
      <img
        className="brand"
        src="/logo-black.png"
        onClick={() => {
          window.location.href = "/";
        }}
      />
      <div className="nav-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="programs">Programs</a>
          </li>
          <li>
            <a href="courses">Courses</a>
          </li>
          <li>
            <a href="challenges">Challenges</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-parent">
        <img id="menu" className="menu" src="/hamburger.png" onClick={handleMenuClick} />
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="programs">Programs</a>
            </li>
            <li>
              <a href="courses">Courses</a>
            </li>
            <li>
              <a href="challenges">Challenges</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
            <li className="socials-list">
              <img src="/facebook.png" />
              <img src="/linkedn-2.png" />
              <img src="/twitter-2.png" />
              <img src="/instagram-2.png" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
