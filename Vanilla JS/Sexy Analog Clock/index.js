let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hR = 30*hh+mm/2;
    let mR = 6*mm;
    let sR = 6*ss;

    hr.style.transform = `rotate(${hR}deg)`;

    min.style.transform = `rotate(${mR}deg)`;

    sec.style.transform = `rotate(${sR}deg)`;
}

setInterval(displayTime,100);

let date0 = document.getElementById('date-0');
let date1 = document.getElementById('date-1');
let daySpan = document.getElementById('day');

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function setDayDate() {
    let date = new Date();
    let dt = date.getDate();
    let paddedDate = dt.toString().padStart(2, '0');

    date0.innerText = paddedDate[0];
    date1.innerText = paddedDate[1];

    let day = date.getDay();
    daySpan.innerText = weekDays[day];
}

setDayDate();

setInterval(setDayDate, 60000);