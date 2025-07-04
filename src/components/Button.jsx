import React from 'react'

export const Button = ({children}) => {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 text-stone-50  hover:bg-stone-500">{children}</button>
  )
}
