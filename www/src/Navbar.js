import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a 
            // href="#" 
            className="brand-logo center">
              Todo
            </a>
            <ul>
              {/* <li className="left">
                <a 
                 href="#" 
                className="waves-effect waves-light btn">
                  History
                </a>
              </li> */}
              <li className="right">
                <button
                  data-target="modal_box"
                  className=" btn-large modal-trigger  right "
                >
                  Add New
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
