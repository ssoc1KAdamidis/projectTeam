import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from '../utilities/form.jsx';
import { editCourse } from "../api/fetch.jsx";
import App from './DatePicker';
  

  const EditForm = () => {
    const [formValues, setFormValues] = useState({
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
    
 const { title, description, duration, online, image, dates: { start_date, end_date }, price: { early_bird, normal }, } = formValues;
 
    /*
    const handleEdit = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }
    */

    const handleEdit = (e) => {
    const formData = prepareCourseForm(formValues, e.target);
    setFormValues(formData);
    };

    const handleEdit2 = (e) => {
    const formDates = prepareDatesForm(formValues, e.target); 
    setFormValues({...formValues, ...formDates});
    };
  
   const handleSubmit = async (e) => {
    e.preventDefault();
    formValues.online = isChecked;
    await editCourse(formValues);
    window.location.href = '/courses';
    }

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

    return (
        <>

    <NavBar />
    <br />  
    <h1><b>Edit Course</b></h1>
    <br />
    <br />
        <form onSubmit={handleSubmit}>
            <label>
        Title:   
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleEdit}
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
        onChange={handleEdit}
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
        onChange={handleEdit}
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
       onChange={handleEdit2}
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
       onChange={handleEdit2}
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
              onChange={handleEdit}
            />
            <label htmlFor="normal">Normal price:</label>
            <input
              id="normal"
              name="normal"
              type="number"
              value={normal}
              onChange={handleEdit}
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
      <button type="submit">Save Course</button>
        </form>
        </>

    );
}


export default EditForm;