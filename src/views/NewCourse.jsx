import { useState } from 'react';
import React from 'react'
import NavBar from "../components/NavBar";
import { prepareCourseForm } from "../utilities/form.jsx";
import { postCourse } from "../api/fetch.jsx";



  const NewCourse = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    duration: '',
    price: {
      early_bird: 0,
      normal: 0,
    },
    online: '',
    dates: {
      start_date: '',
      end_date: ''
    },
    image: ''
  });

  const { title, description, duration, online, image, dates: { start_date, end_date }, price: { early_bird, normal }, } = form; 

  const handleInput = (e) => {
  const formData = prepareCourseForm(form, e.target);

  setForm(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postCourse(form);
    // TODO: redirect to courses path
  };
  

 return (
  <>
    <NavBar />
    <br />  
    <h5><b>Add a new Course</b></h5>
    <br />
    <br />
    <form onSubmit={handleSubmit}>
      <label>
        Title:   
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInput}
        />
      </label>
      <br />
      <br />
      <br />
      <label>
      Description:   
        <textarea
        type="text"
        name="description"
        value={description}
        onChange={handleInput}
       />
      </label>
      <br />
      <br />
      <br />
      <label>
      Duration:   
        <input
        type="text"
        name="duration"
        value={duration}
        onChange={handleInput}
       />
      </label>
      <br />
      <br />
      <br />
      <label>
       Dates:
       <br />
       <label htmlFor="start_date">Start Date:</label>
       <input 
       name="start_date"
       type="date"
       value={start_date}
       onChange={handleInput}
       />
       <label htmlFor="end">End Date:</label>
       <input 
       name="end_date"
       type="date"
       value={end_date}
       onChange={handleInput}
       />
      </label>
      {/* switch ? */}
      <br />
      <br />
      <br />
      <label>
        Price:
        <br />
            <label htmlFor="early_bird">Early bird price:</label>
            <input
              id="early_bird"
              name="early_bird"
              type="number"
              value={early_bird}
              onChange={handleInput}
            />
            <label htmlFor="normal">Normal bird price:</label>
            <input
              id="normal"
              name="normal"
              type="number"
              value={normal}
              onChange={handleInput}
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
          value={online}
          onChange={handleInput}
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
          value={image}
          onChange={handleInput}
        />
      </label>
      <br />
      <br />
      <br />
      <button type="submit">Add new Course</button>
    </form>
    </>
  );
};

export default NewCourse;


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