import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";
import Form from "./Form";
// import login from "./Login";
var userIsRegistered = false;

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          url={noteItem.url}
          image={noteItem.image}
          price={noteItem.price}
        />
      ))}
      <Form isRegistered={userIsRegistered} />

      <Footer />
    </div>
  );
}

export default App;
