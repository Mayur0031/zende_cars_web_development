window.addEventListener('load', function() {
  const textElement = document.getElementById('videoTitle');
  const textContent = textElement.textContent;
  
  // Dynamically calculate the text width based on the content
  const textWidth = textElement.scrollWidth;  // This gives us the exact width of the content
  
  // Apply this width to the CSS variable
  textElement.style.setProperty('--text-width', `${textWidth}px`);
  
  // Dynamically adjust the typing duration based on text length
  const typingDuration = textContent.length * 0.05; // Adjust 0.2 for speed control
  // Update the animation duration and steps
  textElement.style.animation = `typing ${typingDuration}s steps(${textContent.length}, end), blink-caret 0.75s step-end infinite`;

  setTimeout(function() {
    textElement.style.borderRight = 'none'; // Hide the cursor after typing is done
  }, typingDuration * 1000);
});


// 



const originalVideos = Array.from(document.querySelectorAll('.custom-video-container'));
const gallery = document.getElementById('videoGallery');
const dotsContainer = document.getElementById('videoDots');
let current = 0;

// Helper for looping index
function getLoopedIndex(index) {
  return (index + originalVideos.length) % originalVideos.length;
}

  function updateSlider() {
    gallery.innerHTML = ''; // Clear gallery

    const visibleVideos = [
      originalVideos[getLoopedIndex(current - 1)].cloneNode(true), // Left
      originalVideos[getLoopedIndex(current)].cloneNode(true),     // Center
      originalVideos[getLoopedIndex(current + 1)].cloneNode(true)  // Right
    ];

    visibleVideos.forEach((vid, idx) => {
      if (idx === 1) vid.classList.add('active'); // Middle one
      gallery.appendChild(vid);
    });

    // Update Dots
    dotsContainer.querySelectorAll('span').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

// Create dots once
dotsContainer.innerHTML = '';
originalVideos.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    current = index;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});

// Navigation
document.querySelector('.left-btn').addEventListener('click', () => {
  current = getLoopedIndex(current - 1);
  updateSlider('left');
});

document.querySelector('.right-btn').addEventListener('click', () => {
  current = getLoopedIndex(current + 1);
  updateSlider('right');
});


updateSlider(); // Initial call


