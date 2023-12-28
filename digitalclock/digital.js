function dispaytime() {
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();
  let ampm = document.getElementById("am-pm");

  if (hh >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  if (hh > 12) {
    hour = hour - 12;
  }

  document.getElementById("sec").innerHTML = ss;
  document.getElementById("min").innerHTML = mm;
  document.getElementById("hour").innerHTML = hh;
}

setInterval(dispaytime, 10);
