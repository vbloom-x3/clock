let serverDate;

function displayTime(currentDate) {
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const h = String(currentDate.getHours()).padStart(2, "0");
  const m = String(currentDate.getMinutes()).padStart(2, "0");
  const s = String(currentDate.getSeconds()).padStart(2, "0");

  const formatted = `{
date : ${day}/${month}/${year}
time : ${h}:${m}:${s}
}`;

  document.getElementById("preBlock").textContent = formatted;
  document.title = `${h}:${m}`;
}

function fetchTimeOnce() {
  // Use the local system's date and time
  const localDate = new Date();

  // First display
  displayTime(localDate);

  // Update every second
  setInterval(() => {
    // Instead of incrementing a stored date, create a new Date object each second
    // to get the most accurate time from the system.
    displayTime(new Date());
  }, 1000);
}

fetchTimeOnce();
