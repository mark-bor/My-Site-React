import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { 
	OptionContext,
	changeColor, colorInputDefCheck, getAndSetColor,
    hiddenAll, showMore, showSelectedList,
    mouseDown, mouseUp, setSidebarSize
} from "../../scripts/index";

import home from "../../images/home.png";
import cv from "../../images/cv.png";
import project from "../../images/project.png";
import certificate from "../../images/certificate.png";
import contact from "../../images/contact.png";
import "./sidebar.css";



export default function Sidebar() {
    const {options, setOptions} = useContext(OptionContext);

    useEffect(() => {
        getAndSetColor();
        setSidebarSize();
    }, []);

    
    if (options.language==='EN') {
        return (
            <aside id="sidebar_with_navigation" className={`sidebar_with_navigation`}>
                <button id='sidebar_btn' className="sidebar_btn" onMouseDown={mouseDown} onMouseUp={mouseUp}></button>

                <ul className="list_in_sidebar">
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/'} title="Head page">
                            <img className="sidebar_icon" src={home} alt="home" width={20} />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="head_links" onClick={() => showSelectedList('works')} to={'/works'} title="My works">
                            <img className="sidebar_icon" src={project} alt="project" width={20} />
                            <p>Works</p>
                        </Link>
                        <button id='works_list_btn' className="btn_show_more" onClick={(btn) => showMore(btn, 'works_list')}></button>

                        <ul id="works_list" className="second_level_list_in_sidebar">
                            <li><Link className="second_level_links" to={'/works/calculator'}>Quadratic equation calculator</Link></li>
                            <li><Link className="second_level_links" to={'/works/birthday-timer'}>Birthday timer</Link></li>
                            <li><Link className="second_level_links" to={'/works/password-generator'}>Password generator</Link></li>
                            <li><Link className="second_level_links" to={'/works/memory-game'}>Memory game</Link></li>
                            <li><Link className="second_level_links" to={'/works/exchange-rate'}>Exchange rate</Link></li>
                            <li><Link className="second_level_links" to={'/works/event-timer'}>Event timer</Link></li>
                            <li><Link className="second_level_links" to={'/works/tank-game/menu'}>Tank game</Link></li>
                            <li><Link className="second_level_links" to={'/works/local-data-bases'}>Local databases</Link></li>
                            <li><Link className="second_level_links" to={'/works/send-out'}>Send out</Link></li>
                        </ul>
                    </li>
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/certificates'} title="Certificates">
                            <img className="sidebar_icon" src={certificate} alt="certificate" width={20} />
                            <p>Certificates</p>
                        </Link>
                    </li>
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/aboutme'} title="about me">
                            <img className="sidebar_icon" src={cv} alt="about me" width={20} />
                            <p>About me</p>
                        </Link>
                    </li>
                </ul>

                <hr className="line_in_sidebar" />

                <ul className="settings_in_sidebar">
                    <li>
                        <input id="select_language_input" className="select_language_input" type="checkbox"/>
                        <label className="select_language" htmlFor='select_language_input'>
                            <span className="language english">EN</span>
                            <ul id='select_lang' className='select_lang'>
                                <li className="puncts" onClick={() => setOptions({...options, language: 'EN'})}>EN</li>
                                <li className="puncts" onClick={() => setOptions({...options, language: 'UA'})}>UA</li>
                            </ul>
                        </label>
                        <p className="setting_name">Language</p>
                    </li>
                    <li>
                        <input 
                            id="input_in_sites_color" className="input_in_sites_color" 
                            type="checkbox" defaultChecked={colorInputDefCheck()} onChange={changeColor}
                        />
                        <label id="sites_color" className="sites_color" htmlFor='input_in_sites_color'>
                            <span id="sun_moon" className="sun_moon"><span></span></span>
                        </label>
                        <p className="setting_name">Color</p>
                    </li>
                </ul>
            </aside>
        );
    }

    if (options.language==='UA') {
        return (
            <aside id="sidebar_with_navigation" className={`sidebar_with_navigation`}>
                <button className="sidebar_btn" onMouseDown={mouseDown} onMouseUp={mouseUp}></button>
                
                <ul className="list_in_sidebar">
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/'} title="Головна сторінка">
                            <img className="sidebar_icon" src={home} alt="дім" width={20} />
                            <p>Головна</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="head_links" onClick={() => showSelectedList('works')} to={'/works'} title="Мої роботи">
                            <img className="sidebar_icon" src={project} alt="проект" width={20} />
                            <p>Роботи</p>
                        </Link>
                        <button id='works_list_btn' className="btn_show_more" onClick={(btn) => showMore(btn, 'works_list')}></button>

                        <ul id="works_list" className="second_level_list_in_sidebar">
                            <li><Link className="second_level_links" to={'/works/calculator'}>Калькулятор квадратних рівнянь</Link></li>
                            <li><Link className="second_level_links" to={'/works/birthday-timer'}>Тімер до дня народження</Link></li>
                            <li><Link className="second_level_links" to={'/works/password-generator'}>Генератор паролей</Link></li>
                            <li><Link className="second_level_links" to={'/works/memory-game'}>Гра для па'мяті</Link></li>
                            <li><Link className="second_level_links" to={'/works/exchange-rate'}>Курс валют</Link></li>
                            <li><Link className="second_level_links" to={'/works/event-timer'}>Тімер до події</Link></li>
                            <li><Link className="second_level_links" to={'/works/tank-game'}>Танкова гра</Link></li>
                            <li><Link className="second_level_links" to={'/works/local-data-bases'}>Локальні ази даних</Link></li>
                            <li><Link className="second_level_links" to={'/works/send-out'}>Розсилка</Link></li>
                        </ul>
                    </li>
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/certificates'} title="Сертифікати">
                            <img className="sidebar_icon" src={certificate} alt="сертифікат" width={20} />
                            <p>Сертифікати</p>
                        </Link>
                    </li>
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/aboutme'} title="про мене">
                            <img className="sidebar_icon" src={cv} alt="про мене" width={20} />
                            <p>Про мене</p>
                        </Link>
                    </li>
                </ul>

                <hr className="line_in_sidebar" />

                <ul className="settings_in_sidebar">
                    <li>
                        <input id="select_language_input" className="select_language_input" type="checkbox" />
                        <label className="select_language" htmlFor='select_language_input'>
                            <span className="language ukrainian">UA</span>
                            <ul id='select_lang' className='select_lang'>
                                <li className="puncts" onClick={() => setOptions({...options, language: 'EN'})}>EN</li>
                                <li className="puncts" onClick={() => setOptions({...options, language: 'UA'})}>UA</li>
                            </ul>
                        </label>
                        <p className="setting_name">Мова</p>
                    </li>
                    <li>
                        <label id="sites_color" className="sites_color">
                            <input 
                                id="input_in_sites_color" className="input_in_sites_color" 
                                type="checkbox" defaultChecked={colorInputDefCheck()} onChange={changeColor}
                            />
                            <span id="sun_moon" className="sun_moon"><span></span></span>
                        </label>
                        <p className="setting_name">Тема</p>
                    </li>
                </ul>
            </aside>
        );
    }
}



