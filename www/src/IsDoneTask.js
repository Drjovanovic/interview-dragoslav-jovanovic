import React, { useState } from "react";

const IsDoneTask = (props) => {
  const [showDone, setIsDone] = useState(props.task);

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
