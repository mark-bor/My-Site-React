import { useState, useEffect } from "react";
import { getExchange } from "../../../scripts/progectWorks/ExchangeRate/loading";
import { getValues } from "../../../scripts/progectWorks/ExchangeRate/validation";

import "./exchange_rate.css";



let fromFirsToSecond = {};
let fromSecondToFirst = {};

export default function ExchangeRate({lang}) {
    const [exchange, setExchange] = useState({});

    useEffect(() => {
        setExchange({...getExchange()});
    }, [setExchange]);
    
    useEffect(() => {
        fromFirsToSecond = {
            inp1: exchange.inputFirst, 
            inp2: exchange.inputSecond,
            mass: exchange.massege, 
            rate1: exchange.rateFirst?.value, 
            rate2: exchange.rateSecond?.value
        };
        fromSecondToFirst = {
            inp1: exchange.inputSecond,
            inp2: exchange.inputFirst, 
            mass: exchange.massege, 
            rate1: exchange.rateSecond?.value,
            rate2: exchange.rateFirst?.value
        };
    }, [exchange]);



    if (lang==='EN') {
        return (
            <section className="div exc-rat" id="exchange-rate">
                {/* __________ TITLE _____________________ */}
                <h1>Exchange Rate</h1>
                {/* __________ BODY _____________________ */}
                <form>
                    <div id="radios_items" className="radios_items">
                        <input 
                            id="radio1" className="radio_in_exchange" type="radio" 
                            name="Cledara Currency Exchange" value="radio1"
                            title="Cledara Currency Exchange" defaultChecked 
                            onClick={() => {
                                [exchange.radio2, exchange.radio3].forEach(elem => elem.checked = false);
                                getValues(fromFirsToSecond);
                            }} />
                        
                        <input 
                            id="radio2" className="radio_in_exchange" type="radio" 
                            name="Currency Exchange" value="radio2" title="Currency Exchange" 
                            onClick={() => {
                                [exchange.radio1, exchange.radio3].forEach((elem) => elem.checked = false);
                                getValues(fromFirsToSecond);
                            }} />
    
                        <input 
                            id="radio3" className="radio_in_exchange" type="radio" 
                            name="Currency Converter by API-Ninjas" value="radio3"
                            title="Currency Converter by API-Ninjas" 
                            onClick={() => {
                                [exchange.radio1, exchange.radio2].forEach((elem) => elem.checked = false);
                                getValues(fromFirsToSecond);
                            }} />
                    </div>
    
                    <div className="second_block">
                        <select 
                            className="rates_one"
                            onInput={() => getValues(fromFirsToSecond)}
                            >
                            <option value="USD">&#36; USD</option>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            id="input_first_block" className="input_first_block" 
                            type="text" name="amount1" placeholder="&#128184;" 
                            onInput={() => getValues(fromFirsToSecond)}
                        />
                    </div>
    
                    <p className="massege" id="massege"></p>
                    
                    <div className="second_block">
                        <select 
                            className="rates_two" 
                            onInput={() => getValues(fromFirsToSecond)}>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="USD">&#36; USD</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            id="input_second_block" className="input_second_block" 
                            type="text" name="amount2" placeholder="&#128184;" 
                            onInput={() => getValues(fromSecondToFirst)}
                        />
                    </div>
                </form>
            </section>
        );
    }

    if (lang==='UA') {
        return (
            <section className="div exc-rat" id="exchange-rate">
                {/* __________ TITLE _____________________ */}
                <h1>Курс валют</h1>
                {/* __________ BODY _____________________ */}
                <form>
                    <div id="radios_items" className="radios_items">
                        <input 
                            id="radio1" className="radio_in_exchange" 
                            type="radio" name="Курс валют від Cledara" value="radio1"
                            title="Курс валют від Cledara" defaultChecked 
                            onClick={(el) => {
                                [exchange.radio2, exchange.radio3].forEach(elem => elem.checked = false);
                                getValues(fromFirsToSecond);
                            }}
                        />
                        
                        <input 
                            id="radio2" className="radio_in_exchange" 
                            type="radio" name="Курс валют" value="radio2"
                            title="Курс валют" 
                            onClick={(el) => {
                                [exchange.radio1, exchange.radio3].forEach((elem) => elem.checked = false);
                                getValues(fromFirsToSecond);
                            }}
                        />
    
                        <input 
                            id="radio3" className="radio_in_exchange" type="radio" 
                            name="Конвертатор валют від API-Ninjas" value="radio3"
                            title="Конвертатор валют від API-Ninjas" 
                            onClick={(el) => {
                                [exchange.radio1, exchange.radio2].forEach((elem) => elem.checked = false);
                                getValues(fromFirsToSecond);
                            }}
                        />
                    </div>
    
                    <div className="second_block">
                        <select 
                            className="rates_one"
                            onInput={() => getValues(fromFirsToSecond)}
                            >
                            <option value="USD">&#36; USD</option>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            className="input_first_block" type="text" 
                            name="перша сума" placeholder="&#128184;" 
                            onInput={() => getValues(fromFirsToSecond)} 
                            />
                    </div>
    
                    <p className="massege" id="massege"></p>
                    
                    <div className="second_block">
                        <select 
                            className="rates_two" 
                            onInput={() => getValues(fromFirsToSecond)}
                            >
                            <option value="UAH">&#8372; UAH</option>
                            <option value="USD">&#36; USD</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            className="input_second_block" type="text" 
                            name="друга сума" placeholder="&#128184;" 
                            onInput={() => getValues(fromSecondToFirst)} 
                            />
                    </div>
                </form>
            </section>
        );
    }
}
