import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { OptionContext } from "../../../../../scripts/index";

import "./styles.css";



export default function Main() {
    const {options} = useContext(OptionContext);


    if (options.language==='EN') {
        return (
            <section id="main" className="section_in_menu_tank_game">

                <h2 className="menu_title">Main menu</h2>

                <div className="mein_menu_with_tank">
                    <div className="main_section_in_mein_menu">
                        <Outlet />
                    </div>

                    <aside className="sidebar_with_buttons">
                        <ul className="navigation_on_mein_menu">
                            <li><Link className="button_in_nav_on_main_menu" to={'/works/tank-game/menu/'}>Tank</Link></li>
                            <li><Link className="button_in_nav_on_main_menu" to={'/works/tank-game/menu/machine-gun'}>Machine gun</Link></li>
                        </ul>
                        
                        <Link id="start_game" className="start_game" to={'/works/tank-game'}></Link>
                    </aside>
                </div>
                
            </section>
        );
    }
}