import { useEffect } from "react";
import { startTimer } from "../../../scripts/progectWorks/BirthdayTimer/startTimer"

import bamboo_32 from "./Images/bamboo_32.png";
import bamboo_1 from "./Images/bamboo_1.png";
import "./birthday_timer.css";



export default function BirthdayTimer({lang}) {
    useEffect(() => startTimer());


    
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
