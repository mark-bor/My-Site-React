import './cv.css';

export default function CV({lang}) {
    const setGradientOne = () => window.localStorage.getItem('color')==='moon'? 'button_in_cvs_one_dark': null;
    const setGradientTwo = () => window.localStorage.getItem('color')==='moon'? 'button_in_cvs_two_dark': null;

    if (lang==='EN') {
        return (
            <section className="div h" id="resume" >
                {/* __________ TITLE _____________________ */}
                <h1 className="title light_dark">CV</h1>
                {/* __________ MENU _____________________ */}
                <div className="cvs">
                    <ul className="div_in_cvs">
                        <li className="li_one">
                            <a 
                                id="button_in_cvs_one" 
                                className={`but button_in_cvs button_in_cvs_one ${setGradientOne()}`} 
                                target={'_blank'} href="./CVs/Mark%20Bordakov%20-%20Front-end.pdf" 
                                name="CV 1"
                                >CV 1</a>
                        </li>
                        <li>
                            <a 
                                id="button_in_cvs_two" 
                                className={`but button_in_cvs button_in_cvs_two ${setGradientTwo()}`} 
                                target={'_blank'} href="./CVs/M%20Bordakov%20-%20Front-end.pdf" 
                                name="CV 2"
                            >CV 2</a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
    
    if (lang==='UA') {
        return (
            <section className="div h" id="resume" >
                {/* __________ TITLE _____________________ */}
                <h1 className="title light_dark">Резюме</h1>
                {/* __________ MENU _____________________ */}
                <div className="cvs">
                    <ul className="div_in_cvs">
                        <li className="li_one">
                            <a 
                                id="button_in_cvs_one" 
                                className={`but button_in_cvs button_in_cvs_one ${setGradientOne()}`} 
                                target={'_blank'} href="./CVs/Mark%20Bordakov%20-%20Front-end.pdf" 
                                name="Резюме 1"
                                >Резюме 1</a>
                        </li>
                        <li>
                            <a 
                                id="button_in_cvs_two" 
                                className={`but button_in_cvs button_in_cvs_two ${setGradientTwo()}`} 
                                target={'_blank'} href="./CVs/M%20Bordakov%20-%20Front-end.pdf"
                                name="Резюме 2"
                            >Резюме 2</a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}