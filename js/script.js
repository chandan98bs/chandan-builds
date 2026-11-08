document.getElementById('year').textContent = new Date().getFullYear();
  const menuBtn = document.getElementById('menuBtn');
  const links = document.getElementById('navlinks');
  menuBtn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
