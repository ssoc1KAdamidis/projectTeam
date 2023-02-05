import { useState } from "react";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from "../utilities/form.jsx";
import { postCourse } from "../api/fetch.jsx";
import { useNavigate } from "react-router-dom";
/* import axios from 'axios'; */

const NewCourse = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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

  const {
    title,
    description,
    duration,
    online,
    imagePath,
    dates: { start_date, end_date },
    price: { early_bird, normal },
  } = form;

  const handleInput = (e) => {
    const formData = prepareCourseForm(form, e.target);
    setForm(formData);
  };

  const handleInputDates = (e) => {
    const formDates = prepareDatesForm(form, e.target);
    setForm(formDates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.description ||
      !form.duration ||
      !form.price ||
      !form.dates ||
      !form.imagePath
    ) {
      // show an error message or alert
      alert(
        "All fields are required! Υποχρεωτική η συμπλήρωση όλων των πεδίων"
      );
      return;
    }
    // submit the form data to the server
    form.online = isChecked;
    await postCourse(form);
    navigate("/courses");

    // window.location.href = '/courses'; <-- this reloads the page
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  /*
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = async (e) => {
    setImage(e.target.files[0]);
    
    const formDataWithImage = new FormData();
    formDataWithImage.append('imagePath', image); 
    
    formDataWithImage.append("title", form.title);
    formDataWithImage.append("description", form.description);
    
    try {
      const response = await axios.fetch(`http://localhost:3001/courses/:id`, formDataWithImage, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploadedImage(response.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  } 
  
  const handleUpload = () => {
  const formImage= document.querySelector('form');
  const imageUrlInput = document.querySelector('#imageUrl');
  const preview = document.querySelector('#preview');

  form.addEventListener('submit', async event => {
  event.preventDefault();

  const imageUrl = imageUrlInput.value;
  const imageBlob = await fetch(imageUrl).then(response => response.blob());
  const formData = new FormData();
  formData.append('image', imageBlob, 'image.jpg');

  const response = await fetch('https://example.com/upload-image', {
    method: 'POST',
    body: formData
  });

  if (response.ok) {
    alert('Image uploaded successfully');
  } else {
    alert('Failed to upload image');
  }
})
};
*/

  return (
    <>
      <NavBar />
      <br />
      <h1>
        <b>Add a new Course</b>
      </h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            style={{ textAlign: "center" }}
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
            style={{ textAlign: "center" }}
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
            style={{ textAlign: "center" }}
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
            style={{ textAlign: "center" }}
            name="start_date"
            type="date"
            min="2023-02-01"
            max="2031-02-01"
            value={start_date}
            onChange={handleInputDates}
          />
          <br />
          <br />
          <label htmlFor="end_date">End Date:</label>
          <input
            style={{ textAlign: "center" }}
            name="end_date"
            type="date"
            min="2023-02-01"
            max="2031-02-01"
            value={end_date}
            onChange={handleInputDates}
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
            style={{ textAlign: "center" }}
            id="early_bird"
            name="early_bird"
            type="number"
            value={early_bird}
            onChange={handleInput}
          />
          <br />
          <br />
          <label htmlFor="normal">Normal price:</label>
          <input
            style={{ textAlign: "center" }}
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
          {/* not working without file extension */}
          Image:
          <input
            style={{ textAlign: "center" }}
            type="text"
            placeholder="http://myimage.jpg"
            name="imagePath"
            value={imagePath}
            onChange={handleInput}
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
      <button onClick={handleUpload}>Upload Image</button>
      {uploadedImage && <img src={uploadedImage} alt="" />}
      </label>
      <br />
      <br />
      <br />
      */}
        <button type="submit">
          Add new Course
          <img src="./add.avif" alt="add" width="15px" />
        </button>
        <br />
        <br />
        <br />
      </form>
      <Footer />
    </>
  );
};

export default NewCourse;
