// Get the HTML elements we need to work with from the document
const disc = document.getElementById('disc');
const song = document.getElementById('our-song');
const popup = document.getElementById('popup-container');

// Add an event listener that waits for a 'click' on the disc
disc.addEventListener('click', () => {
    // The logic is based on whether the song is currently paused or playing.
    if (song.paused) {
        // --- If the song is paused, we want to START everything ---

        // 1. Play the audio
        song.play();

        // 2. Add the 'spinning' class to the disc to start the CSS animation
        disc.classList.add('spinning');

        // 3. Show the pop-up by removing the 'hidden' class
        popup.classList.remove('hidden');

    } else {
        // --- If the song is already playing, we want to STOP everything ---

        // 1. Pause the audio
        song.pause();

        // 2. Stop the spinning animation by removing the class
        disc.classList.remove('spinning');

        // 3. Hide the pop-up by adding the 'hidden' class back
        popup.classList.add('hidden');
    }
});

/* ===========================
   PHOTO SLIDESHOW LOGIC
   =========================== */
const slideshowImg = document.getElementById("slideshow-img");

// Put all your image file names inside these quotes!
const photos = [
    "ross2.jpg", 
    "ross1.jpg", 
    "ross4.jpg",
    "ross.jpg",
    "ross3.jpg"
]; 

let currentPhotoIndex = 0;

// This checks if the image exists, then starts a timer
if (slideshowImg) {
    setInterval(() => {
        // 1. Fade the current image out
        slideshowImg.style.opacity = 0;
        
        // 2. Wait half a second, swap the image source, then fade it back in
        setTimeout(() => {
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            slideshowImg.src = photos[currentPhotoIndex];
            slideshowImg.style.opacity = 1;
        }, 500); 
        
    }, 3500); // Changes the picture every 3.5 seconds
}