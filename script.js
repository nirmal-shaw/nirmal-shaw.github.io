

//fade-up animation
const elements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));


//typeWriter animatio
const text = "Hi, I'm Nirmal Shaw";
const element = document.querySelector('.name');
element.textContent = '';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
typeWriter();


