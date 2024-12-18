// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("https://vercel-todolist-api.vercel.app/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
