import React,{ useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  let [title, setTitle] = useState(props.task.title);
  let [description, setDescription] =useState(props.task.description);
  const [id] = useState(props.task._id);
  const isDone = useState(props.task.isDone);
 

  const handleEdit = (e) => {
    let setState={
      _id: id,
      title,
      description,
      isDone
    }
    e.preventDefault();
    console.log("bifore send", setState);
    props.editTask(setState);
  };
  return (
    <div className="editModal">
      Modal text
      <form className="col s12">
        <div className="input-field col s12">
          <div>{id}</div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="waves-green btn-flat right" onClick={handleEdit}>
            Edit
          </button>

          <button
            className="waves-red btn-flat left"
            onClick={() => props.setShowModalEdit(!props.showModalEdit)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditModal;
