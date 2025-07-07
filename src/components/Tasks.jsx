const Tasks = () => {
  return (
    <section>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-stone-800">Tasks</h1>
      </div>
      <div>
        <button className="bg-stone-900 hover:bg-stone-800 text-stone-100 px-6 py-2 rounded-md mt-4">
          Add Task
        </button>
      </div>
    </section>
  )
}

export default Tasks