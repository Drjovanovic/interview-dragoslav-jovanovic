import React, { Component } from "react";
import Card from "./Card";

export default class CardsMap extends Component {
  renderTags() {
    if (this.props.tasks.length === 0) return <p>There are no TODO tasks!</p>;
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <li key={task._id}>
            {
              <Card
                deleteTask={this.props.deleteTask}
                task={task}
                editTask={this.props.editTask}
                isDoneTask={this.props.isDoneTask}
              ></Card>
            }
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.props.tasks.length === 0 && "Please create a new TODO task"}
        {this.renderTags()}
      </div>
    );
  }
}
