import { useState, useEffect } from "react";
import { TimerCircle } from "../../../components/index"
import { startEventTimer } from "../../../scripts/progectWorks/EventTimer/startEventTimer";

import "./styles.css";



export default function EventTimer({lang}) {
    const [time, setTime] = useState({months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
    const [progress, setProgress] = useState({months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
    const [date, setDate] = useState('');
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
                        <input id="date_time" type="datetime-local" required onChange={(elem) => setDate(elem.target.value)} />
                    </label>
                </form>
                <div className="buttons">
                    <button 
                        id="reload" className="reload" 
                        type="reset" name="reload"
                        onClick={() => window.location.reload()} 
                    >Reset</button>
                    <button 
                        id="getDateButton" className="getDateButton" name="go"
                        onClick={() => startEventTimer(setMessage, setTime, setProgress, date)}
                    >GO</button>
                </div>
    
                {message ? <h3 className="error" id="error">Input date and time</h3> : null}
    
                <h2>To event:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <TimerCircle name='mounts' progress={progress.months} numeric={time.months} />
                            <TimerCircle name='days' progress={progress.days} numeric={time.days} />
                        </div>
    
                        <div className="par p">
                            <TimerCircle name='hours' progress={progress.hours} numeric={time.hours} />    
                            <TimerCircle name='minutes' progress={progress.minutes} numeric={time.minutes} />
                        </div>
    
                        <div className="one-bir">
                            <TimerCircle name='seconds' progress={progress.seconds} numeric={time.seconds} /> 
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
                        onClick={() => startEventTimer(setMessage)} 
                        name="старт"
                    >Старт</button>
                </div>
    
                {message ? <h3 className="error" id="error">Введіть дату та час</h3> : null}
    
                <h2>До події залишилось:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <TimerCircle name='міcяців' progress={progress.months} numeric={time.months} />
                            <TimerCircle name='дней' progress={progress.days} numeric={time.days} /> 
                        </div>
    
                        <div className="par p">
                            <TimerCircle name='годин' progress={progress.hours} numeric={time.hours} />    
                            <TimerCircle name='хвилин' progress={progress.minutes} numeric={time.minutes} />
                        </div>
    
                        <div className="one-bir">
                            <TimerCircle name='секунд' progress={progress.seconds} numeric={time.seconds} />
                        </div>
                    </article>
                </section>
            </section>
        );
    }
}
