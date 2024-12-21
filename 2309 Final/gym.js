// Form Validation
const form = document.getElementById('membershipForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = document.getElementById('age').value;
    const plan = document.getElementById('plan').value;

    let isValid = true;

    // Name validation
    if (name === "") {
        alert("Name is required.");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (phonePattern.test(phone)) {
        console.log("Phone number is valid.");
    } else {
        alert("Please enter a valid 10-digit phone number without spaces or special characters.");
        isValid = false;
    }
    // Age validation
    if (age < 16 || isNaN(age)) {
        alert("You must be at least 16 years old to join.");
        isValid = false;
    }

    // Plan validation
    if (plan === "") {
        alert("Please select a membership plan.");
        isValid = false;
    }

    if (isValid) {
        alert("Thank you for joining Power Fitness!");
        form.reset();
    }
});

// Slideshow Functionality
const slideshowImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

let currentIndex = 0;
const slideshowElement = document.getElementById('slide');

function updateSlideshow() {
    slideshowElement.src = slideshowImages[currentIndex];
    currentIndex = (currentIndex + 1) % slideshowImages.length;
}

setInterval(updateSlideshow, 3000); // Change image every 3 seconds
