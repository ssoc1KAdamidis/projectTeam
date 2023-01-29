import { useState } from 'react';
import React from 'react'
import NavBar from "../components/NavBar";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from '../utilities/form.jsx';
import { postCourse } from "../api/fetch.jsx";
import App from './DatePicker';
import axios from 'axios';
/* import { Link } from 'react-router-dom'; */


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
      end_date: '',
    },
    image: ''
  });

  const { title, description, duration, online, image, dates: { start_date, end_date }, price: { early_bird, normal }, } = form; 

  const handleInput = (e) => {
  const formData = prepareCourseForm(form, e.target);
  setForm(formData);
};

  const handleInput2 = (e) => {
    const formDates = prepareDatesForm(form, e.target); 
    setForm({...form, ...formDates}); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    form.online = isChecked;
    await postCourse(form);
    window.location.href = '/courses';   
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }

    const [selectedFile, setSelectedFile] = useState(null);
    const handleChange = (e) => {
      setSelectedFile(e.target.image);
      const formData = new FormData();
      formData.append('image', selectedFile);
      axios.post('/server/upload', formData)
    }

 return (
  <>

 <NavBar />
    <br />  
    <h1><b>Add a new Course</b></h1>
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
       <App 
       input 
       name="start_date"
       type="date"
       min="2023-02-01"
       max="2031-02-01"
       value={start_date}
       onChange={handleInput2}
       />
       <br />
       <br />
       <label htmlFor="end">End Date:</label>
       <App 
       input 
       name="end_date"
       type="date"
       min="2023-02-01"
       max="2031-02-01"
       value={end_date}
       onChange={handleInput2}
       />
      </label>
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
            <label htmlFor="normal">Normal price:</label>
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
          checked={isChecked}
          name="online"
          value={online}
          onChange={handleCheckboxChange}
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
          accept="image/*"
          onChange={handleChange}
          />        
      </label>
      <br />
      <br />
      <br />
      <button type="submit">Add new Course<img src='./add.avif' alt="add" width='15px'/></button>
      </form>
      </>
    
  );
};

export default NewCourse;