import React from 'react'

const NewTask = () => {
  return (
    <div className='flex gap-1'>
      <input type="text" name="task" className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
      <button className='py-1 px-6 rounded-md bg-slate-950 hover:bg-slate-800 text-stone-100'>Add Task</button>
    </div>
  )
}

export default NewTask