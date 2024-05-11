// Array of images to cycle through
const images = ['console.png', 'image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png']; // Update to PNG images
let currentIndex = 0;

// Function to change the console image
function changeImage() {
  console.log("Changing image");
  const consoleContainer = document.getElementById('console-container');
  const consoleImage = document.getElementById('console-image');

   // Create a new image element
  const newImage = document.createElement('img');
  newImage.id = 'console-image';
  newImage.src = images[currentIndex];
  newImage.alt = 'Game Console';

  // Replace the previous image if it already exists, otherwise add it
  if (consoleImage) {
    consoleImage.replaceWith(newImage);
  } else {
    consoleContainer.appendChild(consoleImage);
  }

  currentIndex = (currentIndex + 1) % images.length;
}

// Event listener for the play button
document.getElementById('play-button').addEventListener('click', changeImage);

// Initial image change
changeImage();
