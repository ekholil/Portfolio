import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
} from "@coreui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  const [visible, setVisible] = useState(false);
  const linkStyle = ({ isActive }) => {
    return {
      display: "block",
      backgroundColor: isActive ? "#28B463" : "",
      borderRadius: "5px",
      transition: ".5s ease",
      color: isActive ? "#fff" : "",
    };
  };

  return (
    <>
      <CNavbar
        expand="lg"
        style={{ backgroundColor: "#212F3D" }}
        colorScheme="light"
      >
        <CContainer>
          <CNavbarBrand href="#" className="text-white">
            <strong>Ibrahim Kholilullah</strong>
          </CNavbarBrand>
          <CNavbarToggler
            style={{
              color: "#000",
              backgroundColor: "#fff",
              border: "none",
              outline: "2px solid green",
            }}
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="ms-auto mb-2 py-2 mb-lg-0">
              <CNavItem>
                <NavLink style={linkStyle} className="btn text-white" to="/">
                  Home
                </NavLink>
              </CNavItem>
              <CNavItem>
                <NavLink
                  style={linkStyle}
                  className="btn text-white"
                  to="/project"
                >
                  Project
                </NavLink>
              </CNavItem>
              <CNavItem>
                <NavLink
                  style={linkStyle}
                  className="btn text-white"
                  to="/about"
                >
                  About
                </NavLink>
              </CNavItem>
              <CNavItem>
                <NavLink
                  style={linkStyle}
                  className="btn text-white"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </CNavItem>
              <CNavItem>
                <NavLink
                  style={linkStyle}
                  className="btn text-white"
                  to="/skill"
                >
                  Skills
                </NavLink>
              </CNavItem>

              <CNavItem>
                <NavLink
                  style={linkStyle}
                  className="btn text-white"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Menubar;
