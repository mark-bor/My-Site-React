import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { hiddenMenuWindow } from "../../scripts/MenuWindow/hidden";
import { hiddenLanguage } from "../../scripts/Global/language"
import { changeColor, colorInputDefCheck, getAndSetColor } from "../../scripts/Global/siteColor"

import home from "../../images/home.png";
import cv from "../../images/cv.png";
import project from "../../images/project.png";
import certificate from "../../images/certificate.png";
import contact from "../../images/contact.png";
import "./styles.css";



export default function MenuWindow({lang}) {
	useEffect(() => {
        getAndSetColor();
    }, []);



	if (lang==='EN') {
		return (
			<nav id="menu_window" className={`trans__menu transMenu_S`}>
				<ul className='link_list_in_menu_window'>
                    <li className="men_win">
                        <Link className="but" to={'/'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={home} alt="home" width={20} />
                            <p className='link_name_in_menu_window'>Home</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/cv'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={cv} alt="cv" width={20} />
                            <p className='link_name_in_menu_window'>CV</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/works'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={project} alt="project" width={20} />
                            <p className='link_name_in_menu_window'>Works</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/certificates'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={certificate} alt="certificate" width={20} />
                            <p className='link_name_in_menu_window'>Certificates</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/contacts'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={contact} alt="contacts" width={20} />
                            <p className='link_name_in_menu_window'>Contacts</p>
                        </Link>
                    </li>
                </ul>

				<hr className='line_in_min_win' />

				<ul className="settings_in_menu_window">
                    <li>
                        <input id="select_language_input" className="select_language_input" type="checkbox"/>
                        <label className="select_language" htmlFor='select_language_input'>
                            <span className="language english">EN</span>
                            <ul id='select_lang' className='select_lang'>
                                <li className="puncts"><Link onClick={hiddenLanguage} to={`/`}>EN</Link></li>
                                <li className="puncts"><Link onClick={hiddenLanguage} to={`/ua`}>UA</Link></li>
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
			</nav>
		);
	}

	if (lang==='UA') {
		return (
			<nav id="menu_window" className={`trans__menu transMenu_S`}>
				<ul className='link_list_in_menu_window'>
                    <li className="men_win">
                        <Link className="but" to={'/'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={home} alt="дім" width={20} />
                            <p className='link_name_in_menu_window'>Головна</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/cv'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={cv} alt="резюме" width={20} />
                            <p className='link_name_in_menu_window'>Резюме</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/works'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={project} alt="проект" width={20} />
                            <p className='link_name_in_menu_window'>Роботи</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/certificates'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={certificate} alt="сертифікат" width={20} />
                            <p className='link_name_in_menu_window'>Сертифікати</p>
                        </Link>
                    </li>
                    <li className="men_win">
                        <Link className="but" to={'/contacts'} onMouseUp={hiddenMenuWindow}>
                            <img className="menu_window_icon" src={contact} alt="контакти" width={20} />
                            <p className='link_name_in_menu_window'>Контакти</p>
                        </Link>
                    </li>
                </ul>

                <hr className='line_in_min_win' />

				<ul className="settings_in_menu_window">
                    <li>
                        <input id="select_language_input" className="select_language_input" type="checkbox" />
                        <label className="select_language" htmlFor='select_language_input'>
                            <span className="language ukrainian">UA</span>
                            <ul id='select_lang' className='select_lang'>
                                <li className="puncts"><Link onClick={hiddenLanguage} to={`/`}>EN</Link></li>
                                <li className="puncts"><Link onClick={hiddenLanguage} to={`/ua`}>UA</Link></li>
                            </ul>
                        </label>
                        <p className="setting_name">Мова</p>
                    </li>
                    <li>
						<input 
							id="input_in_sites_color" className="input_in_sites_color" 
							type="checkbox" defaultChecked={colorInputDefCheck()} onChange={changeColor}
						/>
                        <label id="sites_color" className="sites_color" htmlFor='input_in_sites_color'>
                            <span id="sun_moon" className="sun_moon"><span></span></span>
                        </label>
                        <p className="setting_name">Тема</p>
                    </li>
                </ul>
			</nav>
		);
	}
}