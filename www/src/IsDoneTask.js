import React, { useState } from "react";

const IsDoneTask = (props) => {
  const [showDone, setIsDone] = useState(props.isDone);
console.log("In isDoneTask isDone have value: ",showDone);
  return (
    <div className="row">
      {(showDone && (
        <i className="material-icons large " onClick={() => setIsDone(!showDone)}>
          done
        </i>
      )) || (
        <button className="btn" onClick={() => setIsDone(!showDone)}>
          Done
        </button>
      )}
    </div>
  );
};

export default IsDoneTask;
