const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

const btnMain = document.querySelector(".btn-main");
const modalWrapper = document.querySelector(".modal-wrapper");
const cancelBtn = document.querySelector(".cancel");

btnMain.addEventListener("click", () => {
  modalWrapper.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  modalWrapper.classList.remove("active");
});
