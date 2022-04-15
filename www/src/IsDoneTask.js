import React, { useState } from "react";

const IsDoneTask = (props) => {
  const [showDone, setIsDone] = useState(props.isDone);

  return (
    <div className="row">
      {(showDone && (
        <i
          className="material-icons large  green-text"
          onClick={() => setIsDone(!showDone)}
        >
          done
        </i>
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
