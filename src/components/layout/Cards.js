import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
export class Cards extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elemsTooltipped = document.querySelectorAll('.tooltipped');
      let elems = document.querySelectorAll(".modal");
      let instances = M.Modal.init(elems, {});
    });
  }

  render() {
    function deliteHandler() {
      console.log(title);
    }
    const { title } = this.props;
    const { paragraph } = this.props;

    return (
      
        <div className="column">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <ul id="mobile">
                <li>
                <button data-target="#!" className="waves-effect waves-light btn right"><i className="material-icons left">done_all</i>Completed</button>

               
               
                  <button data-target="modal2" class="waves-effect waves-light btn-floating transparent modal-trigger" onClick={deliteHandler}>
                  <i className="material-icons red-text left">delete</i>Delite</button>
   
                </li>
              

                <div id="modal2" className="modal">
                  <div className="modal-content">
                    <span className="modal-title center">
                      <h4>Are You Sure ?</h4>
                    </span>
                    <span className="modal-title center">
                      <p>This action will delete Todo</p>
                    </span>
                  </div>
                  <div className="modal-footer">
                  <button data-target="#!" className="modal-close waves-effect waves-green btn-flat">Yes</button>

                    <button data-target="#!" className="modal-close waves-effect waves-green btn-flat left">Cancel</button>
                    
                  </div>
                </div>
              </ul>
              <div className="card-content white-text">
                <span className="card-title center">
                  <h2>{title}</h2>
                </span>
                <p>{paragraph}</p>

                <li>
                <button
                data-target="modal1"
                className="waves-effect waves-light btn modal-trigger"
              >
                <i className="material-icons red-text left ">edit</i>Edit
              </button>
             
                </li>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Cards;
