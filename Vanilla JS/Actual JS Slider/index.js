const slider = document.querySelector('.js-slider');
const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.slider-card');

let isDragging = false;
let startX;
let scrollLeft;
let currentX;
let cardWidth = card[0].offsetWidth + parseInt(getComputedStyle(card[0]).marginRight); // Total width of a card (including margin)
let sliderWidth = slider.offsetWidth; // Width of the visible slider area
let totalWidth = cardWidth * card.length - sliderWidth; // Total scrollable width

const dampingFactor = 0.2; // Damping factor for stretching effect

// Disable default dragging behavior
slider.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// When the user starts dragging
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollLeft = cards.style.transform ? parseFloat(cards.style.transform.replace('translateX(', '')) : 0;
    cards.style.cursor = 'grabbing';
});

// While the user is dragging
slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    currentX = e.pageX;
    let walk = (currentX - startX) * 2; // Base dragging speed
    let newScroll = scrollLeft + walk;

    // Apply rubber-band effect if beyond left boundary
    if (newScroll > 0) {
        const excess = newScroll; // How far we've moved beyond the left boundary
        newScroll = excess * dampingFactor; // Apply damping to slow down movement
    }

    // Apply rubber-band effect if beyond right boundary
    else if (Math.abs(newScroll) > totalWidth) {
        const excess = Math.abs(newScroll) - totalWidth; // How far we've moved beyond the right boundary
        newScroll = -(totalWidth + excess * dampingFactor); // Apply damping to slow down movement
    }

    cards.style.transform = `translateX(${newScroll}px)`;
});

// When the user ends dragging
slider.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    cards.style.cursor = 'grab';

    let finalScroll = Math.abs(parseFloat(cards.style.transform.replace('translateX(', '')));
    let snappedCardIndex = Math.round(finalScroll / cardWidth); // Closest card index
    let newScroll = snappedCardIndex * cardWidth;

    // Ensure snapping to boundary if beyond the limits
    if (newScroll < 0) {
        newScroll = 0; // Snap back to the start
    } else if (newScroll > totalWidth) {
        newScroll = totalWidth; // Snap back to the end
    }

    // Smooth transition to snapped card or boundary
    cards.style.transition = 'transform 0.3s ease';
    cards.style.transform = `translateX(${-newScroll}px)`;

    // Remove transition after snapping is done
    setTimeout(() => {
        cards.style.transition = 'none';
    }, 300);
});

// Reset dragging if the mouse leaves the slider
slider.addEventListener('mouseleave', () => {
    if (isDragging) {
        slider.dispatchEvent(new MouseEvent('mouseup')); // Trigger mouseup for snapping
    }
});

// Disable the default drag events
slider.addEventListener('dragover', (e) => {
    e.preventDefault();
});
