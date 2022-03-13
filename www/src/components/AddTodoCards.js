import React, { Component } from "react";

export default class AddTodoCards extends Component {
  
  state = {
    title: null,
    description: null
  }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
    console.log('changed state', this.state);
}
handleSubmit = (e) =>{
    e.preventDefault();
    console.log('bifore send', this.state);
    this.props.addPost(this.state);
}
  render() {
    return <div  id="modal_box" className="modal">  
          <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input id="title" type="text" length="10" onChange={this.handleChange}/>
          <label htmlFor="input_text">Input text</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="description" className="materialize-textarea" length="120" onChange={this.handleChange}></textarea>
          <label htmlFor="description">Textarea</label>
          <button className="btn modal-trigger modal-close">Create</button>
        </div>
      </div>
    </form>
  </div>
  </div>;
  }
}
