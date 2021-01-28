import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <a href={props.url}>Website</a>
    </div>
  );
}

export default Note;
