import { useState } from "react";
import "./EditModal.css";


const EditModal = (props) => {
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
 let handleEdit = (e) => {
    e.preventDefault();
    console.log("bifore send", props.state);
    props.editTask(props.state);
  };
  return (
    <div className="editModal">
      Modal text
      <form className="col s12">
        <div className="input-field col s12">
          {/* <div>{props.task._id}</div> */}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button
            className="waves-red btn-flat right"
            onClick={() => {
              console.log("radiii nesto", props.task._id);

               handleEdit(props.task._id
                 
              //    title: props.task.title._id,
              //   description: props.task.description._id,
              // //   //isDone: task.isDone,
               );
            }}
          >
            Edit
          </button>
          <button
            className="waves-red btn-flat left"
            onClick={() => props.setShowModalEdit(!props.showModalEdit)}
          >
            Chancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditModal;
