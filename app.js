"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await getTeachers(); // Call the getTeachers function
  console.log(teachers); // Log the teachers to the console
  displayTeachersGrid(teachers); // Call the displayTeachersGrid function
}

async function getTeachers() {
  const response = await fetch(
    "https://headless.cederdorff.dk/wp-json/wp/v2/teachers?acf_format=standard&orderby=title&order=asc"
  ); // Fetch the data from the URL
  const data = await response.json(); // Parse the data as JSON into readable JavaScript objects (array of objects)
  return data; // Return the data
}

function displayTeachersGrid(teachers) {
  const teachersGrid = document.querySelector("#teachers-grid");

  for (const teacher of teachers) {
    teachersGrid.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
          <article class="grid-item">
            <img src="${teacher.acf.image}" alt="${teacher.acf.name}" />
            <h2>${teacher.acf.name}</h2>
            <p>${teacher.acf.title}</p>
            <a href="mailto:${teacher.acf.mail}">${teacher.acf.mail}</a>
          </article>
        `
    );
  }
}
