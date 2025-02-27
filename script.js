<!-- script.js -->
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('responseMessage').textContent = 'Thank you! We will get back to you soon.';
});
