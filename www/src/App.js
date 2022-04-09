// import logo from './logo.svg';
import './App.css';

// import CardsMap from './CardsMap';
import Navbar from './Navbar';
import TaskDiler from './TaskDiler';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
      {/* <CardsMap /> */}
      <TaskDiler />
      </ul>
      
    </div>
  );
}

export default App;
