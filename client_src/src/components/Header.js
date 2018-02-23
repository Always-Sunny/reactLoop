import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light bg-white main-nav">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item nav-home nav-img">
              <Link to="/" className="nav-link link-home"></Link>
            </li>
          </ul>
          <ul className="nav navbar-nav mx-auto nav-ul">
            <li className="nav-item nav-sml"><Link to="/" className="nav-link etsy-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link sc-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link medium-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link spotify-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link twitter-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link skype-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link ln-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link fb-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link github-link img-link"></Link></li>
            <li className="nav-item nav-sml"><Link to="/" className="nav-link gmail-link img-link"></Link></li>
          </ul>
          <ul className="nav navbar-nav nav-prof nav-img">
            <li className="nav-item">
              <Link to="/" className="nav-link"></Link>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Header;
