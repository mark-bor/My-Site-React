import "./exchange_rate.css";

var myHeaders = new Headers();
myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

let url, head;
let exchRate = {};

export default function ExchangeRate({lang}) {
    if (lang==='EN') {
        return (
            <section className="div exc-rat" id="exchange-rate">
                {/* __________ TITLE _____________________ */}
                <h1>Exchange Rate</h1>
                {/* __________ BODY _____________________ */}
                <form>
                    <div id="radios_items" className="radios_items">
                        <input id="radio1" className="radio_in_exchange" type="radio" 
                            name="Cledara Currency Exchange" value="radio1"
                            title="Cledara Currency Exchange" defaultChecked 
                            onClick={(el) => {
                                [
                                    document.getElementById('radio2'),
                                    document.getElementById('radio3')
                                ].forEach(elem => elem.checked = false);
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }} />
                        
                        <input id="radio2" className="radio_in_exchange" type="radio" 
                            name="Currency Exchange" value="radio2"
                            title="Currency Exchange" 
                            onClick={(el) => {
                                [
                                    document.getElementById('radio1'), 
                                    document.getElementById('radio3')
                                ].forEach((elem) => elem.checked = false);
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }} />
    
                        <input id="radio3" className="radio_in_exchange" type="radio" 
                            name="Currency Converter by API-Ninjas" value="radio3"
                            title="Currency Converter by API-Ninjas" 
                            onClick={(el) => {
                                [
                                    document.getElementById('radio1'), 
                                    document.getElementById('radio2')
                                ].forEach((elem) => elem.checked = false);
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }} />
                    </div>
    
                    <div className="second_block">
                        <select 
                            className="rates_one"
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                )}
                            }>
                            <option value="USD">&#36; USD</option>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            id="input_first_block"
                            className="input_first_block" 
                            type="text" 
                            name="amount1" 
                            placeholder="&#128184;" 
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }}
                        />
                    </div>
    
                    <p className="massege" id="massege"></p>
                    
                    <div className="second_block">
                        <select 
                            className="rates_two" 
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                )
                            }}>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="USD">&#36; USD</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            id="input_second_block"
                            className="input_second_block" 
                            type="text" 
                            name="amount2" 
                            placeholder="&#128184;" 
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_second, exchange.input_first, 
                                    exchange.massege, 
                                    exchange.rate_two.value, exchange.rate_one.value
                                );
                            }}
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
                        <input id="radio1" className="radio_in_exchange" type="radio" 
                            name="Курс валют від Cledara" value="radio1"
                            title="Курс валют від Cledara" defaultChecked 
                            onClick={(el) => {
                                const exchange = loader();
                                [exchange.radio2, exchange.radio3].forEach(elem => elem.checked = false);
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }}
                        />
                        
                        <input id="radio2" className="radio_in_exchange" type="radio" 
                            name="Курс валют" value="radio2"
                            title="Курс валют" 
                            onClick={(el) => {
                                const exchange = loader();
                                [exchange.radio1, exchange.radio3].forEach((elem) => elem.checked = false);
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }}
                        />
    
                        <input id="radio3" className="radio_in_exchange" type="radio" 
                            name="Конвертатор валют від API-Ninjas" value="radio3"
                            title="Конвертатор валют від API-Ninjas" 
                            onClick={(el) => {
                                const exchange = loader();
                                [exchange.radio1, exchange.radio2].forEach((elem) => elem.checked = false);
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                );
                            }}
                        />
                    </div>
    
                    <div className="second_block">
                        <select 
                            className="rates_one"
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                )
                            }}>
                            <option value="USD">&#36; USD</option>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            className="input_first_block" 
                            type="text" 
                            name="перша сума" 
                            placeholder="&#128184;" 
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                )
                            }} />
                    </div>
    
                    <p className="massege" id="massege"></p>
                    
                    <div className="second_block">
                        <select 
                            className="rates_two" 
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_first, exchange.input_second, 
                                    exchange.massege, 
                                    exchange.rate_one.value, exchange.rate_two.value
                                )
                            }}>
                            <option value="UAH">&#8372; UAH</option>
                            <option value="USD">&#36; USD</option>
                            <option value="EUR">&#8364; EUR</option>
                            <option value="GBP">&#163; GBP</option>
                            <option value="CNY">&#165; CNY</option>
                            <option value="PLN">z&#x142; PLN</option>
                            <option value="BYN">Br BYN</option>
                        </select>
                        <input 
                            className="input_second_block" 
                            type="text" 
                            name="друга сума" 
                            placeholder="&#128184;" 
                            onInput={() => {
                                const exchange = loader();
                                getValues(
                                    exchange.input_second, exchange.input_first, 
                                    exchange.massege, 
                                    exchange.rate_two.value, exchange.rate_one.value
                                )
                            }} />
                    </div>
                </form>
            </section>
        );
    }
}

