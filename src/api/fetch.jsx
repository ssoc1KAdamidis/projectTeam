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

export async function editCourse(formValues) {
  const res = await fetch("http://localhost:3001/courses/", {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
  
}

export async function deleteCourse(id) {
    const res = await axios.delete(`/courses/${id}`);
    const data = await res.json();
    return data;
}