// Cursor glow
const glow = document.getElementById('cursorGlow');
if (glow) {
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}
// Fade-in observer
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Hamburger
function toggleMenu() {
  const nl = document.querySelector('.nav-links');
  if (!nl) return;
  if (nl.style.display === 'flex') {
    nl.style.display = 'none';
  } else {
    nl.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:rgba(8,10,8,0.98);padding:24px 28px;gap:20px;border-bottom:1px solid #1e261e;z-index:499;';
    nl.querySelectorAll('.dropdown').forEach(d => d.style.display = 'block');
  }
}
