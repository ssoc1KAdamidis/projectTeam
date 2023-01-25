import { useState } from 'react';
import React from 'react'
import NavBar from "../components/NavBar";

const NewCourse = () => {
    return (
    <>
    <NavBar />
    <br />  
    <h5><b>Add a new Course</b></h5>
    <br />
    <br />
    <AddNewCourse />
    </>
    );
  }
  
  export default NewCourse;

  

const AddNewCourse = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    price: '',
    online: '',
    startDate: '',
    endDate: '',
    image: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:   
        <input
          type="text"
          name="title"
          value={inputValues.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={inputValues.price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <br />
      <label>
        Online:
        <input
          type="checkbox"
          name="online"
          value={inputValues.online}
          onChange={handleInputChange}
        />
        </label>
        <br />
        <br />
        <br />
        <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={inputValues.startDate}
          onChange={handleInputChange}
        />
        </label>
        <br />
        <br />
        <br />
        <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={inputValues.endDate}
          onChange={handleInputChange}
        />
        </label>
        <br />
        <br />
        <br />
        <label>
        Image:
        <input
          type="file"
          name="image"
          value={inputValues.image}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <br />
      <button type="submit">Add new Course</button>
    </form>
  );
}


/* image uploader 

import React, { useState } from 'react';

function FileInput() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {file && <p>{file.name}</p>}
    </div>
  );
}

export FileInput;

You can also use libraries such as react-dropzone or react-dropzone-uploader for more advanced file input with image preview and other functionalities.

*/

/* online boolean 

const [checkboxValue, setCheckboxValue] = useState(false);

return (
  <input type="checkbox" checked={checkboxValue} onChange={e => setCheckboxValue(e.target.checked)} />
);

*/