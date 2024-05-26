import React, { useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const openNav = () => {
    alert();
    setToggleNav(!toggleNav);
  };
  return (
    <div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <span> Finexo </span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              onClick={openNav}
            >
              <span className=""></span>
            </button>

            <div
              className={`collapse navbar-collapse ${toggleNav ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {navbar.map((nav, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link">{nav.nav}</Link>
                  </li>
                ))}
                <li className="nav-item">
                  <Link className="nav-link">
                    {" "}
                    <FaUser /> Login
                  </Link>
                </li>
                <form className="form-inline">
                  <button
                    className="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <FaSearch />
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
