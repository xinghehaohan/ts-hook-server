import React from "react";
import "./App.css";
import { ProjectListScreen } from "./views/project-list";
import { Login } from "./views/login";
function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <Login />
    </div>
  );
}

export default App;
