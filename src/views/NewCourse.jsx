import { useState } from "react";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from "../utilities/form.jsx";
import { postCourse } from "../api/fetch.jsx";
import { useNavigate } from "react-router-dom";

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

  const { title, description, duration, online, imagePath, dates: { start_date, end_date }, price: { early_bird, normal }, } = form;

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
      alert("All fields are required!");
      return;
    }
    form.online = isChecked;
    await postCourse(form);
    navigate("/courses");
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <NavBar />
      <div className="add-course-title">
        <h4>Add a new Course</h4>
      </div>
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
        <label>
          Dates:
          <br />
          <label htmlFor="start_date">Start Date:</label>
          <br />
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
          <label htmlFor="end_date">End Date:</label>
          <br />
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
        <label>
          Price:
          <br />
          <label htmlFor="early_bird">Early bird price:</label>
          <br />
          <input
            style={{ textAlign: "center" }}
            id="early_bird"
            name="early_bird"
            type="number"
            min="0"
            value={early_bird}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="normal">Normal price:</label>
          <br />
          <input
            style={{ textAlign: "center" }}
            id="normal"
            name="normal"
            type="number"
            min="0"
            value={normal}
            onChange={handleInput}
          />
        </label>
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
        <button type="submit">Add new Course <img src="./add.avif" alt="Add course" width="20px" /></button>
      </form>
      <Footer />
    </>
  );
};

export default NewCourse;