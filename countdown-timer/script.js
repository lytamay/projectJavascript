const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const mins = document.querySelector('#mins')
const seconds = document.querySelector('#seconds')

function calulator (){
    const timeFuture = new Date('1 jan 2022')
    const currentTime = new Date()
    //  đổi từ miliseconds sang seconds
    let distanceTime = (timeFuture - currentTime)/1000;
    const day = Math.floor(distanceTime / 3600 / 24);
    const hour = Math.floor(distanceTime / 3600) % 24;
    const min = Math.floor(distanceTime / 60) % 60;
    const second = Math.floor(distanceTime) % 60;
    
    days.innerHTML = formatTime(day)
    hours.innerHTML = formatTime(hour)
    mins.innerHTML = formatTime(min)
    seconds.innerHTML = formatTime(second)
}
function formatTime(time){
    return time<10  ? `0${time}`: time;
}

calulator();
setInterval(calulator,1000);


