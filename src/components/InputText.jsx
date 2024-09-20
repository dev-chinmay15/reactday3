import React from 'react';

const InputText = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="text" 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export default InputText;
