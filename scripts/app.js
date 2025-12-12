// scripts/app.js
// student-level script for footer year/lastModified and weather display

document.addEventListener('DOMContentLoaded', () => {
  // set copyright year and last modified for pages that have these ids
  const setFooterDates = (yearId, lastId) => {
    const yEl = document.getElementById(yearId);
    if (yEl) yEl.textContent = `${new Date().getFullYear()}`;

    const lmEl = document.getElementById(lastId);
    if (lmEl) {
      const lm = document.lastModified || '';
      try {
        const parsed = new Date(lm);
        lmEl.textContent = isNaN(parsed.getTime()) ? lm : parsed.toLocaleString();
      } catch {
        lmEl.textContent = lm;
      }
    }
  };

  // apply to the pages
  setFooterDates('year','lastModified');
  setFooterDates('yearGallery','lastModifiedGallery');
  setFooterDates('yearForm','lastModifiedForm');
  setFooterDates('yearRef','lastModifiedRef');

  // Weather: static values for student project, and wind chill function
  const temperatureC = 30; // static value
  const windKmh = 12;     // static value

  const tempEl = document.getElementById('tempVal');
  const windEl = document.getElementById('windVal');
  const wcEl = document.getElementById('windChill');

  if (tempEl) tempEl.textContent = `${temperatureC}`;
  if (windEl) windEl.textContent = `${windKmh}`;

  // one-line calculateWindChill function (returns °C)
  function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
  }

  // compute only if conditions met (metric): temp <= 10°C and wind > 4.8 km/h
  if (temperatureC <= 10 && windKmh > 4.8) {
    const wc = calculateWindChill(temperatureC, windKmh);
    if (wcEl) wcEl.textContent = `${wc.toFixed(1)} °C`;
  } else {
    if (wcEl) wcEl.textContent = 'N/A';
  }
});
