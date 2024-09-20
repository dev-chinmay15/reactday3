
import './App.css';
import InputDate from './components/InputDate';
import InputFile from './components/InputFile';
import InputRange from './components/InputRange';
import  InputText from './components/InputText';
import RadioButtons from './components/RadioButtons';
import SelectOptions from './components/SelectOptions';
import React,{useState} from 'react';



function App() {

  const [formData, setFormData] = useState({
    text: '',
    file: null,
    date: '',
    selectOption: '',
    radioOption: '',
    rangeValue: 50
  });
           const handleChange=(e)=>{
            const { name, value, type, files } = e.target;
            setFormData({
              ...formData,
              [name]: type === 'file' ? files[0] : value
            });
           }

   const handleSubmit=(e)=>{
          e.preventDefault();
          console.log("formData :",formData);
   }



  return (
    <div className="App">
            <form onSubmit={handleSubmit}>

  <InputText label="Text Input" name="text"  value={formData.text}  onChange={handleChange}  />
  <InputFile label="Upload File" name="file" onChange={handleChange} />
  <InputDate label="Select Date" name="date" value={formData.date} onChange={handleChange} />
  <SelectOptions label="Select Option" name="selectOption" value={formData.selectOption} 
  options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        onChange={handleChange} />

  <RadioButtons  label="Choose an option"  name="radioOption" selectedOption={formData.radioOption}
       options={[
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ]}
        onChange={handleChange}  />
      
 <InputRange label="Range Input"  name="rangeValue" min="0" max="100" value={formData.rangeValue} onChange={handleChange} />
     
 <button type="submit">Submit</button>
            </form>
    </div>
  );
}

export default App;
