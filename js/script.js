let slides = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('#left');
let rightArrow = document.querySelector('#right');
let current = 0;



function startSlide() {
  reset();
  slides[0].style.display = "block";
};

function slideLeft() {
  reset();
  slides[current -1].style.display = "block";
  current--;
};

leftArrow.addEventListener('click', function() {
  if (current === 0){
    current = slides.length;
  }
  slideLeft();
});

rightArrow.addEventListener('click', function() {
  if (current === slides.length -1){
    current = -1;
  }
  slideRight();
});

function slideRight() {
  reset();
  slides[current +1].style.display = "block";
  current++;
}

function reset() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
};

startSlide();