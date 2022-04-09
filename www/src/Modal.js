import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


export const Modal = (props) => {
  
  return (
    <div>
    <div>
      <a
        className="waves-effect waves-light btn modal-trigger"
        data-target="modal1"
      >
        Delte
      </a>
    </div>
    <div
      ref={(Modal) => {
        this.Modal = Modal;
      }}
      id="modal1"
      className="modal"
    >
      <div className="modal-content">
        <h4>Are You Sure ?</h4>
        <p>This action will delete Todo</p>
      </div>
      <div className="modal-footer">
        <a className="modal-close waves-effect waves-red btn-flat">
          Disagree
        </a>
        <button>Submit</button>
        <a
          className="modal-close waves-effect waves-green btn-flat"
           onClick={(_id)=>this.props.onDelete(this.props.task._id)}
        >
          Delete
        </a>
      </div>
    </div>
  </div>
  )
}






// class Modal extends Component {
//   componentDidMount() {
//     const options = {
//       onOpenStart: () => {
//         console.log("Open Start");
//       },
//       onOpenEnd: () => {
//         console.log("Open End");
//       },
//       onCloseStart: () => {
//         console.log("Close Start");
//       },
//       onCloseEnd: () => {
//         console.log("Close End");
//       },
//       inDuration: 250,
//       outDuration: 250,
//       opacity: 0.5,
//       dismissible: false,
//       startingTop: "4%",
//       endingTop: "10%",
//     };
//     M.Modal.init(this.Modal, options);
//   }
//   render() {
//     console.log("Props to Modal", this.props);
//     return (
//       <div>
//         <div>
//           <a
//             className="waves-effect waves-light btn modal-trigger"
//             data-target="modal1"
//           >
//             Delte
//           </a>
//         </div>
//         <div
//           ref={(Modal) => {
//             this.Modal = Modal;
//           }}
//           id="modal1"
//           className="modal"
//         >
//           <div className="modal-content">
//             <h4>Are You Sure ?</h4>
//             <p>This action will delete Todo</p>
//           </div>
//           <div className="modal-footer">
//             <a className="modal-close waves-effect waves-red btn-flat">
//               Disagree
//             </a>
//             <button>Submit</button>
//             <a
//               className="modal-close waves-effect waves-green btn-flat"
//                onClick={(_id)=>this.props.onDelete(this.props.task._id)}
//             >
//               Delete
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
