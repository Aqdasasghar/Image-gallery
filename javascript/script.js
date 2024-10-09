// Get the modal element
var modal = document.getElementById("imageModal");

// Get the modal image element and caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Get all images
var images = document.querySelectorAll(".gallery-item");

// Variable to track the current image index
var currentIndex = 0;

// Open modal and display the clicked image
images.forEach((img, index) => {
    img.onclick = function () {
        openModal(index);
    };
});

// Function to open modal and show image
function openModal(index) {
    modal.style.display = "block";
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
    currentIndex = index;
}

// Function to close modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};

// Function to change the image (next/previous)
function changeImage(step) {
    currentIndex += step;

    // Loop back to first image if we go past the last image
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Go to the last image if we go before the first image
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Display the new image
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}