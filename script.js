const swipeUpButton = document.getElementById('swipeUpButton');

swipeUpButton.addEventListener('click', () => {
    // You can customize the scroll behavior here
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
