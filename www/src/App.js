import { Route, Switch } from "react-router-dom";
import History from "./components/layout/History";
import Navbar from "./components/layout/Navbar";
import Cards from "./components/layout/Cards";
import AddTodoCards from "./components/AddTodoCards";
import PostComponent from "./components/layout/PostComponent";
import CardComponent from "./components/layout/CardComponent";
function App() {
  return (
    <div>
     <Navbar />
      <Switch>
        <Route path="/">
          <Cards />
    
          <History />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
