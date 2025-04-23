document.addEventListener("DOMContentLoaded", () => {
    const reviewCards = document.querySelectorAll('.review-video-card'); // Select all the video cards
    let currentIndex = 0; // Track the current card index
  
    const cardsToShow = 3; // Number of videos to display at once
  
    // Function to update the visibility of review cards based on current index
    function updateReviewCards() {
      // Ensure that we are displaying only the first 3 visible at a time
      const transformValue = -currentIndex * (reviewCards[0].offsetWidth + 16); // Adjust 16px for margin between cards
      reviewCards.forEach(card => {
        card.style.transform = `translateX(${transformValue}px)`; // Slide the cards horizontally
      });
    }
  
    // Initially show the first set of 3 videos
    updateReviewCards();
  
    // Left arrow button event listener
    document.getElementById('reviewPrevBtn').addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--; // Move to the previous set of videos
        updateReviewCards();
      }
    });
  
    // Right arrow button event listener
    document.getElementById('reviewNextBtn').addEventListener('click', () => {
      if (currentIndex < reviewCards.length - cardsToShow) {
        currentIndex++; // Move to the next set of videos
        updateReviewCards();
      }
    });
});
