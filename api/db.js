const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/taskapp";
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

async function createTask() {
  const task  = new Task({
	  title: "New Task",
	  description: "You must do something, man...",
	  isDone: false
  });

  const result = await task.save();
  console.log(result);
}

async function getTasks() {
  const tasks = await Task.find()
    // .find()
    // .or([{author: 'Mosh'}, {isPublished: true}])
    // .and([])
    //.find({ author: /^Mosh/i })
    //.find({ author: /Hamedani$/i })
    //.find({ author: /.*Mosh.*/i })
  console.log(tasks);
}

async function finishTask(id) {
const task = await Task.findById(id);
if (!task) return;
task.isDone = true;

const result = await task.save();
console. log(result);
}


async function updateTask({id, title, description, isDone}) {
const task = await Task.findById(id);
if (!task) return;
task.title = title;
task.description = description;
task.isDone = isDone;

const result = await task.save();
console. log(result);
return result;
