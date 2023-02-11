import { useState, useEffect } from "react";

import "./event_timer.css";

export default function EventTimer({lang}) {
    const [message, setMessage] = useState(false);
    useEffect(() => {}, [setMessage]);

    if (lang==='EN') {
        return (
            <section className="div tim" id="timer">
                {/* __________ BODY _____________________ */}
                <h1>Event Timer</h1>
    
                <form className="date" method="get">
                    <label className="date_time" htmlFor="date_time">
                        <span>Input date and time here</span>
                        <input id="date_time" type="datetime-local" required />
                    </label>
                </form>
                <div className="buttons">
                    <button 
                        id="reload" className="reload" 
                        type="reset" name="reload"
                        onClick={() => window.location.reload()} 
                    >Reset</button>
                    <button 
                        id="getDateButton" className="getDateButton" 
                        onClick={() => eventTimer(setMessage)} name="GO"
                    >GO</button>
                </div>
    
                {message ? <h3 className="error" id="error">Input date and time</h3> : null}
    
                <h2>To event:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <div className="circle">
                                <svg><circle className="meter one_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>mounts</h6>
                                    <h5 id="mount_tim">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter two_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>days</h6>
                                    <h5 id="day_tim">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="par p">
                            <div className="circle">
                                <svg><circle className="meter three_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>hours</h6>
                                    <h5 id="hour_tim">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter four_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>minutes</h6>
                                    <h5 id="minute_tim">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="one-bir">
                            <div className="circle" id="s">
                                <svg><circle id="five_5" className="meter five_bt_tim" cx="65" cy="65" r="62.8" /></svg>
                                <div className="text-in-circle">
                                    <h6>seconds</h6>
                                    <h5 id="second_tim">00</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        );
    }

    if (lang==='UA') {
        return (
            <section className="div tim" id="timer">
                {/* __________ BODY _____________________ */}
                <h1>Таймер до події</h1>
    
                <form className="date" method="get">
                    <label className="date_time" htmlFor="date_time">
                        <span>Введіть дату та час тут</span>
                        <input id="date_time" type="datetime-local" required />
                    </label>
                </form>
                <div className="buttons">
                    <button 
                        id="reload" className="reload" 
                        type="reset" name="скинути"
                        onClick={() => window.location.reload()} 
                    >Скинути</button>
                    <button 
                        id="getDateButton" className="getDateButton" 
                        onClick={() => eventTimer(setMessage)} 
                        name="старт"
                    >Старт</button>
                </div>
    
                {message ? <h3 className="error" id="error">Введіть дату та час</h3> : null}
    
                <h2>До події залишилось:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <div className="circle">
                                <svg><circle className="meter one_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>міcяців</h6>
                                    <h5 id="mount_tim">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter two_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>дней</h6>
                                    <h5 id="day_tim">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="par p">
                            <div className="circle">
                                <svg><circle className="meter three_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>годин</h6>
                                    <h5 id="hour_tim">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter four_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>хвилин</h6>
                                    <h5 id="minute_tim">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="one-bir">
                            <div className="circle" id="s">
                                <svg><circle id="five_5" className="meter five_bt_tim" cx="65" cy="65" r="62.8" /></svg>
                                <div className="text-in-circle">
                                    <h6>секунд</h6>
                                    <h5 id="second_tim">00</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        );
    }
}

function eventTimer(set) {
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
