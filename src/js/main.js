function getCurrentDate() {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("today-date");
  if (dateElement) {
    dateElement.textContent = `${getCurrentDate()}`;
  }
});
