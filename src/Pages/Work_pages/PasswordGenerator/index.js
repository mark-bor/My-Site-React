import { useState, useContext } from "react"
import { 
	OptionContext,
	onMouseDown, onMouseUp
} from "../../../scripts/index";

import "./styles.css";



export default function PasswordGenerator() {
    const {options} = useContext(OptionContext);
    const [passwords, setPasswords] = useState([]);
    const [error, setError] = useState('');


    if (options.language==='EN') {
        return (
            <section className="div pas-gen" id="password-generator">
                {/* __________ BODY _____________________ */}
                <h1>Password Generator</h1>
    
                <div className="functional">
                    <div className="left">
                            
                        <form className="parametrs">
    
                            <h3 className="param">Parametrs of generator</h3>
                            
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
                                    <input 
                                        id="dov" className="second_options" 
                                        type='number' 
                                        min={4} max={15}
                                        defaultValue={10} 
                                    />
                                </div>
                                <div className="num">
                                    <label htmlFor="kil">Quantity</label>
                                    <input 
                                        id="kil" className="second_options" 
                                        type='number' 
                                        min={1} max={9}
                                        defaultValue={3} 
                                    />
                                </div>
                            </section>
                        </form>

                        <p className="error_massage">{error}</p>

                        {/* __________ BUTTON _____________________ */}
                        <button 
                            className="butto" 
                            onMouseDown={onMouseDown} 
                            onMouseUp={(btn) => onMouseUp(btn, setPasswords, setError)}
                        >Generate</button>
                    </div>

                    <div className="right">
                        {/* __________ PASSWORDS _____________________ */}
                        <article className="result">
                            <h3 className="pass">Passwords</h3>
                            <ul>
                                {passwords.map((password, i) => <li key={i} className="pswd">{password}</li>)}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        );
    }

    if (options.language==='UA') {
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
                                    <input 
                                        id="dov" className="second_options" 
                                        type='number' 
                                        min={4} max={15}
                                        defaultValue={10} 
                                    />
                                </div>
                                <div className="num">
                                    <label htmlFor="kil">Кількість</label>
                                    <input 
                                        id="kil" className="second_options" 
                                        type='number' 
                                        min={1} max={9}
                                        defaultValue={3} 
                                    />
                                </div>
                            </section>
                        </form>
                        
                        <p className="error_massage">{error}</p>

                        {/* __________ BUTTON _____________________ */}
                        <button 
                            className="butto" 
                            onMouseDown={onMouseDown} 
                            onMouseUp={onMouseUp}
                        >Генерувати</button>
                    </div>
                    
                    <div className="right">
                        {/* __________ PASSWORDS _____________________ */}
                        <article className="result">
                            <h3 className="pass">Паролі</h3>
                            <ul>
                                {passwords.map((password, i) => <li key={i} className="pswd">{password}</li>)}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
