import React from 'react';

const InputRange = ({ label, name, min, max, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="range" 
        name={name} 
        min={min} 
        max={max} 
        value={value} 
        onChange={onChange} 
      />
      <span>{value}</span>
    </div>
  );
};

export default InputRange;
