let serverDate;

function displayTime(currentDate) {
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const h = String(currentDate.getHours()).padStart(2, "0");
  const m = String(currentDate.getMinutes()).padStart(2, "0");
  const s = String(currentDate.getSeconds()).padStart(2, "0");

  const formatted = `
<pre>{
    date : ${day}/${month}/${year}
    time : ${h}:${m}:${s}
}</pre>`;

  // Use innerHTML to inject the <pre> tag with its content
  document.getElementById("preBlock").innerHTML = formatted;
  document.title = `${h}:${m}`;
}

function fetchTimeOnce() {
  // Use the local system's date and time
  const localDate = new Date();

  // First display
  displayTime(localDate);

  // Update every second
  setInterval(() => {
    displayTime(new Date());
  }, 1000);
}

fetchTimeOnce();
