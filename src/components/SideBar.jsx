import React from 'react'
import { Button } from './Button'

export const SideBar = () => {
  return (
    <aside className='w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold md:text-xl uppercase text-stone-100'>Your Projects</h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  )
}
