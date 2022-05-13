import React from "react";
import "./DeleteCardModal.css";

const DeleteCardModal = (props) => {
  const id=props.task._id
  const rev=props.task._rev
function onDelete(){props.deleteTask({id,rev})}
function onConfirmDelete(){props.setShowModalDelete(!props.showModalDelete)}
 const handleDelete= ()=>{
     onDelete();
     onConfirmDelete()
 }
  return (
    <div>
      <div className="deleteCardModal">
      
        <div className=" col s12 ">
          <h4>Are You Sure ?</h4>
          <p className="center">This action will delete Todo</p>
        
        <div className="modal-footer" >
          <ul >
            <li className="left">
              <button
                className=" waves-effect waves-red btn-flat "
                onClick={() => props.setShowModalDelete(!props.showModalDelete)}
              >
                No
              </button>
            </li>
            <li className="right">
              <button
                className=" waves-effect waves-green btn-flat "
                onClick={handleDelete}
              >
                Yes
              </button>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DeleteCardModal;
