import { useState, useEffect } from "react";
import { startEventTimer } from "../../../scripts/progectWorks/EventTimer/startEventTimer";

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
                        onClick={() => startEventTimer(setMessage)} name="GO"
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
                <h1>???????????? ???? ??????????</h1>
    
                <form className="date" method="get">
                    <label className="date_time" htmlFor="date_time">
                        <span>?????????????? ???????? ???? ?????? ??????</span>
                        <input id="date_time" type="datetime-local" required />
                    </label>
                </form>
                <div className="buttons">
                    <button 
                        id="reload" className="reload" 
                        type="reset" name="??????????????"
                        onClick={() => window.location.reload()} 
                    >??????????????</button>
                    <button 
                        id="getDateButton" className="getDateButton" 
                        onClick={() => startEventTimer(setMessage)} 
                        name="??????????"
                    >??????????</button>
                </div>
    
                {message ? <h3 className="error" id="error">?????????????? ???????? ???? ??????</h3> : null}
    
                <h2>???? ?????????? ????????????????????:</h2>
    
                <section className="timer">
                    <article className="string">
                        <div className="par">
                            <div className="circle">
                                <svg><circle className="meter one_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>????c????????</h6>
                                    <h5 id="mount_tim">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter two_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>????????</h6>
                                    <h5 id="day_tim">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="par p">
                            <div className="circle">
                                <svg><circle className="meter three_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>??????????</h6>
                                    <h5 id="hour_tim">00</h5>
                                </div>
                            </div>
    
                            <div className="circle">
                                <svg><circle className="meter four_bt_tim" cx="65" cy="65" r="63" /></svg>
                                <div className="text-in-circle">
                                    <h6>????????????</h6>
                                    <h5 id="minute_tim">00</h5>
                                </div>
                            </div>
                        </div>
    
                        <div className="one-bir">
                            <div className="circle" id="s">
                                <svg><circle id="five_5" className="meter five_bt_tim" cx="65" cy="65" r="62.8" /></svg>
                                <div className="text-in-circle">
                                    <h6>????????????</h6>
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
