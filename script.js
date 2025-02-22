document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.hero-content.intro').classList.add('hidden');
        document.querySelector('.hero-content.about').classList.remove('hidden');
    }, 10000); // 10 seconds
});
