function galleryOpen(img, containerId) {
    // Get the specific container
    var container = document.getElementById(containerId);
    var expandImg = container.querySelector('img'); // Target the image inside this container
    var imgText = container.querySelector('div'); // Target the text inside this container

    // Update the expanded image and its text
    expandImg.src = img.src;
    imgText.innerHTML = img.alt;

    // Display the container
    container.style.display = "block";
}

function closeContainer(containerId) {
    // Hide the specific container
    var container = document.getElementById(containerId);
    container.style.display = "none";
}
