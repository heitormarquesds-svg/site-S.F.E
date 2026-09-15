const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Sinal recebido. Seu acesso foi registrado no sistema.';
  contactForm.reset();
});