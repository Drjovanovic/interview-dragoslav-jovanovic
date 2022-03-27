import { Route, Switch } from "react-router-dom";
import React from "react";
import History from "./components/layout/History";
import Navbar from "./components/layout/Navbar";
import Cards from "./components/layout/Cards";
import EditCards from "./components/layout/EditCards";
function App() {
  
  return (
    <div>
      <Navbar />
      
      <div >
        <Switch >
          <Route  path="/edit/:_id" component={EditCards} />
          <Route path="/history" component={History} />

          <Route path="/" component={Cards}  />
        </Switch>
      </div>
    </div>
  );
}

export default App;
