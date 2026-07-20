document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();

            // validation check
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            // collect form data
            const data = {
                name: document.getElementById('name')?.value || '',
                email: document.getElementById('email')?.value || '',
                phone: document.getElementById('phone')?.value || '',
                collegeId: document.getElementById('collegeId')?.value || '',
                yearStudy: document.getElementById('yearStudy')?.value || '',
                branch: document.getElementById('branch')?.value || '',
                event: document.getElementById('eventSelect')?.value || '',
                submittedAt: new Date().toISOString()
            };

            // save to localStorage
            try {
                const key = 'registrations';
                const existing = JSON.parse(localStorage.getItem(key) || '[]');
                existing.push(data);
                localStorage.setItem(key, JSON.stringify(existing));
            } catch (err) {
                console.error('Failed to save registration:', err);
            }

            // simple confirmation
            alert('Registration submitted. Thank you, ' + (data.name || 'participant') + '!');

            // reset form and validation state
            form.reset();
            form.classList.remove('was-validated');
        }, false);
    });
})();