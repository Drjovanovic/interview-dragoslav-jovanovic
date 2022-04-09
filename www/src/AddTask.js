import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
export default class AddTask extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".modal");
      let instances = M.Modal.init(elems, {});
    });
  }

  // state = {
  //  title: null,
  //   description: null,
  
  //  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log("changed state", this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("bifore send", this.state);
    this.props.addTask(this.state);
  };
  render() {
    return (
      <div id="modal_box" className="modal" >
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="title"
                  type="text"
                  length="10"
                  onChange={this.handleChange}
                />
                <label htmlFor="input_text">Input text</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="description"
                  className="materialize-textarea"
                  length="12"
                  onChange={this.handleChange}
                ></textarea>
                <label htmlFor="description">Textarea</label>
                
              </div>
            </div>
            <button className="btn-flat waves-effect waves-green modal-close right">
                  Create
                </button>
                <button className="modal-close waves-effect waves-red btn-flat left">
                Chancel
              </button>
          </form>
        </div>
      </div>
    );
  }
}























// import React from 'react'
// import 'materialize-css/dist/css/materialize.min.css'
// import { useState } from "react";

// // state = {
// //     title: null,
// //     description: null,
// //   };


// const AddTask = (props) => {
// const[title, setValueTitle]= useState(null)
// const[description, setValueDescription]= useState(null)
//     // handleChange = (e) => {
//     //    setState({
//     //       [e.target.id]: e.target.value,
//     //     });
//     //   };
//     //   handleAdd = (e) => {
//     //     e.preventDefault();
//     // //    props.addTask(state)
//     //     console.log("Ovo je state od add ", state);
//     //   };
//   return (
//     <div>
//         <div>
//         <div>
//           <button
//             className="waves-effect waves-light btn modal-trigger"
//             data-target="modal2"
//           >
//             Add New
//           </button>

//           <div
          
//             id="modal2"
//             className="modal"
//           >
//             <div className="modal-content">
//               <div className="row">
//                 <form className="col s12">
//                   <div className="row">
//                     <div className="input-field col s6">
//                       <input value={title}
//                         id="title"
//                         type="text"
//                         data-length="10"
//                         onChange={(e) => setValueTitle(e.target.value)}
//                       />
//                       <label htmlFor="input_text">Input text</label>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="input-field col s12">
//                       <textarea value={description}
//                         id="description"
//                         className="materialize-textarea"
//                         data-length="120"
//                         onChange={(e) => setValueDescription(e.target.value)}
//                       ></textarea>
//                       <label htmlFor="textaria">Textarea</label>
//                     </div>
//                   </div>
//                 </form>
//                 <div className="modal-footer">
//                   <button className="modal-close waves-effect waves-red btn-flat left">
//                     Cancel
//                   </button>
//                   <button
//                     className="modal-close waves-effect waves-green btn-flat right"
//                     onClick={props.handleAdd}
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddTask;