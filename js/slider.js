document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#slider img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(showNextImage, 6000); 
});
