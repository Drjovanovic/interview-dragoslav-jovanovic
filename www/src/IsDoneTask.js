import React, { useState } from "react";

const IsDoneTask = (props) => {
  const [showDone, setIsDone] = useState(props.isDone);

  return (
    <div>
      {(showDone && (
        <span className="row right">
          <button className="btn-flat transparent right">
            <h1 className="green-text large left">Done  <i
              className="material-icons large  green-text "
              onClick={() => setIsDone(!showDone)}
            >
              <h1>done</h1>
            </i></h1>
          
          </button>
        </span>
      )) || (
        <button
          className="btn waves-effect"
          onClick={() => setIsDone(!showDone)}
        >
          Done
        </button>
      )}
    </div>
  );
};

export default IsDoneTask;
