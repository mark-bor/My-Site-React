import { useState, useContext } from "react";
import Driving from "../Driving/index";
import TowerAndFire from "../TowerAndFire/index";
import { OptionContext } from "../../../../../scripts/index";

import "./styles.css";


export default function Eplanation() {
    const [number, setNumber] = useState(0);
    const {options} = useContext(OptionContext);

    function slideExplanation(elem, number) {
        elem.preventDefault();
        setNumber(document.getElementById('driving').clientWidth*(-number));
    }


    if (options.language==='EN') {
        return (
            <section id="explanation" className="section_in_menu_tank_game">

                <h2 className="menu_title">Explanation of the game and driving</h2>

                <ul className="navigation_on_explanation">
                    <li><a 
                        href="#driving" 
                        onClick={(elem) => slideExplanation(elem, 0)}
                    >Driving on a tank</a></li>
                    <li><a 
                        href="#tower_and_fire" 
                        onClick={(elem) => slideExplanation(elem, 1)}
                    >Tower rotation and fire</a></li>
                </ul>
                
                <div 
                    className="block_with_sections" 
                    style={{transform: `translate(${number}px)`}}
                >
                    <Driving lang={options.language} />
                    <TowerAndFire lang={options.language} />
                </div>
            </section>
        );
    }
}
