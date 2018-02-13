import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-12 col-md-4">
            One of three columns
          </div>
          <div className="col-12 col-md-4">
            One of three columns
          </div>
          <div className="col-12 col-md-4">
            One of three columns
          </div>
        </div>
        <div className="row align-items-center justify-content-end">
          <div className="col-12 col-md-4">
            One of three columns
          </div>
          <div className="col-12 col-md-4">
            One of three columns
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
