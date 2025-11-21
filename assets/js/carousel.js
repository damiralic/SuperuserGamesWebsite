const carouselController = (() => {
    const carousel = document.getElementById('carouselContainer');
    const controlsContainer = document.getElementById('carouselControls');
    const games = carousel.querySelectorAll('.game-card');
    let currentIndex = 0;
    let autoPlayInterval = null;

    // Create dot indicators
    function initDots() {
        games.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-button ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => goToGame(index);
            controlsContainer.appendChild(dot);
        });
    }

    // Update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Update dots
        document.querySelectorAll('.carousel-button').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        // Animate active card
        const cards = document.querySelectorAll('.game-card');
        const activeCard = cards[currentIndex];

        // Remove any existing animation class
        activeCard.classList.remove('animate');

        // Force browser to recognize the removal
        setTimeout(() => {
            activeCard.classList.add('animate');
        }, 20); // 20ms delay ensures reflow and animation restart
    }


    // Go to specific game
    function goToGame(index) {
        currentIndex = index;
        updateCarousel();
        resetAutoPlay();
    }

    // Next game
    function next() {
        currentIndex = (currentIndex + 1) % games.length;
        updateCarousel();
        resetAutoPlay();
    }

    // Previous game
    function prev() {
        currentIndex = (currentIndex - 1 + games.length) % games.length;
        updateCarousel();
        resetAutoPlay();
    }

    // Auto-play every 5 seconds
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            next();
        }, 10000);
    }

    // Reset auto-play timer
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Initialize
    function init() {
        initDots();
        startAutoPlay();
    }

    return { init, next, prev, goToGame };
})();

carouselController.init();