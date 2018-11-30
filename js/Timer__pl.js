function formatAMPM() {
  var d = new Date(),
  seconds = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds(),
  minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
  hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
  months = ['Sty', 'Lut', 'Ma', 'Kwie', 'Maj', 'Czerw', 'Lip', 'Sie', 'Wrze', 'Paź', 'List', 'Gru'],
  days = ['Niedz', 'Pon', 'Wt', 'Śr','Czw', 'Pt', 'Sob'];
  document.getElementById("para1").innerHTML = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ':' + seconds;
  }
  setInterval(formatAMPM, 1000);
