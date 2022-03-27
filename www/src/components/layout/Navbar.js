import React, { Component } from "react";
import {Link} from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".modal");
      let instances = M.Modal.init(elems, {});
    });
  }

  render() {
    return (
      <nav className="column">
        <div className="nav-wrapper">
          <Link className="brand-logo center" to="/">Todo</Link>

          
            <button   className="btn modal-trigger">
            <Link to="/history">History</Link>
            </button>
            <button
            
              data-target="modal_box"
              className=" btn-large modal-trigger  right "
            >
             Add New</button>
            
            
            
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
