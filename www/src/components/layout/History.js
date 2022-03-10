import { Route,} from "react-router-dom"
import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import Cards from "./Cards";
export class History extends Component {
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function () {
          var elemsTooltipped = document.querySelectorAll('.tooltipped');
          let elems = document.querySelectorAll(".modal");
          let instances = M.Modal.init(elems, {});
        });
      }
    
  render() {
    return (
      <div>

 <div id="modal3" className="modal">
   
     <Cards />
   
   
   </div>
 </div>
      
    )
  }
}

export default History;


