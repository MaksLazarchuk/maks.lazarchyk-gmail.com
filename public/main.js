const img = document.getElementById('background');

function parallax() {
  const top = window.scrollY / 2;
  img.style.transform = `translateY(${top}px)`;
}

window.addEventListener('scroll', parallax);
