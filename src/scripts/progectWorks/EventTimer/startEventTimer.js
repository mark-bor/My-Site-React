export function startEventTimer(set) {
    const date_time = document.getElementById('date_time');

    const timers = {
        mount: document.getElementById("mount_tim"),
        day: document.getElementById("day_tim"),
        hour: document.getElementById("hour_tim"),
        minute: document.getElementById("minute_tim"),
        second: document.getElementById("second_tim"),
    }

    if (!date_time.value) {
        timers.mount.innerHTML = '00';
        timers.day.innerHTML = '00';
        timers.hour.innerHTML = '00';
        timers.minute.innerHTML = '00';
        timers.second.innerHTML = '00';
        set(true);
        return;
    }

    set(false);
    localStorage.setItem('date_time', date_time.value);

    const birthday = new Date(`${localStorage.getItem('date_time')}`).getTime();

    const func = setInterval(function () {
        try {
            const now = new Date().getTime();
            const distance = birthday - now;
            const mounts = Math.floor(distance / 1000 / 60 / 60 / 24 / 31);
            const days = Math.floor(distance / 1000 / 60 / 60 / 24) % 31;
            const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(distance / 1000 / 60) % 60;
            const seconds = Math.floor(distance / 1000) % 60;
            const mili_seconds = Math.floor(distance) % (1000*60);
    
            document.querySelector(".one_bt_tim").style.strokeDashoffset = 394 - ((394/12)*mounts);
            mounts < 10 ? timers.mount.innerHTML = "0" + mounts : timers.mount.innerHTML = mounts;
            document.querySelector(".two_bt_tim").style.strokeDashoffset = 394 - ((394/31)*days);
            days < 10 ? timers.day.innerHTML = "0" + days : timers.day.innerHTML = days;
            document.querySelector(".three_bt_tim").style.strokeDashoffset = 394 - ((394/24)*hours);
            hours < 10 ? timers.hour.innerHTML = "0" + hours : timers.hour.innerHTML = hours;
            document.querySelector(".four_bt_tim").style.strokeDashoffset = 394 - ((394/60)*minutes);
            minutes < 10 ? timers.minute.innerHTML = "0" + minutes : timers.minute.innerHTML = minutes;
            document.querySelector(".five_bt_tim").style.strokeDashoffset = 394 - ((394/(1000*60))*mili_seconds);
            seconds < 10 ? timers.second.innerHTML = "0" + seconds : timers.second.innerHTML = seconds;
            
        } catch (error) {
            clearInterval(func);
        }
    })
}