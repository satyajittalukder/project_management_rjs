import React from 'react';
import { Button } from './Button';

export const SideBar = ({ onStartAddProject, onSelectProject, projects, selectedProjectId }) => {
  return (
    <aside className='w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold md:text-xl uppercase text-stone-100'>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      {
        projects.length === 0 ? (
          <p className='mt-8 space-y-4 text-lg font-semibold'>No projects found</p>
        ) : (
          <ul className='mt-8 space-y-4'>
            {projects.map((project) => {
              const isSelected = project.id === selectedProjectId;

              const classes = `cursor-pointer px-4 py-2 rounded-md ${isSelected
                ? 'bg-stone-700 text-stone-50'
                : 'bg-stone-800 hover:bg-stone-700 text-stone-400'
                }`;

              return (
                <li
                  key={project.id}
                  onClick={() => onSelectProject(project.id)}
                  className={classes}
                >
                  <h3 className='text-lg font-semibold'>{project.title}</h3>
                </li>
              );
            })}
          </ul>
        )
      }
    </aside>
  );
};
