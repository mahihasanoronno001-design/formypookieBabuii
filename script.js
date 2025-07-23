document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('particles-wrapper');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.top = (Math.random() * 100) + '%';
    p.style.left = (Math.random() * 100) + '%';
    p.style.animationDelay = Math.random() * 5 + 's';
    wrapper.appendChild(p);
  }
});
