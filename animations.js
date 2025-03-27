// Animações suaves para elementos ao rolar a página
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    // Elementos para animar
    document.querySelectorAll('.service-card, .profile-content, .about-content, .schedule-content').forEach(el => {
        el.classList.add('animate-hidden');
        observer.observe(el);
    });
}

// Efeito parallax suave no hero
function initParallax() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Animação suave para os botões de contato
function initContactButtonsAnimation() {
    const buttons = document.querySelectorAll('.contact-buttons a');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05) translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'none';
        });
    });
}

// Animação para as imagens antes/depois
function initBeforeAfterAnimation() {
    const images = document.querySelectorAll('.before-image, .after-image');
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const img = image.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseleave', () => {
            const img = image.querySelector('img');
            img.style.transform = 'none';
        });
    });
}

// Inicializar todas as animações
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParallax();
    initContactButtonsAnimation();
    initBeforeAfterAnimation();
});