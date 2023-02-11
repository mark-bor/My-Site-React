import "./password_generator.css";

export default function PasswordGenerator({lang}) {
    if (lang==='EN') {
        return (
            <section className="div pas-gen" id="password-generator">
                {/* __________ BODY _____________________ */}
                <h1>Password Generator</h1>
    
                <div className="functional">
                    <div className="left">
                            
                        <form className="parametrs">
    
                            <h3 className="param">Generator's parametrs</h3>
                            
                            <ul className="param-one">
                                <li className="check">
                                    <input id="number" type="checkbox" name="number" value="number" defaultChecked />
                                    <label htmlFor="number">Numerics 0-9</label>
                                </li>
                                <li className="check">
                                    <input id="small" type="checkbox" name="small" value="small" defaultChecked />
                                    <label htmlFor="small">Small liters a-z</label>
                                </li>
                                <li className="check">
                                    <input id="big" type="checkbox" name="big" value="big" defaultChecked />
                                    <label htmlFor="big">Big liters A-Z</label>
                                </li>
                                <li className="check">
                                    <input id="sumbol" type="checkbox" name="sumbol" value="sumbol" />
                                    <label htmlFor="sumbol">Special characters</label>
                                </li>
                                <li className="check">
                                    <input id="remuv" type="checkbox" name="remuv" value="remuv" />
                                    <label htmlFor="remuv">Avoid repeating characters</label>
                                </li>
                            </ul>
    
                            <section className="param-two">
                                <div className="num">
                                    <label htmlFor="dov">Length</label>
                                    <select className="dov" id="dov">
                                        <option id="dov_4" value="4">4</option>
                                        <option id="dov_5" value="5">5</option>
                                        <option id="dov_6" value="6">6</option>
                                        <option id="dov_7" value="7">7</option>
                                        <option id="dov_8" value="8">8</option>
                                        <option id="dov_9" value="9">9</option>
                                        <option id="dov_10" value="10">10</option>
                                        <option id="dov_12" value="12">12</option>
                                        <option id="dov_14" value="14">14</option>
                                    </select>
                                </div>
                                <div className="num">
                                    <label htmlFor="kil">Quantity</label>
                                    <select className="kil" id="kil">
                                        <option id="kil_3" value="3">3</option>
                                        <option id="kil_6" value="6">6</option>
                                        <option id="kil_9" value="9">9</option>
                                    </select>
                                </div>
                            </section>
                        </form>
                        {/* __________ BUTTON _____________________ */}
                        <button className="butto" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Generate</button>
    
                    </div>
                    <div className="right">
                        {/* __________ PASSWORDS _____________________ */}
                        <article className="result">
                            <h3 className="pass">Passwords</h3>
                            <ul>
                                <li className="pswd" id="1_pass"></li>
                                <li className="pswd" id="2_pass"></li>
                                <li className="pswd" id="3_pass"></li>
                                <li className="pswd" id="4_pass"></li>
                                <li className="pswd" id="5_pass"></li>
                                <li className="pswd" id="6_pass"></li>
                                <li className="pswd" id="7_pass"></li>
                                <li className="pswd" id="8_pass"></li>
                                <li className="pswd" id="9_pass"></li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        );
    }

    if (lang==='UA') {
        return (
            <section className="div pas-gen" id="password-generator">
                {/* __________ BODY _____________________ */}
                <h1>Генератор паролей</h1>
    
                <div className="functional">
                    <div className="left">
                            
                        <form className="parametrs">
    
                            <h3 className="param">Параметри генератора</h3>
                            
                            <ul className="param-one">
                                <li className="check">
                                    <input id="number" type="checkbox" name="цифри" value="number" defaultChecked />
                                    <label htmlFor="number">Цифри 0-9</label>
                                </li>
                                <li className="check">
                                    <input id="small" type="checkbox" name="маленькі буквималенькі букви" value="small" defaultChecked />
                                    <label htmlFor="small">Маленькі букви a-z</label>
                                </li>
                                <li className="check">
                                    <input id="big" type="checkbox" name="великі букви" value="big" defaultChecked />
                                    <label htmlFor="big">Великі букви A-Z</label>
                                </li>
                                <li className="check">
                                    <input id="sumbol" type="checkbox" name="символи" value="sumbol" />
                                    <label htmlFor="sumbol">Спец. символи</label>
                                </li>
                                <li className="check">
                                    <input id="remuv" type="checkbox" name="уникати повторень символів" value="remuv" />
                                    <label htmlFor="remuv">Уникати повторень символів</label>
                                </li>
                            </ul>
    
                            <section className="param-two">
                                <div className="num">
                                    <label htmlFor="dov">Довжина</label>
                                    <select className="dov" id="dov">
                                        <option id="dov_4" value="4">4</option>
                                        <option id="dov_5" value="5">5</option>
                                        <option id="dov_6" value="6">6</option>
                                        <option id="dov_7" value="7">7</option>
                                        <option id="dov_8" value="8">8</option>
                                        <option id="dov_9" value="9">9</option>
                                        <option id="dov_10" value="10">10</option>
                                        <option id="dov_12" value="12">12</option>
                                        <option id="dov_14" value="14">14</option>
                                    </select>
                                </div>
                                <div className="num">
                                    <label htmlFor="kil">Кількість</label>
                                    <select className="kil" id="kil">
                                        <option id="kil_3" value="3">3</option>
                                        <option id="kil_6" value="6">6</option>
                                        <option id="kil_9" value="9">9</option>
                                    </select>
                                </div>
                            </section>
                        </form>
                        {/* __________ BUTTON _____________________ */}
                        <button className="butto" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Генерувати</button>
    
                    </div>
                    <div className="right">
                        {/* __________ PASSWORDS _____________________ */}
                        <article className="result">
                            <h3 className="pass">Паролі</h3>
                            <ul>
                                <li className="pswd" id="1_pass"></li>
                                <li className="pswd" id="2_pass"></li>
                                <li className="pswd" id="3_pass"></li>
                                <li className="pswd" id="4_pass"></li>
                                <li className="pswd" id="5_pass"></li>
                                <li className="pswd" id="6_pass"></li>
                                <li className="pswd" id="7_pass"></li>
                                <li className="pswd" id="8_pass"></li>
                                <li className="pswd" id="9_pass"></li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}

function onMouseDown(btn) {
    btn.target.style.opacity = 0.7;
    document.querySelectorAll('.pswd').forEach(pswd => pswd.innerHTML = '');
}
function onMouseUp(btn) {
    btn.target.style.opacity = 1;
    
    // Генерація, виводить результат в інтерфейс
    for (let j=1; j<=document.querySelector('.kil').value; j++) {
        for (let i=1; i<=document.querySelector('.dov').value; i++){
            const numPass = document.getElementById(`${j}_pass`);
            numPass.insertAdjacentHTML( "afterBegin", CheckedRemuv(numPass, arrays));
        }
    }
}

// перевірка повторювання символів та додавання символу у список паролів
function CheckedRemuv(place, arr) {
    if (document.getElementById('remuv').checked){
        let item = Colaps(arr);
        if (place.innerHTML.split('').includes(item)){
            return CheckedRemuv(place, arr);
        }
        return item;
    } else { return Colaps(arr); }
}

// SYMBOLS ARRAYS 
const arrays = {
    numers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    small_Letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    big_Letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    symbols: ['/', '*', '-', '_', ')', '.', '$'],
};

// Функція генерує масив символів по чекбоксам та повертає рандомний символ
function Colaps (arr) {
    let result = [];

    if (document.getElementById('number').checked === true)  
    {result.push(arr.numers[Math.floor(Math.random() * arr.numers.length)])};

    if (document.getElementById('small').checked === true)  
    {result.push(arr.small_Letters[Math.floor(Math.random() * arr.small_Letters.length)])};
    
    if (document.getElementById('big').checked === true)  
    {result.push(arr.big_Letters[Math.floor(Math.random() * arr.big_Letters.length)])};
    
    if (document.getElementById('sumbol').checked === true)  
    {result.push(arr.symbols[Math.floor(Math.random() * arr.symbols.length)])};

    const res_len = result.length
    if (res_len === 0) {return res_len;} 
    else {return result[Math.floor(Math.random() * res_len)];}
}