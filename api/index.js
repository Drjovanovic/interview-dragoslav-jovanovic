const express = require('express');
const mongoose = require("mongoose");
const mongoDB = "mongodb://root:example@mongo";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDb...", err));
var Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  isDone: Boolean,
  date: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

async function createTask({title, description, isDone}) {
  const task  = new Task({ 
	  title,
	  description,
	  isDone
  });
  
  const result = await task.save();
  console.log(result);
  return result;
  res.send(result)
}


async function getTasks() {
  const tasks = await Task.find()
  console.log("odgovor od tasks \n\n\n\n", tasks);
  return tasks;
}

async function editTask({id, title, description, isDone}) {
  const task = await Task.findById(id);
  if (!task) return;
  task.title = title;
  task.description = description; 
  task.isDone = isDone;
  
  const result = await task.save();
  console. log(result);
}

async function deleteTask(id) {
  const result = await Task.deleteOne({_id: id});
  console.log(result);
}


const app = express();
const port = 3001;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
  
app.get('/', (req, res) => {
  res.send('Hi There 123')
}); 
 
app.post('/task/add', (req, res) => {
  const title = req.body.title || "";
  const description = req.body.description || "";
  const isDone = req.body.isDone || false;
  
  console.log('recived params', title, description, isDone);
  console.log('req', req);
  const result = {}
  createTask({title, description, isDone}).then( r =>{
    res.send({ status: "success", task: r })    
  })
});

app.post('/tasks', (req, res) => {
  const result = {}
  getTasks().then( r =>{
    res.send({ status: "success", tasks: r })    

  })
});

app.post('/task/edit', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const isDone = req.body.isDone;
  
  editTask({id, title, description, isDone}).then(r =>{
    res.send({status: "success", task: r})
  })
 
});

app.post('/task/delete', (req, res) => {
  const id = req.body.id;
  deleteTask(id).then(r =>{
    res.send({status: "success", task: r})
	})
})

app.listen(port, () => { 
	console.log(`Example app listening on port ${port}`)
})
