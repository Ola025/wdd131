// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Display last modification date
const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + lastModified.toLocaleString();
