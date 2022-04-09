import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default class Edit extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
  }
  render() {
    return (
      <div>
        <div>
          <a
            className="waves-effect waves-light btn modal-trigger"
            data-target="modal3"
          >
            Edit
          </a>

          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id="modal3"
            className="modal"
          >
            <div className="modal-content">
            <div className="row">
              <div className="input-field col s6">
                <input
                  value="Alvin"
                  id="first_name2"
                  type="text"
                  className="validate"
                />
                <label className="active" htmlFor="first_name2">
                  First Name
                </label>
              </div>
            </div>
            </div>
            <div className="modal-footer">
              <a className="modal-close waves-effect waves-red btn-flat">
                Disagree
              </a>
              <a className="modal-close waves-effect waves-green btn-flat">
                Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
