// Global Variables
const calendarEl = document.getElementById("calendar");
const taskModal = document.getElementById("task-modal");
let selectedDate = null;
const tasks = {}; // Stores tasks by date and time

// Create Calendar
function createCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth(); // Get current month
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // Get first day of the month
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get last day of the month

    let days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(""); // Add empty cells for the previous month days
    }
    
    for (let i = 1; i <= lastDay; i++) {
        days.push(i);
    }

    // Render days
    calendarEl.innerHTML = "";
    for (let i = 0; i < days.length; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = days[i] || "";
        if (days[i]) {
            day.addEventListener("click", () => openTaskModal(days[i]));
        }
        calendarEl.appendChild(day);
    }
}

// Open Modal to Add Task
function openTaskModal(day) {
    selectedDate = day;
    taskModal.style.display = "flex";
}

// Close the Modal
function closeModal() {
    taskModal.style.display = "none";
}

// Add Task for a Date and Time
function addTask() {
    const taskName = document.getElementById("task-name").value;
    const taskTime = document.getElementById("task-time").value;

    if (!taskName || !taskTime || !selectedDate) {
        alert("Please provide a task and a time.");
        return;
    }

    const taskKey = `${selectedDate} ${taskTime}`;
    tasks[taskKey] = taskName;
    alert("Task added successfully!");
    closeModal();
    displayTasks();
}

// Display Tasks
function displayTasks() {
    // Here you can render the tasks for each date if you'd like.
    console.log(tasks);
}

createCalendar();
