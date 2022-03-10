import React, { Component } from "react";
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
          <a className="brand-logo center">Todo</a>

          
            <button data-target="modal3" className="btn modal-trigger">
              History
            </button>
            <button
              data-target="modal_box"
              className=" btn-large modal-trigger  right "
            >
             Add New</button>
            
            
            <div id="modal1" className="modal">
              <div className="modal-content"></div>
              <div className="row">
                <form className="col s10">
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="input_text" type="text" data-length="12" />
                      <label htmlFor="input_text">Enter a name for Todo</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="textarea2"
                        className="materialize-textarea"
                        data-length="12"
                      ></textarea>
                      <label htmlFor="textarea2">Textarea</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  data-target="{title}"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Add
                </button>
                <button
                  data-target="#!"
                  className="modal-close waves-effect waves-green btn-flat left"
                >
                  Cancel
                </button>
              </div>
            </div>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
