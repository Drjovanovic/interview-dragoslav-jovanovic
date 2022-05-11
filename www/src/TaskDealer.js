import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";

import CardsMap from "./CardsMap";

export default class TaskDealer extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    axios.post("/api/tasks", {}).then((r) => {
     console.log("data", r);
      this.setState({ tasks: r.data.tasks });
    });
  }

  addTasks = ({ title, description, isDone }) => {
    axios.post("/api/task/add", { title, description, isDone }).then((r) => {
      this.setState({ tasks: [r.data.task, ...this.state.tasks] });
    });
  };

  editTask = ({ id, rev, title, description, isDone }) => {
    axios

      .post("/api/task/edit", { id, rev, title, description, isDone })

      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          this.setState({ tasks: r.data.tasks });
        });
      });
  };
  isDoneTask = ({ id, rev, title, description, isDone }) => {
    axios
      .post("/api/task/isdone", { id, rev, title, description, isDone })

      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          this.setState({ tasks: r.data.tasks });
        });
      });
  };

  deleteTask = ({ id ,rev}) => {
    axios
      .post("/api/task/delete", { id ,rev})

      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          this.setState({ tasks: r.data.tasks });
        });
      });
  };

  render() {
    return (
      <div>
        <AddTask addTask={this.addTasks} />
        <CardsMap
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          isDoneTask={this.isDoneTask}
        />
      </div>
    );
  }
}
