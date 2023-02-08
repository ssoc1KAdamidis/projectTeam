export function prepareCourseForm(form, target) {
  const { name, value } = target;
  switch (name) {
    case "early_bird":
      return { ...form, price: { ...form.price, early_bird: Number(value) } };
    case "normal":
      return { ...form, price: { ...form.price, normal: Number(value) } };
    default:
      return { ...form, [name]: value };
  }
}

export function prepareDatesForm(form, target) {
  const { name, value } = target;
  switch (name) {
    case "start_date":
      return { ...form, dates: { ...form.dates, start_date: value } };
    case "end_date":
      return { ...form, dates: { ...form.dates, end_date: value } };
    default:
      return { ...form, [name]: value };
  }
}