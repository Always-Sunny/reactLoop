import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-12 col-md-4">
            <Link to="/design"><div class="img img-1"><span>Design</span></div></Link>
          </div>
          <div class="col-md-8">
            <div class="row no-gutters">
              <div class="col-md-6">
                <Link to="/gallery"><div class="img img-2">2</div></Link>
              </div>
              <div class="col-md-6">
                <Link to="/education"><div class="img img-3">3</div></Link>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-6">
                <Link to="/blog"><div class="img img-4">4</div></Link>
              </div>
              <div class="col-md-6">
                <Link to="/about"><div class="img img-5">5</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
