document.addEventListener("DOMContentLoaded", () => {
    const images = [
        '/images/services_swaper/3d_matt.jpg',
        '/images/services_swaper/7d_matt.jpg',
        '/images/services_swaper/Bumper_Guard.jpg',
        '/images/services_swaper/car_arm_rest.jpg',
        '/images/services_swaper/car-window-garnish.webp',
        '/images/services_swaper/rear_protector.jpg',
        '/images/services_swaper/roofrail.jpg',
        '/images/services_swaper/Scufflet.png',
        '/images/services_swaper/shark_antena.webp',
        '/images/services_swaper/wheelcap.png',
    ];

    let currentIndex = 0;
    const track = document.getElementById('cardTrack');

    function renderCards() {
        track.innerHTML = '';
        const visibleImages = images.slice(currentIndex, currentIndex + 5);

        visibleImages.forEach(img => {
            const card = document.createElement('div');
            card.className = 'position-relative slider-card';
            card.style.width = '300px';
            card.style.height = '300px';

            // Extract filename without extension and replace _ and - with space
            const imageName = img.split('/').pop().split('.')[0];
            const formattedName = imageName.replace(/[_-]/g, ' ');  // Replace _ or - with space

            card.innerHTML = `
                <img src="${img}" alt="Service">
                <div class="popup-overlay">
                    <p class="mb-2">${formattedName}</p>  <!-- Display formatted image name -->
                    <button class="btn btn-warning view-btn">View</button>  <!-- View button -->
                </div>
            `;

            // Add event listener to "View" button to show popup
            const viewButton = card.querySelector('.view-btn');
            viewButton.addEventListener('click', () => showPopup(img, formattedName));

            const overlay = card.querySelector('.popup-overlay');

            // Hover effect to show/hide overlay
            card.addEventListener('mouseenter', () => overlay.style.opacity = 1);
            card.addEventListener('mouseleave', () => overlay.style.opacity = 0);

            track.appendChild(card);
        });
    }

    // Function to show the popup window with image, name, and contact us button
    function showPopup(img, name) {
        const popup = document.createElement('div');
        popup.className = 'popup-container';

        popup.innerHTML = `
            <div class="popup-content">
                <img src="${img}" alt="Full image" class="popup-image">
                <p class="popup-name">${name}</p>
                <button class="btn btn-warning">Contact Us for price</button>
                <button class="btn btn-danger close-popup">Close</button>
            </div>
        `;

        document.body.appendChild(popup);

        // Add event listener to close the popup
        const closePopupBtn = popup.querySelector('.close-popup');
        closePopupBtn.addEventListener('click', () => {
            document.body.removeChild(popup);
        });
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 5) % images.length; // Circular behavior
        renderCards();
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 5 + images.length) % images.length; // Circular behavior
        renderCards();
    });
    

    renderCards();
});
