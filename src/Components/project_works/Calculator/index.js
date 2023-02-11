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
                        id="btn_for_calc"
                        className="btn_for_calc" 
                        onMouseDown={(btn) => btn.target.style.boxShadow = 'inset 0 0 10px #1E2939'}
                        onMouseUp={clickOnButton}
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
                        id="btn_for_calc"
                        className="btn_for_calc" 
                        onMouseDown={(btn) => btn.target.style.boxShadow = 'inset 0 0 10px #1E2939'}
                        onMouseUp={clickOnButton}
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

function clickOnButton(btn) {
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const x_1 = document.querySelector('#x_1')
    const x_2 = document.querySelector('#x_2')

    btn.target.style.boxShadow = 'none';
    let a_vel = a.value;
    let b_vel = b.value;
    let c_vel = c.value;
    
    if (!a_vel | !b_vel | !c_vel) {
        if (!a_vel) {
            a.value = 1;
        }
        if (!b_vel) {
            b.value = 1;
        }
        if (!c_vel) {
            c.value = 1;
        }
        a_vel = a.value;
        b_vel = b.value;
        c_vel = c.value;
    }

    const desk = (b_vel*b_vel) + (4*a_vel*c_vel);
    const dk = Math.sqrt(desk);
    const a2 = 2*a_vel;
    const x1 = ((-b_vel+dk)/a2).toFixed(1);
    const x2 = ((-b_vel-dk)/a2).toFixed(1);
    const x = (-b_vel/a2).toFixed(1);

    if (desk<0 || a2===0){
        x_1.innerHTML = 'NON';
        x_2.innerHTML = 'NON';
    }else if (desk===0){
        x_1.innerHTML = x;
        x_2.innerHTML = x;
    }else if (desk>0){
        x_1.innerHTML = x1;
        x_2.innerHTML = x2;
    }
}