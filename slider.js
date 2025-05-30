// Slider Navigation
function scrollSlider(direction) {
    const slider = document.querySelector('.cards-slider');
    const scrollAmount = 260; // Book width + gap
    slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// Book Flip and Open Action
const books = document.querySelectorAll('.book');

books.forEach(book => {
    book.addEventListener('click', () => {
        book.classList.toggle('flipped');
    });

    book.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') book.classList.toggle('flipped');
    });
});

function openMaterial(btn) {
    const book = btn.closest('.book');
    const subject = book.dataset.subject;
    alert(`Opening ${subject}... (Simulated)`);
    // Replace with actual redirect: window.location.href = 'material-url';
}

// Particles.js
particlesJS('particles', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: ['#4CAF50', '#2196F3', '#F44336'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' } }
    }
});

// Swipe Support
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.cards-slider').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.cards-slider').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) scrollSlider('right');
    if (touchEndX - touchStartX > 50) scrollSlider('left');
});