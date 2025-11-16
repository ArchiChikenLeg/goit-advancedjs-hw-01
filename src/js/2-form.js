let formData = { email: "", message: "" }
 
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
 
formData = localStorage.getItem(localStorageKey) ?? {email: "", message: ""};
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;
 
 
form.elements.email.addEventListener("input", (evt) => {
  formData.email = evt.target.value;
  console.log(formData);
  localStorage.setItem(localStorageKey.email, formData.email);
});
 
form.elements.message.addEventListener("input", (evt) => {
  formData.message = evt.target.value;
  console.log(formData);
  localStorage.setItem(localStorageKey.message, formData.message);
});
 
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});