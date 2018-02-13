import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
  <div class="row row-top align-items-start">
    <div class="col-12 col-md-4 col-img col-img-1">
      One of three columns
    </div>
    <div class="col-12 col-md-4 col-img col-img-2">
      One of three columns
    </div>
    <div class="col-12 col-md-4 col-img col-img-3">
      One of three columns
    </div>
  </div>
  <div class="row row-bot align-items-center justify-content-end">
    <div class="col-12 col-md-4 col-img col-img-4">
      One of three columns
    </div>
    <div class="col-12 col-md-4 col-img col-img-5">
      One of three columns
    </div>
  </div>
</div>


    )
  }
}

export default Home;
