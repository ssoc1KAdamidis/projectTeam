import axios from 'axios';

export async function fetchStats() {
  const res = await fetch("http://localhost:3001/stats");
  const data = await res.json();
  return data;
}
export async function fetchCourse(id) {
  const res = await fetch(`http://localhost:3001/courses/${id}`);
  const data = await res.json();
  return data;
}
export async function postCourse(formData) {
  const res = await fetch("http://localhost:3001/courses/", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}

export async function editCourse(formValues, id) {

  /*const res = await axios.patch('http://localhost:3001/courses/:id', */
    const res = await fetch(`http://localhost:3001/courses/${id}`, {
    method: "PUT", 
    body: JSON.stringify(formValues),
    headers: { "Content-Type": "application/json" },
  });
  window.location.href = '/courses'; /* working here */
  const data = await res.json();
  return data;
}

export async function deleteCourse(id) {
    const res = await axios.delete(`http://localhost:3001/courses/${id}`);
    window.location.href = '/courses'; /* working here */
    const data = await res.json();
    return data;
}