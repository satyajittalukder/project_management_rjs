import React, { useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'


const Modal = ({ children, ref, buttonCaption, ...props }) => {

  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal()
    }
  }));
  return createPortal(
    <dialog ref={dialog} {...props} className="w-[38rem] py-8 px-4 bg-stone-100 rounded-xl">
      {children}
      <form method='dialog'>
        <button className='bg-stone-900 hover:bg-stone-800 text-stone-100 px-6 py-2 rounded-md mt-2' >
          {buttonCaption}
        </button>
      </form>
    </dialog>
    , document.getElementById('modal-root'))
}
export default Modal