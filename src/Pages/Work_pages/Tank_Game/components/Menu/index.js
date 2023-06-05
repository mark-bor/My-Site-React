import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { OptionContext } from "../../../../../scripts/index";

import "./styles.css";



export default function Menu() {
    const {options} = useContext(OptionContext);


    if (options.language==='EN') {
        return (
            <div id="menu_in_tank_game" className="menu_in_tank_game">
                <Link id="close_menu" className="close_menu" to={'/works/tank-game'}>
                    <span></span>
                    <span></span>
                </Link>
                
                <nav className="nav_on_puncts_menu">
                    <ul className="list_with_puncts_menu">
                        <li><Link className="punct_menu_from_list punct_active" onClick={setLinkStyle} to={'/works/tank-game/menu/'}>Main</Link></li>
                        <li><Link className="punct_menu_from_list" onClick={setLinkStyle} to={'/works/tank-game/menu/options'}>Options</Link></li>
                        <li><Link className="punct_menu_from_list" onClick={setLinkStyle} to={'/works/tank-game/menu/explanation'}>Explanation</Link></li>
                    </ul>
                </nav>

                <Outlet />
            </div>
        );
    }
}

function setLinkStyle(btn) {
    document.querySelectorAll('.punct_menu_from_list').forEach((elem) => elem.classList.remove('punct_active'));
    btn.target.classList.add('punct_active');
}