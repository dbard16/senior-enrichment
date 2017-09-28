import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
     <nav className="navbar navbar-default">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/" activeClassName="active"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/students" activeClassName="active"> Students </NavLink>
            </li>
          </ul>
        </div>
      </div>

     </nav>
    )
  }

}

  // <div className="collapse navbar-collapse">
  //         <ul className="navbar-nav">
  //           <li className="nav-item active">
  //             Home
  //           </li>
  //           <li className="nav-item">
  //             Students
  //           </li>
  //         </ul>
  //       </div>

// <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
//   <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <a class="navbar-brand" href="#">Fixed navbar</a>
//   <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
