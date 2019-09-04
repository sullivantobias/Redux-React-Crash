import React from "react";
import List from "./components/List";
import Form from "./components/Form";

const App = () => (
  <div>
    <div>
      <h2>Redux React Crash Test</h2>
      <List/>
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form/>
    </div>
  </div>
);
export default App;