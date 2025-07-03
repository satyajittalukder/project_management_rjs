import React from 'react'

export const SideBar = () => {
  return (
    <aside className='w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold md:text-xl uppercase text-stone-100'>Your Projects</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600  hover:bg-stone-500">+ Add Task</button>
      </div>
      <ul></ul>
    </aside>
  )
}
