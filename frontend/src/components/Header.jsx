/* Constant header 'navbar that will change according to being signed in or not signed' */
import {Link} from 'react-router-dom'
import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../assets/images/res-logo.png";
import { NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Make reservation",
    path: "/reservation",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];



export default function Header() {
    const menuRef = useRef(null);
    const headerRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
<header className="header" ref={headerRef}>
    <Container>
      <div className="nav__wrapper d-flex align-items-center justify-content-between">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
                <h5>UH Cougar Foods</h5>
            </Link>
        </div>

        {/* ======= menu ======= */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu d-flex align-items-center gap-5">
            {nav__links.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        {/* ======== nav right icons ========= */}
        <div className="nav__right d-flex align-items-center gap-4">

          <span className="user">
            <Link to="/Login">
                <i class="ri-user-line"></i>
            </Link>
          </span>

          <span className="mobile__menu"/*  onClick={toggleMenu} */>
          <i class="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </Container>
  </header>
);
}
