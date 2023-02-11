import { Link } from "react-router-dom";

import "./styles.css";

// document.querySelectorAll('.btn_control').forEach((el) => {
//     el.onmousedown = (elem) => elem.target.classList.add('btn_control_active');
//     el.onmouseup = (elem) => elem.target.classList.remove('btn_control_active');
// });

export default function Controlers({lang}) {
    if (lang==='EN') {
        return (
            <div className="games_control">
                <Link id="open_menu" className="open_menu" to={'/works/tank-game/menu'} name="Explanation" title="Menu (on keyboard F)"></Link>
                <button 
                    id="increase" className="increase" 
                    onClick={() => document.getElementById('games_body').classList.toggle('increase_game_body')} 
                    name="full screen or zoom out" title="Full screen or zoom out"
                ></button>

                <input id="blocking_rotation_of_tower" type={'checkbox'} />
                <label 
                    className="blocking_rotation_of_tower" htmlFor="blocking_rotation_of_tower"
                    name="blocking the rotation of the tower" title="Blocking the rotation of the tower (button Q on keyboard)"
                ></label>

                <input id="laser" type={'checkbox'} />
                <label 
                    className="on_off_laser" htmlFor="laser"
                    name="Turn on or off a laser" title="Turn on or off a laser (button C on keyboard)"
                ></label>
                
                <div id="position_left" className={"block_with_btns position_left " + hideLeftControllers()}>
                    <button id="move_up" className="btn_control btn_control_nav" name="move tank straight" title="button Arrow Up on keyboard"></button>
                    <button id="move_left" className="btn_control btn_control_nav" name="rotate tank to left" title="button Arrow Left on keyboard"></button>
                    <button id="move_down" className="btn_control btn_control_nav" name="move tank back" title="button Arrow Down on keyboard"></button>
                    <button id="move_right" className="btn_control btn_control_nav" name="rotate tank to right" title="button Arrow Right on keyboard"></button>
                </div>

                <div className="information_about_tank">
                    <p className="information_about_mg">
                        <span className="mg_information"></span>
                        <span id="information_about_mg" className="information_mg">200/200</span>
                        <span id="mg_remainder" className="remainder"></span>
                    </p>
                    <p className="information_about_gun">
                        <span className="fire_information">&#128293;</span>
                        <span id="information_about_gun" className="information_gun">20/20</span>
                        <span id="g_remainder" className="remainder"></span>
                    </p>
                </div>
                
                <div id="position_right" className={"block_with_btns position_right " + hideRightControllers()}>
                    <button id="fire_frome_MG" className="btn_control btn_control_fire" name="fire" title="button E on keyboard">
                        <svg><circle id="fire_MG_timer" className="fire_MG_timer" cx="20" cy="20" r="19" /></svg>
                    </button>
                    
                    <button id="fire" className="btn_control btn_control_fire" name="fire" title="button W on keyboard">
                        <svg><circle id="fire_timer" className="fire_timer" cx="25" cy="25" r="23" /></svg>
                        <span>&#128293;</span>
                    </button>
                    
                    <button id="rotate_left" className="btn_control btn_control_nav" name="rotate tower to left" title="button A on keyboard"></button>
                    <button id="rotate_right" className="btn_control btn_control_nav" name="rotate tower to right" title="button D on keyboard"></button>
                </div>
            </div>
        );
    }
}



function hideLeftControllers() {
    if (window.localStorage.getItem('controllers')==='hidden') {
        return 'position_left_hidden';
    }
}

function hideRightControllers() {
    if (window.localStorage.getItem('controllers')==='hidden') {
        return 'position_right_hidden';
    }
}