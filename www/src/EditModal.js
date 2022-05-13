import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  let [title, setTitle] = useState(props.task.title);
  let [description, setDescription] = useState(props.task.description);
  const id = props.task._id;
  const rev= props.task._rev
  const date=props.task.date
  function closeModal() {
    props.setShowModalEdit(!props.showModalEdit);
  }
  const handleClose = (e) => {
    e.preventDefault();
    closeModal();
  };
  const handleEdit = (e) => {
    let editState = {
      id,
      rev,
      title,
      description,
      isDone: props.task.isDone,
      date
    };
    e.preventDefault();

    if (props.task.title === title && props.task.description === description) {
      return;
    }
    props.editTask(editState);
    closeModal();
  };
  return (
    <div className="editModal">
      <h3 className="green-text pulse">Edit</h3>
      <form className="col s12">
        <div className="input-field col s12 " >
          <input  value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button
            className="waves-green btn-flat right"
            onClick={handleEdit}
            disabled={
              (props.task.title === title &&
                props.task.description === description) ||
              (title === "" && description === "")
            }
          >
            Edit
          </button>

          <button className="waves-red btn-flat left" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditModal;
