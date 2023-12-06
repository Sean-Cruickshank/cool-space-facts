//checks the current time and sets the Earth image accordingly
const earthImage = document.querySelector('.js-earth-image');

function setEarthImage(today) {
    const todayTime = today.format('HH');
    let numSwitch = 0;
    if (todayTime > 6 && todayTime < 18) {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/earth-day.png" />';
    } else {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/earth-night.png" />';
    }
}


//gets current time, formats correctly, runs setEarthImage and updates every 15 seconds
clockRefresh();
setInterval(clockRefresh, 15000);

function clockRefresh() {
    const clockSet = dayjs();
    const clockFormat = clockSet.format('h:mmA');
    const clock = document.querySelector('.js-sidenav-clock');
    clock.innerHTML = clockFormat;
    setEarthImage(clockSet);
}