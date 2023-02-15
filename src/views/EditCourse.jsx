import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { prepareCourseForm } from "../utilities/form.jsx";
import { prepareDatesForm } from "../utilities/form.jsx";
import { editCourse, fetchCourse } from "../api/fetch.jsx";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      const check = setIsChecked(data.online);
      setFormValues({
        title: data.title,
        description: data.description,
        duration: data.duration,
        price: {
          early_bird: data.price.early_bird,
          normal: data.price.normal,
        },
        online: check,
        dates: {
          start_date: data.dates.start_date,
          end_date: data.dates.end_date,
        },
        imagePath: data.imagePath,
      });
      console.log(check);
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
    navigate(`/courses/${id}`);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <NavBar />
       <div>
        <h5>Edit Course</h5>
       </div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            style={{ textAlign: "center" }}
            type="text"
            name="title"
            value={title}
            onChange={handleEdit}
          />
        </label>
        <label>
          Description:
          <textarea
            style={{ textAlign: "center" }}
            type="text"
            name="description"
            value={description}
            onChange={handleEdit}
          />
        </label>
        <label>
          Duration:
          <input
            style={{ textAlign: "center" }}
            type="text"
            name="duration"
            value={duration}
            onChange={handleEdit}
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
            onChange={handleEditDates}
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
            onChange={handleEditDates}
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
            onChange={handleEdit}
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
            onChange={handleEdit}
          />
        </label>
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
        <label>
          {/* not working without file extension */}
          Image:
          <input
            style={{ textAlign: "center" }}
            type="text"
            placeholder="http://myimage.jpg"
            name="imagePath"
            value={imagePath}
            onChange={handleEdit}
          />
        </label>
        <button type="submit">Save Course</button>
      </form>
      <Footer />
    </>
  );
};

export default EditForm;