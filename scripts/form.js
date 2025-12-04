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
      sel.appendChild(opt);
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
