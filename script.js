document.addEventListener('DOMContentLoaded', () => {
    const barsContainer = document.querySelector('.bars');
    const show = document.querySelector('.mobile_menu');

    barsContainer.addEventListener('click', (event) => {
        const bar = event.target;
        if (bar !== barsContainer) {
            barsContainer.classList.toggle('animate');
            show.classList.toggle('show')
        }
    });
});
