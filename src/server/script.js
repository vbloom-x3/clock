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

    async function fetchTimeOnce() {
      const start = performance.now();
      try {
        const response = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata");
        const data = await response.json();
        const end = performance.now();
        const ping = Math.round(end - start);

        const year = data.year;
        const month = data.month;
        const day = data.day;
        const hour = data.hour;
        const minute = data.minute;
        const seconds = data.seconds;

        serverDate = new Date(year, month - 1, day, hour, minute, seconds);

        document.getElementById("ping").textContent = `ping: ${ping} ms`;

        // First display
        displayTime(serverDate);

        // Update every second
        setInterval(() => {
          serverDate.setSeconds(serverDate.getSeconds() + 1);
          displayTime(serverDate);
        }, 1000);
      } catch (error) {
        document.getElementById("preBlock").textContent = "{\n    date : error\n    time : error\n}";
        document.getElementById("accuracy").textContent = `ping: --- ms`;
        console.error("error: 0xFA", error);
      }
    }

    fetchTimeOnce();
