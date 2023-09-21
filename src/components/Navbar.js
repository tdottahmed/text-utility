import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg px-4 navbar-${props.mode} bg-${props.mode}`}
      >
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to="/" className="nav-link">
                Home
              </Link> */}
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link to="/about" className="nav-link">
                {props.about}
              </Link> */}
              <a href="#" className="nav-link">
                {props.about}
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark
          </label>
        </div>
      </nav>
    </div>
  );
}
