let serverDate;
function displayTime(currentDate) {
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const h = String(currentDate.getHours()).padStart(2, "0");
  const m = String(currentDate.getMinutes()).padStart(2, "0");
  const s = String(currentDate.getSeconds()).padStart(2, "0");
  let dateToggle = true;
  if (dateToggle) {
    let formatted = `{
    date : ${day}/${month}/${year}
    time : ${h}:${m}:${s}
}`;
    document.getElementById("preBlock").textContent = formatted;
    document.title = `${h}:${m}:${s}`;
  }
  else {
    let formatted= `{
    time : ${h}:${m}:${s}
}`
    document.getElementById("preBlock").textContent = formatted;
    document.title = `${h}:${m}:${s}`;
  }

}
document.getElementById("preBlock").addEventListener("click", (event) => {
  event.preventDefault();
  showDate = !showDate;
  displayTime(new Date());
});
function fetchTimeOnce() {
  const localDate = new Date();
  displayTime(localDate);
  setInterval(() => {
    displayTime(new Date());
  }, 1000);
}

fetchTimeOnce();
