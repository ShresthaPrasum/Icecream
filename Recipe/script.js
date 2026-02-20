const steps = document.querySelectorAll('.step');


steps.forEach(step => {
    step.addEventListener('click', () => {
        step.classList.toggle('active');
        const icon = step.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
})