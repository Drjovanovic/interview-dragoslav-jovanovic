import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteCardModal from "./DeleteCardModal";
import BackdropModal from "./BackdropModal";
import IsDoneTask from "./IsDoneTask";

const Card = (props) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isDone, setIsDone] = useState(props.task.isDone);

  const handleIsDone = (e) => {
    e.preventDefault();
    console.log(
      "ovo je odgovor od isDone: ",
      props.task._id,
      props.task.isDone,
      setIsDone
    );
    const setIsDone={
      id:props.task._id,
      isDone
    }
     props.isDoneTask(setIsDone());
  };
  return (
    <div>
      <div className="column">
        {showModalEdit && (
          <EditModal
            task={props.task}
            editTask={props.editTask}
            setShowModalEdit={setShowModalEdit}
            showModalEdit={showModalEdit}
          />
        )}
        {showModalDelete && (
          <DeleteCardModal
            task={props.task}
            deleteTask={props.deleteTask}
            showModalDelete={showModalDelete}
            setShowModalDelete={setShowModalDelete}
          />
        )}
        {showModalDelete && <BackdropModal />}
        {showModalEdit && <BackdropModal />}
        <div className="col s12 m6">
          <div className="card blue-grey   darken-1">
            <div className="card-content white-text">
              <div>
                <span className="right green-text" onClick={handleIsDone}>
                  <IsDoneTask isDone={props.task.isDone} />
                </span>
                <span className="card-title">
                  <h4>{props.task.title}</h4>
                </span>
                <h5>{props.task.description}</h5>
              </div>
            </div>
            <div className="card-action">
              <div className="row">
                <ul>
                  <li className="left">
                    <button
                      className="waves-effect waves-light btn"
                      onClick={() => setShowModalEdit(!showModalEdit)}
                    >
                      Edit
                    </button>
                  </li>
                  <li className="right">
                    <button
                      className="waves-effect waves-light btn"
                      onClick={() => setShowModalDelete(!showModalDelete)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
