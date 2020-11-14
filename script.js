const questions = document.querySelectorAll('.question-card');
// console.log(questions);

questions.forEach(function (question) {
  const contentBtn = question.querySelector('.content-btn');
  console.log(contentBtn);
  contentBtn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show');
      } else {
        question.classList.toggle('show');
      }
    });
  });
});
