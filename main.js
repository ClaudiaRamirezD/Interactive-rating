document.addEventListener("DOMContentLoaded", function () {
    // Add click event to numbers container 
    const numberContainer = document.querySelectorAll('.numbers-container');

    numberContainer.forEach((container) => {
        container.addEventListener("click", function () {
          // Remove active class
            numberContainer.forEach((c) => c.classList.remove("active"));
            //Add class to the clicked container
            this.classList.add("active");

            // Select the input inside the clicked container
            this.querySelector('input[type="radio"]').checked = true;

            // Clear any previous error message
            const errorMessage = document.getElementById("rating-error");
            errorMessage.textContent = "";
            errorMessage.classList.remove("visible");
        });
    });

    //Handle form submission
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        // Get the selected rating
        const selectedRating = document.querySelector('input[name="numbers"]:checked');

        if (selectedRating) {
            //Display thanks card
            document.querySelector('.thanks-card').style.display = 'flex';

            //Hide rating card
            document.querySelector('.card').style.display = 'none';

            // Update the text in .show-selected-rating
            document.querySelector('.show-selected-rating').textContent = `You selected ${selectedRating.value} out of 5`;
        } else {
            const errorMessage = document.getElementById("rating-error");
            errorMessage.textContent =
                "Please select a rating before submitting.";
            errorMessage.classList.add("visible");
        }
    });
});