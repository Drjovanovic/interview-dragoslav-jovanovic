import "./App.css";

import Navbar from "./Navbar";
import TaskDiler from "./TaskDiler";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
        <TaskDiler />
      </ul>
    </div>
  );
}

export default App;
