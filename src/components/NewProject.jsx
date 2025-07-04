import React, { useRef } from "react";
import Input from "./Input";
export const NewProject = ({ onAddProject, onCancel }) => {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const projectData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    }
    onAddProject(projectData);
  }
  return (
    <div className="w-[38rem] pt-16 px-4 bg-stone-100 rounded-xl">
      <menu className="flex justify-end items-center gap-4 mb-8">
        <li>
          <button onClick={handleSave} className="bg-stone-900 hover:bg-stone-800 text-stone-100 px-6 py-2 rounded-md">Save</button>
        </li>
        <li>
          <button onClick={onCancel} className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md">Cancel</button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" type="text" name="title" />
        <Input ref={description} label="Description" type="textarea" name="description" />
        <Input ref={dueDate} label="Due Date" type="date" name="due-date" />
      </div>
    </div>
  );
};
