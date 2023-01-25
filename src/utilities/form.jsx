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
