import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid container-home">
        <div className="row no-gutters">

          <div className="col-12 col-md-4 col-img col-img-design"></div>

          <div className="col-12 col-md-8">
            <div className="row no-gutters">
                <div className="col-12 col-md-6 col-img col-img-photos"></div>
                <div className="col-12 col-md-6 col-img col-img-education"></div>
            </div>
            <div className="row no-gutters">
                <div className="col-12 col-md-6 col-img col-img-blog"></div>
                <div className="col-12 col-md-6 col-img col-img-about"></div>
            </div>
          </div>



        </div>

      </div>
    )
  }
}
// <div className="col-12 col-md-4">
//   <div className="row row-photos no-gutters">
//     <div className="col-12 col-img col-img-photos"></div>
//   </div>
//   <div className="row row-blog no-gutters">
//     <div className="col-12 col-img col-img-blog"></div>
//   </div>
// </div>
//
// <div className="col-12 col-md-4">
//   <div className="row row-education no-gutters">
//     <div className="col-12 col-img col-img-education"></div>
//   </div>
//   <div className="row row-about no-gutters">
//     <div className="col-12 col-img col-img-about"></div>
//   </div>
// </div>



export default Home;
