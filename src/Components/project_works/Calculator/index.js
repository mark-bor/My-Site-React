import { 
    calculateOnMouseDown,
    calculateQuadraticEquation
} from "../../../scripts/progectWorks/Calculator/calculate";

import "./calculator.css";



export default function Calculator({lang}) {
    if (lang==='EN') {
        return (
            <section className="div cal" id="calculator">	
                <h1>Quadratic equation calculator</h1>
    
                <div className="tabel_div_cal">
                    <form className="tabel_cal">
                        <div className="a_b_c">a</div>
                        <div className="a_b_c">b</div>					
                        <div className="a_b_c">c</div>
                        
                        <input id="a" className="inp" type="number" name="a" />
                        <input id="b" className="inp" type="number" name="b" />
                        <input id="c" className="inp" type="number" name="c" />
                    </form>
                                        
                    <button 
                        id="btn_for_calc" className="btn_for_calc" 
                        onMouseDown={calculateOnMouseDown}
                        onMouseUp={calculateQuadraticEquation}
                    >Calculate</button>
                </div>
    
                <hr className="hr" />
    
                <div className="tabel_div_cal">
                    <div className="tabel_2">
                        <p className="x1_x2">x1</p>
                        <p className="x1_x2">x2</p>
    
                        <p id="x_1" className="x1_x2_result"></p>
                        <p id="x_2" className="x1_x2_result"></p>
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
                        
                        <input id="a" className="inp" type="number" name="a" />
                        <input id="b" className="inp" type="number" name="b" />
                        <input id="c" className="inp" type="number" name="c" />
                    </form>
                                        
                    <button 
                        id="btn_for_calc" className="btn_for_calc" 
                        onMouseDown={calculateOnMouseDown}
                        onMouseUp={calculateQuadraticEquation}
                    >Розрахувати</button>
                </div>
    
                <hr className="hr" />
    
                <div className="tabel_div_cal">
                    <div className="tabel_2">
                        <p className="x1_x2">x1</p>
                        <p className="x1_x2">x2</p>
    
                        <p id="x_1" className="x1_x2_result"></p>
                        <p id="x_2" className="x1_x2_result"></p>
                    </div>
                </div>
            </section>
        );
    }
}
