
import React, { Component } from "react";
import EditCards from "./EditCards";
import { Link } from "react-router-dom";

export default class PostComponent extends Component {
 
  render() {
    
    const { tasks } = this.props;
    const tasksList = tasks.map((task) => {
      console.log("task",task);
      return (
        
          <div className="column " >
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <ul id="mobile" >
                  <li >
                    <button 
                      data-target="#!"
                      className="waves-effect waves-light btn right"
                    >
                      <i className="material-icons left">done_all</i>Completed
                    </button>

                    <button 
                      data-target="modal2"
                      className="waves-effect waves-light btn-floating transparent modal-trigger"
                    >
                      <i className="material-icons red-text left">delete</i>
                      Delite
                    </button>
                  </li>

                  <div id="modal2" className="modal" >
                    <div className="modal-content">
                      <span className="modal-title center">
                        <h4>Are You Sure ?</h4>
                      </span>
                      <span className="modal-title center">
                        <p>This action will delete Todo</p>
                      </span>
                    </div>
                    <div className="modal-footer" >
                      <button
                        onClick={() => 
                          // console.log({id: task._id}),
                            this.props.onDelete({id: task._id} )
                          }
                        className="modal-close waves-effect waves-green btn-flat"
                      >
                        Yes
                      </button>

                      <button
                        data-target="#!"
                        className="modal-close waves-effect waves-green btn-flat left"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </ul>
                <div className="card-content white-text" >
                  <span className="card-title center" >
                    <h3>{task.title}</h3>
                  </span>
                  <h4>{task.description}</h4>

                  <li >
                    <button 
                      onClick={() => console.log("ovoj je odgovor", task)}
                      data-target="modal4"
                      className="waves-effect waves-light btn modal-trigger"
                    >
                      <i className="material-icons red-text left ">edit</i>Edit
                    </button>
                  </li>
                </div>
              </div>
            </div>
            
            <EditCards 
            task={task} 
            onEdit={this.props.onEdit} />
            
          </div>
        
        /* <div key ={post["_id"]}>
          <h1 >{post.title}</h1>
          <p>{post.desc}</p>
        </div>
        */
      );
    });
    return <div className="column">{tasksList}</div>;
  }
}
