import NewTask from "./NewTask"

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-stone-800">Tasks</h1>
      </div>
      <div className="w-full h-full flex flex-col gap-4 mt-8">
        <NewTask onAddTask={onAddTask} />
        {tasks.length === 0 && (
          <div>
            <h2 className="">This Project has no tasks</h2>
          </div>
        )}
        {tasks.length > 0 && (
          <ul className="flex flex-col gap-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between bg-stone-100 px-4 py-2 rounded-md"
              >
                <span>{task.text}</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Tasks