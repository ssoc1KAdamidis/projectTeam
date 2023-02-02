import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from "../utilities/form.jsx";
import { editCourse, fetchCourse } from "../api/fetch.jsx";
import { useParams } from "react-router-dom";
import axios from 'axios'; 


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
    image: "",
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
        image: data.image,
      });
    }
    fetchData();
  }, [id]);

  const { title, description, duration, online, image, dates: { start_date, end_date }, price: { early_bird, normal }, } = formValues;

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


  const [file, setFile] = useState('');
  /* const [filename, setFilename] = useState('Choose File'); */
  /* const [uploadedFile, setUploadedFile] = useState({}); */

  const handleChange = async (e) => {
    setFile(e.target.files[0]);
    /* setFilename(e.target.files[0].name); */
  };

  const handleUpload = async (e) => {
    e.preventDefault(); 
    const formData = new FormData();
    formData.append('image', file);
    
    
    /*
    await fetch(`http://localhost:3001/courses/${id}`, {
      method: 'POST',
      body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    */

      /* const { fileName, filePath } = res.data; */
      /* setUploadedFile({ fileName, filePath });*/
    
      axios.post(`http://example.com/courses/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      })
          .then((res) => {
            const { /*fileName,*/ filePath } = res.data;
            setFile({ /*fileName,*/ filePath });
          })
          .catch((err) => {
            console.error(err);
          });
    }



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
          <input type="text" name="title" value={title} onChange={handleEdit} />
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
          <input
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
          <input
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
          Image:
          <input
            type="file"
            name="image"
            value={image}
            accept="image/*"
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={handleUpload}>Upload</button>
        </label>
        <br />
        <br />
        <br />
        <button type="submit">Save Course</button>
      </form>
    </>
  );
};


export default EditForm;