import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
  <div class="row align-items-start">
    <div class="col-12 col-md-4">
      One of three columns
    </div>
    <div class="col-12 col-md-4">
      One of three columns
    </div>
    <div class="col-12 col-md-4">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center justify-content-end">
    <div class="col-12 col-md-4">
      One of three columns
    </div>
    <div class="col-12 col-md-4">
      One of three columns
    </div>
  </div>
</div>


    )
  }
}

export default Home;
