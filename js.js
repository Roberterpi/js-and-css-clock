const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function setDate2() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60 ) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function SetDate3() {
    const now = new Date();
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12 ) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);
setDate2();
SetDate3();
