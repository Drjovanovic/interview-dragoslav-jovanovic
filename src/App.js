import { Route, Switch } from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import Cards from "./components/layout/Cards";

function App() {
  return (
    <div>  <Switch>
      <Route>
      <Navbar />
    </Route>
    <Route>
      <Cards
        title="Learn React"
        paragraph="I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively."
      />
      </ Route>
       </Switch>
    </div>
  )
}

export default App;
