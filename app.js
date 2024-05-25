"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await getTeachers(); // Call the getTeachers function
  console.log(teachers); // Log the teachers to the console
  displayTeachers(teachers); // Call the displayTeachers function
  displayTeachersGrid(teachers); // Call the displayTeachersGrid function
}

async function getTeachers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
  ); // Fetch the data from the URL
  const data = await response.json(); // Parse the data as JSON into readable JavaScript objects (array of objects)
  return data; // Return the data
}

// Function to display the teachers
function displayTeachers(teachers) {
  const teachersList = document.querySelector("#teachers-list"); // Get the teachers-list element from the HTML

  for (const teacher of teachers) {
    teachersList.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <li>
       ${teacher.name} - ${teacher.mail}
      </li>
    `
    );
  }
}
