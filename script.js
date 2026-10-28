// EASY EDIT: The visible portfolio content lives in index.html.
// Add your Google Drive PDF link in the archive href in index.html.

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Contact form: handled by FormSubmit when hosted online.
// The recipient address is not shown on the webpage, but it is visible in HTML source.
// To truly keep the address secret, a server-side endpoint is required.
