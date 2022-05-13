import express from "express";
import axios from "axios";

const createTask = async ({ title, description, isDone }) => {
  const creteDate = new Date
  const task = await axios.post(
    "http://admin:password@couchserver:5984/tasks/",
    { title, description, isDone, date:creteDate}
  );
};
const getTasks = async () => {
  const tasks = await axios.get(
    "http://admin:password@couchserver:5984/tasks/_all_docs?include_docs=true"
  );
  const cleanTasks = tasks.data.rows.map((n) => n.doc);
  const sortTasks = cleanTasks.reverse().sort((a,b)=>a.date - b.date)
  return sortTasks;
};
const editTask = async ({ id, rev, title, description, isDone ,date}) => {
  const editReq = `http://admin:password@couchserver:5984/tasks/${id}/?rev=${rev}`;
  const task = await axios.put(editReq, {
    title,
    description,
    isDone,
    date
  });
};
const isDoneTask = async ({ id, rev, title, description, isDone, date }) => {
  const isDoneReq = `http://admin:password@couchserver:5984/tasks/${id}/?rev=${rev}`;
  const task = await axios.put(isDoneReq, { title, description, isDone, date });
};
const deleteTask = async ({ id, rev }) => {
  const deleteReq = `http://admin:password@couchserver:5984/tasks/${id}/?rev=${rev}`;
  const task = await axios.delete(deleteReq);
};

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
  const date = req.body.date

  editTask({ id, rev, title, description, isDone ,date}).then((r) => {
    res.send({ status: "success", task: r });
  });
});

app.post("/task/isdone", (req, res) => {
  const id = req.body.id;
  const rev = req.body.rev;
  const title = req.body.title;
  const description = req.body.description;
  const isDone = req.body.isDone;
  const date = req.body.date

  isDoneTask({ id, rev, isDone, title, description, date }).then((r) => {
    res.send({ status: "success", task: r });
  });
});

app.post("/task/delete", (req, res) => {
  const id = req.body.id;
  const rev = req.body.rev;
  deleteTask({ id, rev }).then((r) => {
    res.send({ status: "success", task: r });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
