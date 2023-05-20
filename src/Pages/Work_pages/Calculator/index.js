import { useState } from "react";
import { 
    calculateOnMouseDown,
    calculateQuadraticEquation
} from "../../../scripts/progectWorks/Calculator/calculate";

import "./styles.css";



export default function Calculator({lang}) {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [results, setResults] = useState({xOne: '', xTwo: ''});


    if (lang==='EN') {
        return (
            <section className="div cal" id="calculator">	
                <h1>Quadratic equation calculator</h1>
    
                <div className="tabel_div_cal">
                    <form className="tabel_cal">
                        <div className="a_b_c">a</div>
                        <div className="a_b_c">b</div>					
                        <div className="a_b_c">c</div>
                        
                        <input 
                            className="inp" type="number" name="a" value={a} 
                            onChange={text => setA(text.target.value)} 
                        />
                        <input 
                            className="inp" type="number" name="b" value={b} 
                            onChange={text => setB(text.target.value)} 
                        />
                        <input 
                            className="inp" type="number" name="c" value={c} 
                            onChange={text => setC(text.target.value)} 
                        />
                    </form>
                                        
                    <button 
                        id="btn_for_calc" className="btn_for_calc" 
                        onMouseDown={calculateOnMouseDown}
                        onMouseUp={(btn) => calculateQuadraticEquation(btn, {a, b, c}, {setA, setB, setC}, setResults)}
                    >Calculate</button>
                </div>
    
                <hr className="hr" />
    
                <div className="tabel_div_cal">
                    <div className="tabel_2">
                        <p className="x1_x2">x1</p>
                        <p className="x1_x2">x2</p>
    
                        <p className="x1_x2_result">{results.xOne}</p>
                        <p className="x1_x2_result">{results.xTwo}</p>
                    </div>
                </div>
            </section>
        );
    }
    
    if (lang==='UA') {
        return (
            <section className="div cal" id="calculator">	
                <h1 className="h1_calc">Калькулятор квадратних рівнянь</h1>
    
                <div className="tabel_div_cal">
                    <form className="tabel_cal">
                        <div className="a_b_c">a</div>
                        <div className="a_b_c">b</div>					
                        <div className="a_b_c">c</div>
                        
                        <input 
                            className="inp" type="number" name="a" value={a} 
                            onChange={text => setA(text.target.value)} 
                        />
                        <input 
                            className="inp" type="number" name="b" value={b} 
                            onChange={text => setB(text.target.value)} 
                        />
                        <input 
                            className="inp" type="number" name="c" value={c} 
                            onChange={text => setC(text.target.value)} 
                        />
                    </form>
                                        
                    <button 
                        id="btn_for_calc" className="btn_for_calc" 
                        onMouseDown={calculateOnMouseDown}
                        onMouseUp={(btn) => calculateQuadraticEquation(btn, {a, b, c}, {setA, setB, setC}, setResults)}
                    >Розрахувати</button>
                </div>
    
                <hr className="hr" />
    
                <div className="tabel_div_cal">
                    <div className="tabel_2">
                        <p className="x1_x2">x1</p>
                        <p className="x1_x2">x2</p>
    
                        <p className="x1_x2_result">{results.xOne}</p>
                        <p className="x1_x2_result">{results.xTwo}</p>
                    </div>
                </div>
            </section>
        );
    }
}
