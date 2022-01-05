const questions = document.querySelectorAll('.faq-content__box');

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    e.currentTarget.childNodes[3].classList.toggle('show-text');
    e.currentTarget.childNodes[1].childNodes[3].classList.toggle('up');
  });
});
