document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".main-image");
    const mainImageTwo = document.querySelector(".main-image-two");
    const mainImageThree = document.querySelector(".main-image-three");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const thumbnailsTwo = document.querySelectorAll(".thumbnail-two");
    const modalContainer = document.querySelector(".modal-container");
    const modalClose = document.querySelector(".modal-close");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtnTwo = document.querySelector(".prev-btn-two");
    const nextBtnTwo = document.querySelector(".next-btn-two");

    let currentIndex = 0;
    const imageSources = Array.from(thumbnails).map(img => img.src);

    // Open Modal with Selected Image
    mainImage.addEventListener("click", () => {
        modalContainer.style.display = "flex";
        mainImageTwo.src = imageSources[currentIndex];
    });

    // Close Modal
    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    // Update Image in Modal
    function updateModalImageTwo(index) {
        currentIndex = index;
        mainImageTwo.src = imageSources[currentIndex];

        // Update Active Thumbnail
        thumbnailsTwo.forEach((thumb, idx) => {
            thumb.classList.toggle("active", idx === currentIndex);
        });
    }
    function updateModalImage(index) {
        currentIndex = index;
        mainImage.src = imageSources[currentIndex];

        // Update Active Thumbnail
        thumbnails.forEach((thumb, idx) => {
            thumb.classList.toggle("active", idx === currentIndex);
        });
    }
    function swipeModalImage(index) {
        currentIndex = index;
        mainImageThree.src = imageSources[currentIndex];
    } 

    // Previous Button
    prevBtnTwo.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        swipeModalImage(currentIndex);
    });

    // Next Button
    nextBtnTwo.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        swipeModalImage(currentIndex);
    });
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        updateModalImageTwo(currentIndex);
    });

    // Next Button
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        updateModalImageTwo(currentIndex);
    });

    // Thumbnail Click in Modal
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            updateModalImage(index);
        });
    });
    thumbnailsTwo.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            updateModalImageTwo(index);
        });
    });

    // Keyboard Navigation (Arrow Keys)
    document.addEventListener("keydown", (e) => {
        if (modalContainer.style.display === "flex") {
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "Escape") modalClose.click();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const quantityDisplay = document.querySelector(".quantity");
    const decreaseBtn = document.querySelector("#decrease");
    const increaseBtn = document.querySelector("#increase");
    const addToCartBtn = document.querySelector(".cart-button");

    let quantity = 0; // Initial quantity

    // Increase quantity
    increaseBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    // Decrease quantity (min value is 0)
    decreaseBtn.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    // Add to cart function
    addToCartBtn.addEventListener("click", () => {
        if (quantity > 0) {
            alert(`Added ${quantity} items to cart! 🛒`);
        } else {
            alert("Please select at least 1 item before adding to cart!");
        }
    });
});

