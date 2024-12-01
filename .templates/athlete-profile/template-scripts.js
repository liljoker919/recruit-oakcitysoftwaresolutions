document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            alert(`Clicked on: ${image.alt}`);
            // You can add lightbox functionality here
        });
    });
});
