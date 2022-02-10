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
      
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              Todo
            </a>
            <ul id="nav-mobile" className="right">
              <button
                data-target="modal1"
                className="waves-effect waves-light btn-large pulse modal-trigger large"
              >
                <i className="material-icons left ">add</i> Add New
              </button>

              <div id="modal1" className="modal">
                <div className="modal-content"></div>
                <div className="row">
                  <form className="col s10">
                    <div className="row">
                      <div className="input-field col s6">
                        <input id="input_text" type="text" data-length="12" />
                        <label for="input_text">Enter a name for Todo</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          id="textarea2"
                          className="materialize-textarea"
                          data-length="120"
                        ></textarea>
                        <label for="textarea2">Textarea</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    data-target="#!"
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
            </ul>
          </div>
        </nav>
      
    );
  }
}

export default Navbar;
