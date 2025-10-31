// Footer Date Script
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();

lastModifiedSpan.textContent = document.lastModified;
