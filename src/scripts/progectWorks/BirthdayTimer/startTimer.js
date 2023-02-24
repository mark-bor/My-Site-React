export function startTimer() {
    const birthday = new Date("November 12 2023 00:00:00").getTime();
    
    const func = setInterval(function () {
        try {
            var now = new Date().getTime();
            var distance = birthday - now;
        
            const time = {
                mounts: Math.floor(distance / 1000 / 60 / 60 / 24 / 31),
                days: Math.floor(distance / 1000 / 60 / 60 / 24) % 31,
                hours: Math.floor(distance / 1000 / 60 / 60) % 24,
                minutes: Math.floor(distance / 1000 / 60) % 60,
                seconds: Math.floor(distance / 1000) % 60,
                mili_seconds: Math.floor(distance) % (1000*60)
            }
            const elements = {
                mount: document.getElementById("mount"),
                day: document.getElementById("day"),
                hour: document.getElementById("hour"),
                minute: document.getElementById("minute"),
                second: document.getElementById("second")
            }
        
            document.querySelector(".one_bt").style.strokeDashoffset = 394 - ((394/12)*time.mounts);
            time.mounts<10 ? elements.mount.innerHTML=`0${time.mounts}` : elements.mount.innerHTML=time.mounts;
        
            document.querySelector(".two_bt").style.strokeDashoffset = 394 - ((394/31)*time.days);
            time.days<10 ? elements.day.innerHTML=`0${time.days}` : elements.day.innerHTML=time.days;
            
            document.querySelector(".three_bt").style.strokeDashoffset = 394 - ((394/24)*time.hours);
            time.hours<10 ? elements.hour.innerHTML=`0${time.hours}` : elements.hour.innerHTML=time.hours;
        
            document.querySelector(".four_bt").style.strokeDashoffset = 394 - ((394/60)*time.minutes);
            time.minutes<10 ? elements.minute.innerHTML=`0${time.minutes}` : elements.minute.innerHTML=time.minutes;
            
            document.querySelector(".five_bt").style.strokeDashoffset = 394 - ((394/(1000*60))*time.mili_seconds);
            time.seconds<10 ? elements.second.innerHTML=`0${time.seconds}` : elements.second.innerHTML=time.seconds;
        
        } catch (error) {
            clearInterval(func);
        }
    })
}