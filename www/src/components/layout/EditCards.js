import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default class EditCards extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".modal");
      let instances = M.Modal.init(elems, {});
    });
  }

  handleChangeEdit = ({ currentTarget: input }) => {
    const task = { ...this.props.srate.task };
    task[input.name] = input.value;

    this.setState({ task });
    console.log("changed state on Edit", this.state);
  };
  handleEdit = (e) => {
    e.preventDefault();

    console.log("bifore send on Edit", this.state);
    this.props.onEdit(this.state);
  };
  render() {
    const { task } = this.props;
    console.log("prooooooppppppooooo", task);
    return (
      <div>
        <div id="modal4" className="modal">
          <div className="modal-content">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      data-length="12"
                      value={task.title}
                      onChange={this.handleChangeEdit}
                    />
                    <label htmlFor="edit_text">Edit task name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="description"
                      name="description"
                      // className="materialize-textarea"
                      data-length="12"
                      value={task.description}
                      onChange={this.handleChangeEdit}
                    ></textarea>
                    <label htmlFor="descripton">Textarea za edit</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                console.log("radiii nesto", this);

                this.props.onEdit({
                  _id: task._id,
                  title: task.title,
                  description: task.description,
                  //isDone: task.isDone,
                });
              }}
              data-target="value"
              className="btn modal-trigger modal-close"
            >
              Edit
            </button>
            <button
              data-target="#!"
              className="modal-close waves-effect  btn-flat left"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
