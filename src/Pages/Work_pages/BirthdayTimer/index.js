import { useState, useEffect, useContext } from "react";
import { TimerCircle } from "../../../components/index"
import { 
	OptionContext,
	startTimer
} from "../../../scripts/index";

import "./styles.css";



export default function BirthdayTimer() {
    const {options} = useContext(OptionContext);
    const [time, setTime] = useState({months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
    const [progress, setProgress] = useState({months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => startTimer(setTime, setProgress));

    
    if (options.language==='EN') {
        return (
            <section className="div bir-tim" id="birthday-timer">
                {/* __________- BODY _____________________ */}    
                <h1>Birthday Timer</h1>
    
                <h2>To my birthday:</h2>
    
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

    if (options.language==='UA') {
        return (
            <section className="div bir-tim" id="birthday-timer">
                {/* __________- BODY _____________________ */}    
                <h1>Таймер до Дня Народження</h1>
    
                <h2>До ДР залишилось:</h2>
    
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
