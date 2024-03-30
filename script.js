//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const circles = document.querySelectorAll('.circle');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === circles.length - 1;
  }

  function updateCircles() {
    circles.forEach((circle, index) => {
      if (index === currentIndex) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCircles();
      updateButtons();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < circles.length - 1) {
      currentIndex++;
      updateCircles();
      updateButtons();
    }
  });

  updateButtons();
});
