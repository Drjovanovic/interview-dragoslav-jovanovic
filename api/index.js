import express from "express";
import axios from "axios";

// const getUuid = async()=>{
//   const uid= await axios.get("http://admin:password@couchserver:5984/_uuids")
//   // return uid;
// }
const createTask = async ({ title, description, isDone }) => {
  const task = await axios.post(
    "http://admin:password@couchserver:5984/tasks/",
    { title, description, isDone }
  );
};
const getTasks = async () => {
  const tasks = await axios.get(
    "http://admin:password@couchserver:5984/tasks/_all_docs?include_docs=true"
  );
  const cleanTasks = tasks.data.rows.map((n) => n.doc);
  return cleanTasks;
};
const editTask = async ({ id, rev, title, description, isDone }) => {
  const editReq = `http://admin:password@couchserver:5984/tasks/${id}/?rev=${rev}`;
  const task = await axios.put(editReq, { title, description, isDone });
};
const deleteTask = async ({ id, rev }) => {
  const deleteReq = `http://admin:password@couchserver:5984/tasks/${id}/?rev=${rev}`;
  const task = await axios.delete(deleteReq);
};

// async function isDoneTask({ id, isDone }) {
//   const task = await Task.findById(id);
//   if (!task) return;
//   task.set({ isDone });
//   const result = await task.save();
//   console.log(result);
// }

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

  createTask({ title, description, isDone }).then((r) => {
    res.send({ status: "success", task: r });
  });
});

app.post("/tasks", (req, res) => {
  getTasks().then((r) => {
    res.send({ status: "success", tasks: r });
  });
});

app.post("/task/edit", (req, res) => {
  const id = req.body.id;
  const rev = req.body.rev;
  const title = req.body.title;
  const description = req.body.description;
  const isDone = req.body.isDone;
  editTask({ id, rev, title, description, isDone }).then((r) => {
    res.send({ status: "success", task: r });
  });
});

app.post("/task/isdone", (req, res) => {
  const id = req.body.id;
  const isDone = req.body.isDone;

  //   isDoneTask({ id, isDone }).then((r) => {
  //     res.send({ status: "success", task: r });
  //   });
});

app.post("/task/delete", (req, res) => {
  const id = req.body.id.id;
  const rev = req.body.rev.rev;
  deleteTask({ id, rev }).then((r) => {
    res.send({ status: "success", task: r });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
