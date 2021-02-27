let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('date').innerHTML = date +'<br>'+ time;
}, 1000);



