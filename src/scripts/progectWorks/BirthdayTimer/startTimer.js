export function startTimer(setTime, setProgress) {
    const birthday = new Date("November 12 2023 00:00:00").getTime();
    
    const func = setInterval(function () {
        try {
            var now = new Date().getTime();
            var distance = birthday - now;
        
            const time = {
                months: Math.floor(distance / 1000 / 60 / 60 / 24 / 31),
                days: Math.floor(distance / 1000 / 60 / 60 / 24) % 31,
                hours: Math.floor(distance / 1000 / 60 / 60) % 24,
                minutes: Math.floor(distance / 1000 / 60) % 60,
                seconds: Math.floor(distance / 1000) % 60,
            };
            setProgress({
                months: 394 - ((394/12)*time.months),
                days: 394 - ((394/31)*time.days),
                hours: 394 - ((394/24)*time.hours),
                minutes: 394 - ((394/60)*time.minutes),
                seconds: 394 - ((394/60)*time.seconds)
            });
            setTime({...time});        
        
        } catch (error) {
            clearInterval(func);
        }
    })
}