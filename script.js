let currentIndex = 0;
const slideInterval = 3000; // Tempo em milissegundos entre as transições

function showSlide(index) {
    const slides = document.querySelectorAll('.carrossel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carrossel-item').length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carrossel-item').length) % document.querySelectorAll('.carrossel-item').length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    showSlide(index);
}

// Inicializa o carrossel
showSlide(currentIndex);

// Muda as imagens automaticamente
setInterval(nextSlide, slideInterval);
