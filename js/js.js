document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.main-left.slider img');
    let currentIndex = 0;

    function updateSlider(index) {
        images.forEach((img, i) => {
            img.classList.remove('active'); // Remove active class from all images
            if (i === index) {
                img.classList.add('active'); // Add active class to the current image
            }
        });
    }

    function startSlider() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; // Cycle through images
            updateSlider(currentIndex);
        }, 5000); // Change image every 3 seconds
    }

    // Initialize the first image and start the slider
    updateSlider(currentIndex);
    startSlider();
});
