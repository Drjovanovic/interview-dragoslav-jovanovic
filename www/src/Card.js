import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteCardModal from "./DeleteCardModal";
import BackdropModal from "./BackdropModal";
import IsDoneTask from "./IsDoneTask";

const Card = (props) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isDone] = useState(props.task.isDone);
  const [id] = useState(props.task._id);
  console.log("In card isDone have value: ", props.task.isDone);

  const handleIsDone = (e) => {
    e.preventDefault();

    let don = {
      id,
      isDone: !props.task.isDone,
    };

    console.log("ovo je odgovor od isDone: ", don);

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
              (props.task.isDone === false && "card blue-grey darken-1") ||
              " card  #eceff1 blue-grey lighten-2 "
            }
          >
            <div className="card-content white-text">
              <div>
                {props.task.isDone === false && (
                  <span className={"right green-text"} onClick={handleIsDone}>
                    <IsDoneTask isDone={props.task.isDone} />
                  </span>
                )}

                <div className="card-title">
                  <h4>{props.task.title}</h4>{" "}
                  {props.task.isDone === true && (
                    <span
                      className={"centar green-text"}
                      onClick={handleIsDone}
                    >
                      <IsDoneTask isDone={props.task.isDone} />
                    </span>
                  )}
                  <h5>{props.task.description}</h5>
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="row">
                <ul>
                  <li className="left">
                    <button
                      className={
                        (props.task.isDone === false &&
                          "waves-effect waves-light btn") ||
                        "waves-effect waves-light btn disabled"
                      }
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
