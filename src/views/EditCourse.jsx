import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from "../utilities/form.jsx";
import { editCourse, fetchCourse } from "../api/fetch.jsx";
import { useParams } from "react-router-dom";
/* import axios from 'axios'; */


const EditForm = () => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    duration: "",
    price: {
      early_bird: 0,
      normal: 0,
    },
    online: "",
    dates: {
      start_date: "",
      end_date: "",
    },
    imagePath: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCourse(id);
      setFormValues({
        title: data.title,
        description: data.description,
        duration: data.duration,
        price: {
          early_bird: data.price.early_bird,
          normal: data.price.normal,
        },
        online: setIsChecked(data.online),
        dates: {
          start_date: data.dates.start_date,
          end_date: data.dates.end_date,
        },
        imagePath: data.imagePath,
      });
    }
    fetchData();
  }, [id]);

  const { title, description, duration, online, imagePath, dates: { start_date, end_date }, price: { early_bird, normal }, } = formValues;

  const handleEdit = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    
    const formData = prepareCourseForm(formValues, e.target);
    setFormValues(formData);
  };

  const handleEditDates = (e) => {
    const formDates = prepareDatesForm(formValues, e.target);
    setFormValues(formDates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formValues.online = isChecked;
    await editCourse(formValues, id);
  };

  const [isChecked, setIsChecked] = useState();
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  /* 
  const [file, setFile] = useState('');

  const handleUpload = async (e) => {
    setFile(e.target.files[0]);
    e.preventDefault(); 
    const formData = new FormData();
    formData.append('imagePath', file);
    }    
*/

  return (
    <>
      <NavBar />
      <br />
      <h1>
       <b>Edit Course</b>
      </h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
      <label>
      Title:
      <input style={{textAlign: "center"}}
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
      <textarea style={{textAlign: "center"}}
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
      <input style={{textAlign: "center"}}
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
      <input style={{textAlign: "center"}}
          name="start_date"
          type="date"
          min="2023-02-01"
          max="2031-02-01"
          value={start_date}
          onChange={handleEditDates}
      />
      <br />
      <br />
      <label htmlFor="end_date">End Date:</label>
      <input style={{textAlign: "center"}}
          name="end_date"
          type="date"
          min="2023-02-01"
          max="2031-02-01"
          value={end_date}
          onChange={handleEditDates}
      />
      </label>
      <br />
      <br />
      <br />
      <label>
      Price:
      <br />
      <label htmlFor="early_bird">Early bird price:</label>
      <input style={{textAlign: "center"}}
          id="early_bird"
          name="early_bird"
          type="number"
          value={early_bird}
          onChange={handleEdit}
      />
      <br />
      <br />
      <label htmlFor="normal">Normal price:</label>
      <input style={{textAlign: "center"}}
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
         key={id}
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
      {/* not working without file extension */}
      Image:
      <input style={{textAlign: "center"}}
          type="text"
          placeholder="http://myimage.jpg"
          name="imagePath"
          value={imagePath}
          onChange={handleEdit}
      />
      </label>
      <br />
      <br />
      <br />
      {/*
      <label>
      Image:
      <input
          type="file"
          name="imagePath"
          value={imagePath}
          accept="image/*"
          onChange={handleUpload}
      />
      <br />
      <br />
      <button onClick={handleUpload}>Upload Image</button>
      </label>
      <br />
      <br />
      <br />
      */}
      <button type="submit">Save Course</button>
      </form>
      <Footer />
    </>
  );
};

export default EditForm;