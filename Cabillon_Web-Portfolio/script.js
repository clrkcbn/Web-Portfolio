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