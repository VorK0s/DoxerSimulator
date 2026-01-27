document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.side-bar-input');
    
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        }
        
        input.addEventListener('input', function() {
            this.classList.toggle('filled', this.value.trim() !== '');
        });
        
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});

// bruh this is AI, sorry :/