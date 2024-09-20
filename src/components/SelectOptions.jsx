import React from 'react';

const SelectOptions = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select 
        name={name} 
        value={value} 
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
