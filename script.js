const buttons = document.querySelectorAll(".complete-btn");
const progressText = document.getElementById("progress-text");

// Load saved habit statuses, or create a fresh array.
let habits = JSON.parse(localStorage.getItem("habits")) || [
false,
false,
false,
false
];

// Update the buttons and progress using saved data.
function updateProgress() {
let completedHabits = 0;

buttons.forEach(function (button, index) {
    if (habits[index]) {
        button.textContent = "Completed ✓";
        completedHabits++;
    } else {
        button.textContent = "Mark as Complete";
    }
});

const progress = (completedHabits / buttons.length) * 100;
progressText.textContent = progress + "% Completed";

}

// Handle clicks on each habit button.
buttons.forEach(function (button, index) {
button.addEventListener("click", function () {
habits[index] = !habits[index];

    localStorage.setItem("habits", JSON.stringify(habits));

    updateProgress();
});

});

// Display the initial saved progress.
updateProgress();