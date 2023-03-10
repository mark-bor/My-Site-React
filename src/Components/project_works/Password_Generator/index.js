import { onMouseDown, onMouseUp } from "../../../scripts/progectWorks/PasswordGenerator/click"

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
                <h1>?????????????????? ??????????????</h1>
    
                <div className="functional">
                    <div className="left">
                            
                        <form className="parametrs">
    
                            <h3 className="param">?????????????????? ????????????????????</h3>
                            
                            <ul className="param-one">
                                <li className="check">
                                    <input id="number" type="checkbox" name="??????????" value="number" defaultChecked />
                                    <label htmlFor="number">?????????? 0-9</label>
                                </li>
                                <li className="check">
                                    <input id="small" type="checkbox" name="???????????????? ?????????????????????????? ??????????" value="small" defaultChecked />
                                    <label htmlFor="small">???????????????? ?????????? a-z</label>
                                </li>
                                <li className="check">
                                    <input id="big" type="checkbox" name="???????????? ??????????" value="big" defaultChecked />
                                    <label htmlFor="big">???????????? ?????????? A-Z</label>
                                </li>
                                <li className="check">
                                    <input id="sumbol" type="checkbox" name="??????????????" value="sumbol" />
                                    <label htmlFor="sumbol">????????. ??????????????</label>
                                </li>
                                <li className="check">
                                    <input id="remuv" type="checkbox" name="?????????????? ?????????????????? ????????????????" value="remuv" />
                                    <label htmlFor="remuv">?????????????? ?????????????????? ????????????????</label>
                                </li>
                            </ul>
    
                            <section className="param-two">
                                <div className="num">
                                    <label htmlFor="dov">??????????????</label>
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
                                    <label htmlFor="kil">??????????????????</label>
                                    <select className="kil" id="kil">
                                        <option id="kil_3" value="3">3</option>
                                        <option id="kil_6" value="6">6</option>
                                        <option id="kil_9" value="9">9</option>
                                    </select>
                                </div>
                            </section>
                        </form>
                        {/* __________ BUTTON _____________________ */}
                        <button className="butto" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>????????????????????</button>
    
                    </div>
                    <div className="right">
                        {/* __________ PASSWORDS _____________________ */}
                        <article className="result">
                            <h3 className="pass">????????????</h3>
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
