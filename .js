document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('span');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '−';
        }
    });
});

document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
   
    window.location.href = 'example.com'

document.getElementById('settingsToggle').addEventListener('click', function() {
    alert('Settings are coming soon!');
});
