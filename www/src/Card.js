import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteCardModal from "./DeleteCardModal";
import BackdropModal from "./BackdropModal";

const Card = (props) => {
  // state = {
  //   task: this.props.task
  // };

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
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
              <span className="card-title">
                <h4>{props.task.title}</h4>
              </span>
              <h5>{props.task.description}</h5>
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
