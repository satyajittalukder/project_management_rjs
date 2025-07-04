import React from 'react'
import NoProjectImage from '../assets/no-projects.png'
import { Button } from './Button'

export const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className='flex flex-col items-center justify-center w-2/3 gap-4'>
      <img src={NoProjectImage} alt="no-project-img" className='h-16 w-16 object-contain mx-auto' />
      <h2 className='text-2xl font-bold text-stone-800'>No Project Selected</h2>
      <p className='text-stone-600'>Please select a project Or create a new project to get  started..</p>
      <Button onClick={onStartAddProject}>+ Create New Project</Button>
    </div>
  )
}
