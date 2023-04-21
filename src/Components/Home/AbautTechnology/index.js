import { useEffect } from "react";
import { closeWindow } from "../../../scripts/Home/closeWindow";

import "./styles.css"



export default function AboutTechnology({lang, content, set}) {
    useEffect(() => {
        if (lang==='EN') {
            document.getElementById('inform_abaut_technology').innerHTML = content.informationEN;
        }
        if (lang==='UA') {
            document.getElementById('inform_abaut_technology').innerHTML = content.informationUA;
        }
    });


    return (
        <div className="about_technology_div" onClick={(elem) => closeWindow(elem, set)}>
            <section className="about_technology">
                <h2 className="technology_name">{content.title}</h2>
                <p id="inform_abaut_technology" className="inform_abaut_technology"></p>
                <button className="close_inform" onClick={() => set(false)}>Close</button>
            </section>
        </div>
    );
}