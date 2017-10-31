
const setDate = function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${360 * (seconds/100) + 90}deg)`;

  const minuteHand = document.querySelector('.minute-hand');
  minuteHand.style.transform = `rotate(${360 * (minutes/100) + 90}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${360 * (hours/100) }deg)`;
};

setInterval(setDate, 1000);
