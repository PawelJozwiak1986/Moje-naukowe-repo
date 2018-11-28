function formatAMPM() {
    var d = new Date(),
    seconds = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds(),
    minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    document.getElementById("para1").innerHTML = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ':' + seconds;
    }
    setInterval(formatAMPM, 1000);
