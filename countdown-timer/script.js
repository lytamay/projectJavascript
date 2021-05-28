const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond = (newYearDate - currentDate);
    const distanceDay = Math.floor(totalSecond/(3600000*24));
    const distanceHour = Math.floor((totalSecond%(3600000*24))/3600000)
    const distanceMin = Math.floor(((totalSecond%(3600000*24))%3600000)/60000)
    const distanceSecond = Math.floor((((totalSecond%(3600000*24))%3600000)%60000)/1000)
    
    daysEl.innerHTML = formatTime(distanceDay);
    hoursEl.innerHTML = formatTime(distanceHour);
    minsEl.innerHTML = formatTime(distanceMin);
    secondsEl.innerHTML = formatTime( distanceSecond);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//countdown();

setInterval(countdown, 1000);