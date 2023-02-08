import axios from 'axios';

export async function fetchStats() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/stats`);
  const data = await res.json();
  return data;
}

export async function fetchCourse(id) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/courses/${id}`);
  const data = await res.json();
  return data;
}

export async function postCourse(formData) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/courses/`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  // window.location.href = '/courses'; /* working here */ <-- this reloads the page
  const data = await res.json();
  return data;
}

export async function editCourse(formValues, id) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/courses/${id}`, {
    method: "PUT", 
    body: JSON.stringify(formValues),
    headers: { "Content-Type": "application/json" },
  });
  // window.location.href = '/courses'; /* working here */ <-- this reloads the page
  const data = await res.json();
  return data;
}



export async function deleteCourse(id) {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/courses/${id}`);
    // window.location.href = '/courses'; /* working here */ <-- this reloads the page
    const data = await res.json();
    return data;
}