import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item nav-home nav-img">
              <Link to="/" className="nav-link link-home">OHRYAN</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav mx-auto">
            <li className="nav-item"><Link to="/" className="nav-link">SM Links</Link></li>
          </ul>
          <ul className="nav navbar-nav nav-prof nav-img">
            <li className="nav-item">
              <Link to="/" className="nav-link">O</Link>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Header;

const navbarStyle = {
  backgroundColor: "white",
  height: "100px",
  boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.07)",
}
