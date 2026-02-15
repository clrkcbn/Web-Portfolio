<<<<<<< HEAD
const sections = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});
=======
const sections = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});
>>>>>>> 5cdbd4e7ba5834458288154b2620a509d73c4be8
