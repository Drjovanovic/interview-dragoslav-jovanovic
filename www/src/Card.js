import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteCardModal from "./DeleteCardModal";
import BackdropModal from "./BackdropModal";
import IsDoneTask from "./IsDoneTask";
import "./Card.css";

const Card = (props) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleIsDone = (e) => {
    e.preventDefault();

    let don = {
      id: props.task._id,
      rev: props.task._rev,
      title:props.task.title,
      description:props.task.description,
      isDone: !props.task.isDone,
    };
    props.isDoneTask(don);
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
          <div
            className={
              (!props.task.isDone && "card blue-grey darken-1") ||
              " card  #eceff1 blue-grey lighten-2 "
            }
          >
            <div className="card-content white-text">
              <div>
                {!props.task.isDone && (
                  <div className="btnNotDon">
                  <span className="right green-text" onClick={handleIsDone}>
                    <IsDoneTask isDone={props.task.isDone} />
                  </span>
                  </div>
                )}
                {props.task.isDone && (
                  <span className="btnDonStyle" onClick={handleIsDone}>
                    <IsDoneTask isDone={props.task.isDone} />
                  </span>
                )}
                <div className="card-title center">
                  <h4 className="flow-text">{props.task.title}</h4>
                  <h5 className="flow-text">{props.task.description}</h5>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="row">
                <ul>
                  <li className="btnEditStyle">
                    <button
                      className={
                        (!props.task.isDone &&
                          "waves-effect waves-light btn") ||
                        "waves-effect waves-light btn disabled"
                      }
                      onClick={() => setShowModalEdit(!showModalEdit)}
                    >
                      Edit
                    </button>
                  </li>
                  <li className="btnDelStyle">
                    <button className="btn-flat transparent">
                      <i
                        onClick={() => setShowModalDelete(!showModalDelete)}
                        className=" material-icons flat medium red-text darken-3"
                      >
                        <h2>delete</h2>
                      </i>
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
