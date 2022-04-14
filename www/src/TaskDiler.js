import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";

import CardsMap from "./CardsMap";

export default class TaskDiler extends Component {
  state = {
    tasks: [
      // {
      //   _id: 1,
      //   title: "",
      //   description: "",
      //   isDone: false,
      // },
   
    ],
  };

  componentDidMount() {
    axios.post("/api/tasks", {}).then((r) => {
      // console.log("response from axios", r);
      this.setState({ tasks: r.data.tasks });
    });
  }

  addTasks = ({ title, description, isDone }) => {
    axios
      .post("/api/task/add", { title, description, isDone })
      .then((r) => {
        console.log("response from axios add", r);
      })
      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          console.log("response from axios", r);
          this.setState({ tasks: r.data.tasks });
        });
      });
  };

  editTask = ({ id, title, description, isDone }) => {
    axios

      .post("/api/task/edit", { id, title, description, isDone })

      .then((r) => {
        console.log("response from axios edit", r);
        console.log("params", id, title, description, isDone);
      })
      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          console.log("response from axios", r);
          this.setState({ tasks: r.data.tasks });
        });
      });
  };
  isDoneTask = ({ id, isDone }) => {
    axios
      .post("/api/task/isdone", { id, isDone })
      .then((r) => {
        console.log("response from axios edit", r);
        console.log("params", id, isDone);
      })
      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          console.log("response from axios", r);
          this.setState({ tasks: r.data.tasks });
        });
      });
  };

  deleteTask = ({ id }) => {
    axios
      .post("/api/task/delete", { id })
      .then((r) => {
        console.log("response from axios delete", r);
        console.log("deliteted id is : ", id);
      })
      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          console.log("response from axios", r);
          this.setState({ task: r.data.tasks });
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
