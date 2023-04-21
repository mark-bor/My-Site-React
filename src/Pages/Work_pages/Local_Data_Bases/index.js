import { useState, useEffect } from "react";

import { setLDBLanguage } from "../../../scripts/progectWorks/LocalDB/setLDBLanguage";
import { setLDBColor } from "../../../scripts/progectWorks/LocalDB/setLDBColor";

import { LocalStorageSection } from "../../../Components/index.js";
import { IndexedDBSection } from "../../../Components/index.js";

import "./style.css";



export default function LocalDataBases({lang}) {
    const [translate, setTranslate] = useState(0);
    const [slider, setSlider] = useState(0);

    useEffect(() => {
        setSlider(document.getElementById('data_base_slider').clientWidth);
    }, []);

    
    
    return (
        <section className="div loc-dat-bas" id="local-data-bases">
            <h1 className="light_dark">{setLDBLanguage()}</h1>

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

                    <LocalStorageSection lang={lang} />
                    <IndexedDBSection lang={lang} />
                    
                </div>
            </div>
        </section>
    );
}

