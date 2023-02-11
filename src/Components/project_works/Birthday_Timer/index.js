import { useEffect } from "react";

import bamboo_32 from "./Images/bamboo_32.png";
import bamboo_1 from "./Images/bamboo_1.png";

import "./birthday_timer.css";

export default function BirthdayTimer({lang}) {
    useEffect(() => setTimer());

    if (lang==='EN') {
        return (
            <section className="div bir-tim" id="birthday-timer">
                {/* __________- BODY _____________________ */}
                <img id="img" src={bamboo_32} alt="bamboo" />
                <img id="img-2" src={bamboo_1} alt="bamboo" />
    
                <h1>Birthday Timer</h1>
    
                <h2>To my birthday:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <div className="circle">
                                <svg><circle className="meter one_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>mounts</h6>
                                    <h5 id="mount">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter two_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>days</h6>
                                    <h5 id="day">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="par p">
                            <div className="circle">
                                <svg><circle className="meter three_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>hours</h6>
                                    <h5 id="hour">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter four_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>minutes</h6>
                                    <h5 id="minute">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="one-bir">
                            <div className="circle" id="s">
                                <svg><circle id="five_5" className="meter five_bt" cx="65" cy="65" r="62.8" /></svg>
                                <div className="text-in-circle">
                                    <h6>seconds</h6>
                                    <h5 id="second">00</h5>
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
            <section className="div bir-tim" id="birthday-timer">
                {/* __________- BODY _____________________ */}
                <img id="img" src={bamboo_32} alt="бамбук" />
                <img id="img-2" src={bamboo_1} alt="бамбук" />
    
                <h1>Таймер до Дня Народження</h1>
    
                <h2>До ДР залишилось:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <div className="circle">
                                <svg><circle className="meter one_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>міcяців</h6>
                                    <h5 id="mount">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter two_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>дней</h6>
                                    <h5 id="day">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="par p">
                            <div className="circle">
                                <svg><circle className="meter three_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>годин</h6>
                                    <h5 id="hour">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter four_bt" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>хвилин</h6>
                                    <h5 id="minute">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="one-bir">
                            <div className="circle" id="s">
                                <svg><circle id="five_5" className="meter five_bt" cx="65" cy="65" r="62.8" /></svg>
                                <div className="text-in-circle">
                                    <h6>секунд</h6>
                                    <h5 id="second">00</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        );
    }
}

function setTimer() {
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