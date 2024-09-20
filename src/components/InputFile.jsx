import React from 'react';

const InputFile = ({ label, name, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="file" 
        name={name} 
        onChange={onChange} 
      />
    </div>
  );
};

export default InputFile;
