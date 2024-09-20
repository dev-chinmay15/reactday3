import React from 'react';

const RadioButtons = ({ label, name, options, selectedOption, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input 
            type="radio" 
            name={name} 
            value={option.value} 
            checked={selectedOption === option.value}
            onChange={onChange}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
