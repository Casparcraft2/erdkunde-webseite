// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close nav on link click
  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Scroll: add subtle shadow to nav
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(247,247,245,0.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(247,247,245,0.08)';
  }
});
