
const elementsToAnimate = document.querySelectorAll('.animate');
const elementToAnimate = document.querySelector('.animate-lore');
const imageToAnimate = document.querySelector('.animate-image');


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
  
      entry.target.classList.add('animate-visible');
      entry.target.classList.remove('animate-hidden');
      entry.target.classList.add('animate-lore-visible');
      entry.target.classList.remove('animate-lore-hidden');
      entry.target.classList.add('animate-image-visible');
      entry.target.classList.remove('animate-image-hidden');
    } else {
      
    entry.target.classList.add('animate-hidden');
    entry.target.classList.remove('animate-visible');
    entry.target.classList.add('animate-lore-hidden');
    entry.target.classList.remove('animate-lore-visible');
    entry.target.classList.add('animate-image-hidden');
    entry.target.classList.remove('animate-image-visible');
    }
  });
}, {
  threshold: 0.2, 
});

// Asocia el observador a cada elemento
elementsToAnimate.forEach((el) => observer.observe(el));
observer.observe(elementToAnimate);
observer.observe(imageToAnimate);
