import React, { Component } from "react";

export default class PostComponent extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) => {
     
      return (
        <div className="column " key={post["_id"]}>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <ul id="mobile">
                <li>
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
                    <i className="material-icons red-text left">delete</i>Delite
                  </button>
                </li>

                <div id="modal2" className="modal">
                  <div className="modal-content">
                    <span className="modal-title center">
                      <h4>Are You Sure ?</h4>
                    </span>
                    <span className="modal-title center">
                      <p>This action will delete Todo</p>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => this.props.onDelete({ id: post["_id"] })}
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
              <div className="card-content white-text">
                <span className="card-title center">
                  <h3>{post.title}</h3>
                </span>
                <h4>{post.description}</h4>

                <li>
                  <button
                    data-target="modal1"
                    className="waves-effect waves-light btn modal-trigger"
                  >
                    <i className="material-icons red-text left ">edit</i>Edit
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
        /* <div key={post.id}>
          <h1 >{post.title}</h1>
          <p>{post.desc}</p>
        </div>
        */
      );
    });
    return <div className="column">{postList}</div>;
  }
}
