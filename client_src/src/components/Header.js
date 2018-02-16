import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Header.css";

class Header extends Component {
  render() {
    return (

      <nav className="navbar navbar-fixed-top navbar-expand-md navbar-light">
        <div className="d-flex w-100"></div>
        <div className="navbar-collapse collapse justify-content-center" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-1">1</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-2">2</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-3">3</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-4">4</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-5">5</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-6">6</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-7">7</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-8">8</div></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><div className="nav-img nav-img-9">9</div></Link>
            </li>
          </ul>
        </div>
        <span className="navbar-text small text-truncate mt-1 w-100 text-right">always show</span>
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
