import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/casestudies">Case Studies</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link className={isActive ? "active" : ""} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
