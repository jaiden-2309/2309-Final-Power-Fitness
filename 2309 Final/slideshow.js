const slideshowImages = [
    'slideshow.jpg',
    'slideshow2.jpg',
    'slideshow3.webp',
    'slideshow4.webp',
    'slideshow5.jpg'
];

let currentIndex = 0;

function updateSlideshow() {
    const slideshowElement = document.getElementById('slide');
    if (slideshowElement) {
        slideshowElement.src = slideshowImages[currentIndex];
        currentIndex = (currentIndex + 1) % slideshowImages.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateSlideshow, 3000); // Change image every 3 seconds
});
