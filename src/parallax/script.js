(() => {
    const parallaxItems = document.querySelectorAll('.parallax-bg');

    window.addEventListener('scroll', () => {
        parallaxItems.forEach(item => {
            const scrollSpeed = parseFloat(item.dataset.speed);
            const yScrollPositionWindow = window.scrollY;
            const parentTopOffset = item.parentElement.offsetTop;
            const yScrollPositionItem = (yScrollPositionWindow - parentTopOffset) * scrollSpeed;
            item.style.transform = `translateY(${yScrollPositionItem}px)`;
        });
    });
})();
