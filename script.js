const gallery = document.querySelector('.gallery');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

// Scroll amount for each click (one image width)
const scrollAmount = 400;

backBtn.addEventListener('click', () => {
  gallery.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  gallery.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
