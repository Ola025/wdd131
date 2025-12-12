document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];

  const sel = document.getElementById('product');
  if (sel) {
    products.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;        // value uses id (per typical product array)
      opt.textContent = p.name;
      sel.a// scripts/form.js
// script to populate the "product" select and handle review count in localStorage

document.addEventListener('DOMContentLoaded', () => {
  // an array of places (object + array usage)
  const places = [
    { id: 'zuma', name: 'Zuma Rock' },
    { id: 'abai', name: 'Abuja city view spot' },
    { id: 'rockloop', name: 'Rock Loop trail' }
  ];

  // populate select using template literals (only)
  const select = document.getElementById('product');
  if (select) {
    places.forEach(place => {
      const opt = document.createElement('option');
      opt.value = place.id;
      opt.textContent = `${place.name}`;
      select.appendChild(opt);
    });
  }

  // localStorage review counter
  const COUNTER_KEY = 'zuma_review_count';
  const countEl = document.getElementById('reviewCount');

  // read current count
  let count = parseInt(localStorage.getItem(COUNTER_KEY), 10);
  if (isNaN(count)) count = 0;
  if (countEl) countEl.textContent = `${count}`;

  // when form is submitted, increment counter and allow navigation to references page
  const form = document.getElementById('reviewForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // increment counter in localStorage
      count += 1;
      localStorage.setItem(COUNTER_KEY, `${count}`);
      if (countEl) countEl.textContent = `${count}`;

      // For this student project we use GET and redirect to references.html (action attribute)
      // no need to block default submit; the review count is already saved.
      // but show a quick alert (optional)
      // alert(`Thanks! Review submitted. Total reviews on this browser: ${count}`);
    });
  }
});
ppendChild(opt);
    });
  }

  //  client side required hint on submit (keeps it student-level)
  const form = document.getElementById('reviewForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // rely on browser validity; if invalid, show quick message
      if (!form.checkValidity()) {
        // let browser show its UI; we can focus the first invalid element
        const invalid = form.querySelector(':invalid');
        if (invalid) invalid.focus();
        e.preventDefault();
      }
    });
  }
});
