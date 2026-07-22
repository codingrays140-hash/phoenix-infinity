// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Button Hover Animation
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "0.3s";
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = "scale(1)";
  });
});

// Course Card Animation
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s";
    card.style.boxShadow = "0 15px 30px rgba(37,99,235,.4)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

// Start Learning Redirect
const startBtn = document.querySelector(".btn");

if (startBtn) {
  startBtn.addEventListener("click", function(e) {
    e.preventDefault();

    window.location.href = "https://rwaweb.vercel.app/#/batch/";
  });
}

// Page Fade In
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});