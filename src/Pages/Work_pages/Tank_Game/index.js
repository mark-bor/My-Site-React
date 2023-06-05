import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Controlers from "./components/Controlers/index.js";
import { OptionContext } from "../../../scripts/index";

import "./styles.css";



export default function TankGame() {
    const {options} = useContext(OptionContext);


    if (options.language==='EN') {
        return (
            <section className="div gam" id="game">
                {/* __________ TITLE _____________________ */}
                <h1>Tanks game</h1>
                
                {/* __________ BODY _____________________ */}
                <div id="games_body" className="games_body">
    
                    <div className="game_map">
                        {/* <img className="game_map_image" src="./Images/game_map.jpg" alt="game map"> */}
                    </div>
    
                    <div id="game_field" className="game_field"></div>

                    <Controlers lang={options.language}/>
                    
                    <Outlet />
                </div>
            </section>
        );
    }
    
    if (options.language==='UA') {
        return (
            <section className="div gam" id="game">
                {/* __________ TITLE _____________________ */}
                <h1>Танкова гра</h1>
                
                {/* __________ BODY _____________________ */}
                <div id="games_body" className="games_body">
    
                    <div className="game_map">
                        {/* <img className="game_map_image" src="./Images/game_map.jpg" alt="game map"> */}
                    </div>
    
                    <div id="game_field" className="game_field"></div>
                    
                    <Controlers lang={options.language}/>

                    <Outlet />    
                </div>
            </section>
        );
    }
}