import flatpickr from 'flatpickr';
import Notiflix, { Report } from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const spanDay = document.querySelector('[data-days]');
const spanHour = document.querySelector('[data-hours]');
const spanMin = document.querySelector('[data-minutes]');
const spanSec = document.querySelector('[data-seconds]');

let selectdDate = null;

btnStart.addEventListener('click', handleClickBtnStart);
function handleClickBtnStart() {
  options.start();
}

const options = {
  interval: null,
  isActive: false,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Report.info('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      btnStart.disabled = true;
      return;
    }
    selectdDate = selectedDates[0];
    btnStart.disabled = false;
    console.log(selectdDate);
  },
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    let delta = 0;
    this.interval = setInterval(() => {
      delta = selectdDate - Date.now();
      if (delta < 0) {
        clearInterval(this.interval);
        return;
      }
      const time = this.convertMs(delta);
      ubdateClockFace(time);
    }, 1000);
  },
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.pad(Math.floor(ms / day));
    // Remaining hours
    const hours = this.pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.pad(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },
  pad(value) {
    return String(value).padStart(2, '0');
  },
};
function ubdateClockFace({ days, hours, minutes, seconds }) {
  spanDay.textContent = `${days}`;
  spanHour.textContent = `${hours}`;
  spanMin.textContent = `${minutes}`;
  spanSec.textContent = `${seconds}`;
}

flatpickr(inputEl, options);