export function loader() {
    exchRate = {
        radio1: document.getElementById('radio1'),
        radio2: document.getElementById('radio2'),
        radio3: document.getElementById('radio3'),
        input_first: document.querySelector(".input_first_block"),
        input_second: document.querySelector(".input_second_block"),
        rate_one: document.querySelector(".rates_one"),
        rate_two: document.querySelector(".rates_two"),
        massege: document.getElementById('massege')
    }
    return {...exchRate};
}

function getValues(inp1, inp2, mass, rate1, rate2) {
    inp2.value = "";
    let val = inp1.value;
    
    if (!val) {
        inp2.setAttribute("placeholder", '💸'); 
        inp2.value = '';
        // exchRate.input_second.value = '';

    } else if (val === 0) {
        mass.style.display = "none";
        inp2.setAttribute("placeholder", '💸');
        inp2.value = '';
        // mass.innerHTML = "Введіть число<br>Input numeric";
        
    } else if (!(val * 1)) {            
        let item = val.split('');
        
        if (item.includes('k') === true) {
            item.pop();
            let num = `${item.join('')}000`;
            checkRadioButtons(rate1, rate2, num, inp2);
            
        } else {
            mass.style.display = "block";
            mass.innerHTML = "Введіть число<br>Input numeric";
            inp2.setAttribute("placeholder", '💸'); 
            // mass.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";
        }
    } else {
        mass.style.display = "none";
        checkRadioButtons(rate1, rate2, val, inp2);
    }
}

function checkRadioButtons(have, want, amount, place) {
    if (exchRate.radio1.checked===true) {
        url = `https://api.apilayer.com/exchangerates_data/convert?to=${want}&from=${have}&amount=${amount}`;
        head = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        
        doRequest(place);
        
    } else if (exchRate.radio2.checked===true) {
        url = `https://currency-exchange.p.rapidapi.com/exchange?from=${have}&to=${want}&q=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        
        doRequest(place);
        
    } else if (exchRate.radio3.checked===true) {
        url = `https://urrency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        doRequest(place);
    }
}

function doRequest(place) {
    fetch(url, head) 
    .then(response => response.json())
    .then(result => {
        if (exchRate.radio1.checked===true) {
            place.value = result.result.toFixed(2);
        } else if (exchRate.radio2.checked===true) {
            place.value = result.toFixed(2);
        } else if (exchRate.radio3.checked===true) {
            place.value = result.new_amount.toFixed(2);
        }
    })
    .catch(error => {
        // console.log('ERROR ==>', error);

        // // const language = document.querySelector(".form_in_head");
        // const windowError = document.getElementById('error_background');
        // const messageError = document.getElementById('message_error');
        // // const errorCode = document.getElementById('error_code');

        // exchRate.input_first.value = '';
        // exchRate.input_second.value = '';
        // windowError.style.display = 'flex';
        // if (language.value==="UA") {
        //     messageError.innerHTML = 'Щось трапилось, <br>спробуйте інший сервіс із 3 запропонованих';
        // } else if (language.value==="EN") {
        //     messageError.innerHTML = 'Something happened, <br>try another service among the 3 offered';
        // } else if (language.value==="PL") {
        //     messageError.innerHTML = 'Coś się stało, <br>wypróbuj inną usługę z 3 oferowanych';
        // }
        // // errorCode.innerText = error;
        
        // document.getElementById('close_error').addEventListener('click', () => {
        //     // errorCode.innerText = '';
        //     messageError.innerText = '';
        //     windowError.style.display = 'none';
        // });
    });
}
