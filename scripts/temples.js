// Toggle mobile navigation
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  menuButton.textContent = menuButton.textContent === '✖' ? '☰' : '✖';
});

// Dynamic footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
