import Tasks from "./Tasks";

const SelectedProject = ({ project, tasks, onDelete, onCancel, onAddTask, onDeleteTask }) => {
  const date = new Date(project?.dueDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold mb-2 text-stone-500">{project?.title}</h1>
          <div className="flex gap-1">
            <button onClick={onCancel} className="text-stone-100 bg-stone-900 hover:bg-stone-800 px-6 py-2 rounded-md">Back</button>
            <button onClick={onDelete} className="text-stone-100 bg-red-700 hover:bg-red-600 px-6 py-2 rounded-md">Delete</button>
          </div>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project?.description}</p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
