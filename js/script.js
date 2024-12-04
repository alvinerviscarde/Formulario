// script.js
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validação simples
        if (name && email && message) {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset(); // Limpa o formulário após o envio
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
