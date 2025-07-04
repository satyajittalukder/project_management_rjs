import React from 'react';

const Input = ({
  label = '',
  type = 'text',
  name,
  value = '',
  onChange,
  disabled = false,
  placeholder = '',
  ...props
}) => {
  const classes = `w-full p-2 border-b-2 border-stone-300 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor={name} className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={classes}
          // value={value}
          // onChange={onChange}
          // disabled={disabled}
          // placeholder={placeholder}
          {...props}
        />
      ) :
        (<input
          type={type}
          id={name}
          name={name}
          className={classes}
          // value={value}
          // onChange={onChange}
          // disabled={disabled}
          // placeholder={placeholder}
          {...props}
        />)}
    </div>
  );
};

export default Input;