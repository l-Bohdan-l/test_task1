const commentInput = document.getElementById("addComment");
const form = document.getElementById("commentForm");
const commentWrapper = document.querySelector(".comments_face");
const submitBtn = document.getElementById("submitBtn");
const firstComment = commentWrapper.children[1];
const firstQuestion = document.getElementById("q1");
const secondQuestion = document.getElementById("q2");
const thirdQuestion = document.getElementById("q3");
const fourthQuestion = document.getElementById("q4");
const modalBtn = document.getElementById("p_modal_button1");

let comment;
const answers = [];
const inputHandleChange = (e) => {
  comment = e.target.value;
};

const handleSubmit = (e) => {
  const commentComponent = `
  <div class="comments" id="newComment" style="display: block">
                <div class="profile">
                  <img src="./assets/img/portrait_placeholder.webp" />
                </div>
                <div class="comment-content">
                  <p class="name">
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Anonymous</font>
                    </font>
                  </p>
                  <p>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit"
                        >${comment}</font
                      >
                    </font>
                  </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                  <span>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Curte·comente</font>
                    </font>
                    <img src="./assets/img/like.png" width="15px" height="15px" />
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">0</font>
                    </font>
                  </span>
                  <font style="vertical-align: inherit">
                    <small>
                      <font style="vertical-align: inherit">·</font>
                    </small>

                    <small>
                      <u>
                        <font style="vertical-align: inherit"
                          >0 minutos antes</font
                        >
                      </u>
                    </small>
                  </font>
                  <small>
                    <font style="vertical-align: inherit"></font>
                    <u>
                      <font style="vertical-align: inherit"></font>
                    </u>
                  </small>
                </div>
              </div>
  `;
  firstComment.insertAdjacentHTML("beforebegin", commentComponent);
  form.reset();
};

const handleClick = (e) => {
  answers.push(e.target.innerText);
};

const showAnswers = (e) => {
  console.log(answers.join(" "));
};

commentInput.addEventListener("input", inputHandleChange);
submitBtn.addEventListener("click", handleSubmit);
firstQuestion.addEventListener("click", handleClick);
secondQuestion.addEventListener("click", handleClick);
thirdQuestion.addEventListener("click", handleClick);
fourthQuestion.addEventListener("click", handleClick);
modalBtn.addEventListener("click", showAnswers);
