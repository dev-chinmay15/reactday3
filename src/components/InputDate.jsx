import React from 'react';

const InputDate = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="date" 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default InputDate;
