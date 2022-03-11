const { func } = require("joi");
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/mosh-vezbe";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("Could not connect to MongoDb"));

const courseShcema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseShcema);

async function getCourses() {
  return await Course
  .find({ isPublished: true })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort("name") 
    .select("tags author");
}
async function run() {
  const courses = await getCourses();
  console.log(courses);
}
run();
