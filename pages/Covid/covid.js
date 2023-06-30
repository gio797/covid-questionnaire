const covid_yes = document.querySelector("#covid_yes");
const covid_no = document.querySelector("#covid_no");
const covid_now = document.querySelector("#covid_now");

const test_question = document.querySelector(".test-question");
const test_boxes = document.querySelectorAll(".test-box");

covid_yes.addEventListener("input", () => {
  test_question.classList.add("active");
  test_boxes.forEach((box) => box.classList.add("active"));
});

covid_no.addEventListener("input", () => {
  test_question.classList.remove("active");
  test_boxes.forEach((box) => box.classList.remove("active"));
});

covid_now.addEventListener("input", () => {
  test_question.classList.remove("active");
  test_boxes.forEach((box) => box.classList.remove("active"));
});
