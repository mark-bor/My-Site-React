import { useState, useEffect, useContext } from "react";
import { LocalStorageSection, IndexedDBSection } from "../../../components/index.js";
import { 
	OptionContext,
	setLDBLanguage, setLDBColor
} from "../../../scripts/index";

import "./styles.css";



export default function LocalDB() {
    const {options} = useContext(OptionContext);
    const [translate, setTranslate] = useState(0);
    const [slider, setSlider] = useState(0);

    useEffect(() => {
        setSlider(document.getElementById('data_base_slider').clientWidth);
    }, []);

    
    return (
        <section className="div loc-dat-bas" id="local-data-bases">
            <h1 className="light_dark">{setLDBLanguage(options.language)}</h1>

            <ul id="select_data_bases" className={`select_data_bases ${setLDBColor()}`}>
                <li><button 
                    className="select_data_base" 
                    onMouseDown={(btn) => btn.target.style.transform='scale(0.95)'}
                    onMouseUp={(btn) => {
                        btn.target.style.transform='';
                        setTranslate(slider*0);
                    }}
                >LocalStorage</button></li>
                <li><button 
                    className="select_data_base" 
                    onMouseDown={(btn) => btn.target.style.transform='scale(0.95)'}
                    onMouseUp={(btn) => {
                        btn.target.style.transform='';
                        setTranslate(-slider*1);
                    }}
                >IndexedDB</button></li>
            </ul>

            <div id="data_base_slider" className="data_base_slider">
                <div className="container_with_bases" style={{"transform": `translateX(${translate}px)`}}>

                    <LocalStorageSection lang={options.language} />
                    <IndexedDBSection lang={options.language} />
                    
                </div>
            </div>
        </section>
    );
}

