import './styles.css';

const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
    constructor({ targetDate }) {
        this.targetDate = targetDate;
        this.create();
    }

    create() {
        this.changeTime();
        setInterval(() => {
            this.changeTime();
        }, 1000);
    }

    changeTime() {
        const currentTime = Date.now();
        const remTime = this.targetDate - currentTime;
        this.getTime(remTime );
    }

    getTime(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.padStr(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
        const mins = this.padStr(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.padStr(Math.floor((time % (1000 * 60)) / 1000));
        this.updateClock(days, hours, mins, secs);
    }

    padStr(value) {
        return String(value).padStart(2, '0');
    }

    updateClock(days, hours, mins, secs) {
        const time = `${days}${hours}${mins}${secs}`;
        console.log(time);
        daysRef.textContent = `${days}`;
        hoursRef.textContent = `${hours}`;
        minsRef.textContent = `${mins}`;
        secsRef.textContent = `${secs}`;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date("May 30, 2021"),
});