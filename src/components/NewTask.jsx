import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex gap-1">
      <input
        value={enteredTask}
        onChange={handleChange}
        type="text"
        name="task"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button onClick={handleClick} className="py-1 px-6 rounded-md bg-slate-950 hover:bg-slate-800 text-stone-100">
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
