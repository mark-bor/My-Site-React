export function startEventTimer(setMessage, setTime, setProgress, date) {
    if (!date) return setMessage(true);

    setMessage(false);

    const event = new Date(date).getTime();

    const func = setInterval(function () {
        try {
            const now = new Date().getTime();
            const distance = event - now;
            
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