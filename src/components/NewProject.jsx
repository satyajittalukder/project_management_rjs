import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { Fragment } from "react";
export const NewProject = ({ onAddProject, onCancel }) => {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();


  const handleSave = () => {
    const enteredTitle = title.current.value.trim();
    const enteredDescription = description.current.value.trim();
    const enteredDueDate = dueDate.current.value.trim();

    if (enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === "") {
      dialog.current.open();
      return;
    }
    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    }
    onAddProject(projectData);
  }
  return (
    <Fragment>
      <Modal ref={dialog} buttonCaption={"Okay"} >
        <h2 className="text-red-800 text-lg font-semibold">Please fill all fields</h2>
        <p className="text-stone-600">All fields are required to create a new project.</p>
      </Modal>
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
    </Fragment>
  );
};
