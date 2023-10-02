const commentInput = document.getElementById("addComment");
const commentWrapper = document.querySelector(".comments_face");
const submitBtn = document.getElementById("submitBtn");
const firstComment = commentWrapper.children[1];
const firstQuestion = document.getElementById("q1");
const secondQuestion = document.getElementById("q2");
const thirdQuestion = document.getElementById("q3");
const fourthQuestion = document.getElementById("q4");
const modal = document.getElementById("p_modal_button1");

console.log(firstComment);
let comment;
const answers = [];
const inputHandleChange = (e) => {
  comment = e.target.value;
};

const handleSubmit = (e) => {
  console.log(comment);
  console.log(answers.join(" "));
};

const handleClick = (e) => {
  console.log(e.target.innerText);
  console.log(e.target.parentNode.id);
  answers.push(e.target.innerText);
  console.log(answers);
};
commentInput.addEventListener("input", inputHandleChange);
submitBtn.addEventListener("click", handleSubmit);
firstQuestion.addEventListener("click", handleClick);
secondQuestion.addEventListener("click", handleClick);
thirdQuestion.addEventListener("click", handleClick);
fourthQuestion.addEventListener("click", handleClick);
modal.addEventListener("click", handleSubmit);
console.log(modal);
