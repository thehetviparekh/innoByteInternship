document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".single_card");
    const points = document.querySelectorAll(".ellipse-div");
    const leftButton = document.querySelector(".left_right img:nth-child(1)");
    const rightButton = document.querySelector(".left_right img:nth-child(2)");
    let currentIndex = 0;

    // Function to update card border color
    function updateCardBorder(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.border = "2px solid var(--color-light-saf)";
            } else {
                card.style.border = "2px solid grey";
            }
        });
    }

    // Function to update points color
    function updatePointsColor(index) {
        points.forEach((point, i) => {
            if (i === index) {
                point.style.backgroundColor = "var(--color-light-saf)";
            } else {
                point.style.backgroundColor = "var(--color-light)";
            }
        });
    }

    // Initial setup
    updateCardBorder(currentIndex);
    updatePointsColor(currentIndex);

    // Function to handle left button click
    leftButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        updateCardBorder(currentIndex);
        updatePointsColor(currentIndex);
    });

    // Function to handle right button click
    rightButton.addEventListener("click", function () {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateCardBorder(currentIndex);
        updatePointsColor(currentIndex);
    });
});


// plans 

document.addEventListener("DOMContentLoaded", function () {
    const planButtons = document.querySelectorAll(".plan_single_box .btn");
    const planCards = document.querySelectorAll(".plan_single_box");
    let selectedPlan = document.querySelector(".plan_single_box.plan_selected");

    // Initially select the Premium Plan
    if (selectedPlan === null) {
        selectedPlan = document.querySelector(".plan_single_box:nth-child(3)");
        selectedPlan.classList.add("plan_selected");
        selectedPlan.querySelector(".btn").classList.add("btn_selected");
        selectedPlan.style.border = "2px solid #F53838";
    }

    planButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            // Remove previous selection
            selectedPlan.classList.remove("plan_selected");
            selectedPlan.querySelector(".btn").classList.remove("btn_selected");
            selectedPlan.style.border = "2px solid grey";

            // Update selected plan
            selectedPlan = planCards[index];
            selectedPlan.classList.add("plan_selected");
            selectedPlan.querySelector(".btn").classList.add("btn_selected");
            selectedPlan.style.border = "2px solid #F53838";
        });
    });
});
