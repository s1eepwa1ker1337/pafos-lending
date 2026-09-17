// ========================================
// 1. ПЛАВНЫЙ СКРОЛЛ С УЧЁТОМ ШАПКИ
// ========================================

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) return;

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// ========================================
// 2. ВАЛИДАЦИЯ И ОТПРАВКА ФОРМЫ
// ========================================

const form = document.querySelector('.cta-form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name.length < 2) {
        alert('Пожалуйста, введите имя (минимум 2 символа).');
        nameInput.focus();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email.');
        emailInput.focus();
        return;
    }

    alert(`Спасибо, ${name}! Мы свяжемся с тобой по адресу ${email}.`);

    form.reset();
});