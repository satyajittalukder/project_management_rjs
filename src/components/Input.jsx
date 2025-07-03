import React from 'react';

const Input = ({
  label = '',
  type = 'text',
  name,
  value = '',
  onChange,
  disabled = false,
  placeholder = '',
}) => {
  return (
    <div>
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          // value={value}
          // onChange={onChange}
          // disabled={disabled}
          // placeholder={placeholder}
        />
      ) :
        (<input
          type={type}
          id={name}
          name={name}
          // value={value}
          // onChange={onChange}
          // disabled={disabled}
          // placeholder={placeholder}
        />)}
    </div>
  );
};

export default Input;