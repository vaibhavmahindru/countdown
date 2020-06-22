var countDate = new Date("Jan 1, 2021 00:00:00").getTime();

function newYear() {
  var current = new Date().getTime();
  var gap = countDate - current;

  var days = Math.floor(gap / (1000 * 60 * 60 * 24));
  var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("day").innerText = days;
  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;
}

setInterval(function () {
  newYear();
}, 1000);
