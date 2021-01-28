import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <img className="image" src={props.image} alt="house location" />
      <p>{props.content}</p>
      <a href={props.url}>Website</a>
    </div>
  );
}

export default Note;
