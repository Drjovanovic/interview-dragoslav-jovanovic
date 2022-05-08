// create database
// const http = require("http");
// let clientTask = http.createClient(5984, "127.0.0.1");
// let request = clientTask.request("PUT", "/tasks1");
// request.end();
// request.on("response", (res) => {
//   if (res.statusCode == 201) {
//     console.log("DB Created");
//   } else {
//     console.log("DB failed to Create");
//   }
// });

// const dbhost = "127.0.0.1";
// const dbPort = 5984;
// const dbName = "tasks";
// const couchdb = require("felix-couchdb");
// const client = couchdb.createClient(dbPort, dbhost);

// const db = client.db(dbName);

// //create document
// const title = {title:'nesto'};
// db.saveDoc("2609", title, (err, doc) => {
//   if (err) {
//     console.log(JSON.stringify(err));
//   } else {
//     console.log("Task Created");
//   }
// });

// //read cocument

// db.getDoc("02440d0016202db699a901d06a000c3d",  (err, doc) => {
//   return(doc);
// });
// //update document
// db.getDoc("2069", (err, doc) => {
//   doc.title = "";
//   doc.description = "";
//   doc.isDone=true
//   db.saveDoc("2609", doc);

//   db.getDoc("2609", (err, revisedUser) => {
//     console.log(revisedUser);
//   });
// });

// var couch = require('couch-db'),
//     server = couch('http://localhost:5984');
// // var CouchDB = require('couch-db').CouchDB;
// //     server = new CouchDB('http://localhost:5984');

//     var db = server.database('couch');

// const express = require("express");
// const mongoose = require("mongoose");
// const mongoDB = "mongodb://root:example@mongo";

// mongoose
//   .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDb...", err));

// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   isDone: Boolean,
//   date: { type: Date, default: Date.now },
// });

// const Task = mongoose.model("Task", taskSchema);

// async function createTask({ title, description, isDone }) {
//   const task = new Task({
//     title,
//     description,
//     isDone,
//   });

//   const result = await task.save();
//   console.log(result);
//   return result;
//   res.send(result);
// }

// async function getTasks() {
//   const tasks = await Task.find().sort({ date: -1 });

//   return tasks;
// }
// const bodyParser = require("body-parser");
// const path = require("path");
// const NodeCouchDb = require("node-couchdb");

// const couch = new NodeCouchDb();

// const dbName = "tasks";
// const viewUrl = "http://localhost:5984/_utils/#database/tasks/_all_docs";

// async function getTasks() {
//   const tasks = await couch.listDatabases().then((dbs)=>{
//     console.log(dbs);
//   })

//   return tasks;
// }

// async function editTask({ id, title, description, isDone }) {
//   const task = await Task.findById(id);
//   if (!task) return;
//   task.set({ title, description, isDone });
//   const result = await task.save();
// }

// async function isDoneTask({ id, isDone }) {
//   const task = await Task.findById(id);
//   if (!task) return;
//   task.set({ isDone });
//   const result = await task.save();
//   console.log(result);
// }

// async function deleteTask(id) {
//   const result = await Task.deleteOne({ _id: id });
// }

// couch.listDatabases().then(function(dbs){
// console.log(dbs);
// });
// const dbname = 'tasks'
// // const viewUrl =

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//  couch.listDatabases().then(function(dbs){
// console.log(dbs);
// });
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// const nano = require('nano')('http://admin:password@localhost:5984');
// const tasks = nano.db.use('tasks');

// async function createTask() {

//   const tasks = nano.use('tasks')
//   const result = await tasks.insert({ id, title,description,isdone }, 'rabbit')
//   return result
// }

// //Creating New Documents
// var task = {
//   title: 'pikachu',
//   description: 'thunder bolt',
//   isDone: false
// };

// tasks.insert(task, 'unique_id', function(err, body){
// if(!err){
//   //awesome
// }
// });

// // Retrieving Documents
//
import express from "express";
import axios from "axios";
// mongoose
//   .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDb...", err));

// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   isDone: Boolean,
//   date: { type: Date, default: Date.now },
// });

// const Task = mongoose.model("Task", taskSchema);

async function createTask({ title, description, isDone }) {
  const task = new Task({
    title,
    description,
    isDone,
  });

  const result = await task.save();
  console.log(result);
  return result;
  res.send(result);
}

async function getTasks() {
  const tasks = await axios.get(
    "http://admin:password@localhost:8080/db/tasks/_all_docs?include_docs=true"
  );
// const tasks = "bilo koji string"
  return tasks;
}

async function editTask({ id, title, description, isDone }) {
  const task = await Task.findById(id);
  if (!task) return;
  task.set({ title, description, isDone });
  const result = await task.save();
}

async function isDoneTask({ id, isDone }) {
  const task = await Task.findById(id);
  if (!task) return;
  task.set({ isDone });
  const result = await task.save();
  console.log(result);
}

async function deleteTask(id) {
  const result = await Task.deleteOne({ _id: id });
}




const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("77777");
});

app.post("/task/add", (req, res) => {
  const title = req.body.title || "";
  const description = req.body.description || "";
  const isDone = req.body.isDone || false;

  console.log("recived params", title, description, isDone);
  console.log("req", req);
  const result = {};
  // createTask({ title, description, isDone }).then((r) => {
  //   res.send({ status: "success", task: r });
  // });
});

app.get("/tasks", (req, res) => {
  // const result = {};
  getTasks().then((r) => {
    res.send({ status: "success", tasks: r });
  }).catch((r)=>console.log("bad response", r))
});

app.post("/task/edit", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const isDone = req.body.isDone;

  //   editTask({ id, title, description, isDone }).then((r) => {
  //     res.send({ status: "success", task: r });
  //   });
});

app.post("/task/isdone", (req, res) => {
  const id = req.body.id;
  const isDone = req.body.isDone;

  //   isDoneTask({ id, isDone }).then((r) => {
  //     res.send({ status: "success", task: r });
  //   });
});

app.post("/task/delete", (req, res) => {
  const id = req.body.id;
  //   deleteTask(id).then((r) => {
  //     res.send({ status: "success", task: r });
  //   });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
