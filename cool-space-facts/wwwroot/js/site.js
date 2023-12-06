const today = dayjs();
const todayClock = today.format('h:mmA');
const todayTime = today.format('HH');
const earthImage = document.querySelector('.js-earth-image');
let numSwitch = 0;
if (todayTime > 6 && todayTime < 18) {
    earthImage.innerHTML = '<img id="nav-earth-image" src="/earth-day.png" />';
} else {
    earthImage.innerHTML = '<img id="nav-earth-image" src="/earth-night.png" />';
}

const clock = document.querySelector('.js-sidenav-time');
clock.innerHTML = todayClock;