import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";

import CardsMap from "./CardsMap";

export default class TaskDiler extends Component {
  state = {
    tasks: [
      // {
      //   _id: 1,
      //   title: "Tako treba",
      //   description: "Jertako smo u mogucnosti",
      //   isDone: false,
      // },
      // {
      //   _id: 2,
      //   title: "Tako tako tako",
      //   description: "Jertako smo u mogucnosti",
      //   isDone: false,
      // },
      // {
      //   _id: 3,
      //   title: "Tako je bolje",
      //   description: "Jertako smo u mogucnosti",
      //   isDone: false,
      // },
    ],
  };


 componentDidMount() {
    axios.post("/api/tasks", {}).then((r) => {
      // console.log("response from axios", r);
      this.setState({ tasks: r.data.tasks });
    });

    // document.addEventListener("DOMContentLoaded", function () {
    //   var elemsTooltipped = document.querySelectorAll(".tooltipped");
    //   let elems = document.querySelectorAll(".modal");
    //   let instances = M.Modal.init(elems, {});
    // });
  }
  // state = {
  //   tasks: [{}],
  // };

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
        console.log("Edit id is : ", id);
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
          this.setState({ task: r.data.task });
        })
      })
      .then((r) => {
        axios.post("/api/tasks", {}).then((r) => {
          console.log("response from axios", r);
          this.setState({ tasks: r.data.tasks });
        })
      });
  };














  // addTask = (task) => {
  //   console.log("ovo je odgovor od Add", task);
  //   task._id = Math.random();
  //   let tasks = [...this.state.tasks, task];
  //   this.setState({
  //     tasks: tasks,
  //   });
  // };
  // handleEdit = (e) => {
  //  e.preventDefault();
  //   console.log("bifore send Edit",e.task);
  
  // };

  // handleDelete = (task) => {
  //   const tasks = this.state.tasks.filter((t) => t._id !== task);
  //   this.setState({ tasks });
  //   console.log("Event handler Called", task);
  // };
  render() {
    return (
      <div>
        <AddTask addTask={this.addTasks} />
        <CardsMap
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </div>
    );
  }
}
