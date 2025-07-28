(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let mouseX = 0, mouseY = 0;
        let rect = card.getBoundingClientRect();
        let ticking = false;

        const update = () => {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = -(mouseY - centerY) / 10;
            const rotateY = (mouseX - centerX) / 10;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            ticking = false;
        };

        card.addEventListener('mousemove', (e) => {
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        });

        card.addEventListener('mouseenter', () => {
            rect = card.getBoundingClientRect();
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
})();
