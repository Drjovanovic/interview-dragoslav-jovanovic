import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default class AddTask extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".modal");
      let instances = M.Modal.init(elems, {});
    });
  }

  state = {
    title: "",
    description: "",
  };

  handleClose = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.title === "" && this.state.description === "") {
      return;
    }
    this.props.addTask(this.state);
    this.setState({ title: "", description: "" });
  };
  render() {
    return (
      <div id="modal_box" className="modal">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  value={this.state.title}
                  id="title"
                  type="text"
                  length="10"
                  onChange={this.handleChange}
                />
                <label htmlFor="input_text">Input text</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  value={this.state.description}
                  id="description"
                  className="materialize-textarea"
                  length="12"
                  onChange={this.handleChange}
                ></textarea>
                <label htmlFor="description">Textarea</label>
              </div>
            </div>
            <button
              onClick={this.handleSubmit}
              disabled={!this.state.title && !this.state.description}
              className="btn-flat waves-effect waves-green modal-close right"
            >
              Create
            </button>
            <button
              onClick={this.handleClose}
              className="modal-close waves-effect waves-red btn-flat left"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}
