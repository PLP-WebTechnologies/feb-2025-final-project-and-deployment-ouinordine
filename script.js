document.addEventListener('DOMContentLoaded', () => {
    // Toggle comment section on homepage
    const commentButtons = document.querySelectorAll('.toggle-comments-btn');
    commentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const commentsId = event.target.dataset.comments;
            const commentsSection = document.getElementById(`comments-${commentsId}`);
            commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
            event.target.textContent = commentsSection.style.display === 'none' ? 'Show Comments' : 'Hide Comments';
        });
    });

    // Simple form submission alert on contact page
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formMessage.textContent = `Message sent successfully, ${name}! We'll get back to you at ${email}.`;
                formMessage.className = 'success';
                formMessage.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                    formMessage.className = '';
                }, 3000);
            } else {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.className = 'error';
                formMessage.classList.remove('hidden');
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                    formMessage.className = '';
                }, 3000);
            }
        });
    }
});