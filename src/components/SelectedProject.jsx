
const SelectedProject = ({ project, onDelete }) => {
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
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-900">Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project?.description}</p>
      </header>
      TASKS
    </div>
  );
};

export default SelectedProject;
