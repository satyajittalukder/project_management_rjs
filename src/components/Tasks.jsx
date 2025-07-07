import NewTask from "./NewTask"

const Tasks = () => {
  return (
    <section>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-stone-800">Tasks</h1>
      </div>
      <div className="w-full h-full flex flex-col gap-4 mt-8">
        <NewTask />
        <div>
          <h2 className="">This Project has no tasks</h2>
        </div>
      </div>
    </section>
  )
}

export default Tasks