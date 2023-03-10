import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { setSidebarColor } from "../../scripts/Sidebar/color"
import { hiddenLanguage } from "../../scripts/siteLanguage/language"
import {
    changeColor,
    colorInputDefCheck,
    getAndSetColor
} from "../../scripts/siteColor/siteColor"
import { 
    hiddenAll,
    showMore,
    showSelectedList
 } from "../../scripts/Sidebar/list"
import { 
    mouseDown,
    mouseUp,
    setSidebarSize
 } from "../../scripts/Sidebar/hiddenSidebar"

import home from "./Images/home.png";
import cv from "./Images/cv.png";
import project from "./Images/project.png";
import certificate from "./Images/certificate.png";
import contact from "./Images/contact.png";
import "./sidebar.css";



export default function Sidebar({lang}) {
    useEffect(() => {
        getAndSetColor();
        setSidebarSize();
    }, []);

    

    if (lang==='EN') {
        return (
            <aside id="sidebar_with_navigation" className={`sidebar_with_navigation${setSidebarColor()}`}>
                <button id='sidebar_btn' className="sidebar_btn" onMouseDown={mouseDown} onMouseUp={mouseUp}></button>

                <ul className="list_in_sidebar">
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/'} title="Head page">
                            <img className="sidebar_icon" src={home} alt="home" width={20} />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="head_links" onClick={() => showSelectedList('cv')} to={'/cv'} title="CV">
                            <img className="sidebar_icon" src={cv} alt="cv" width={20} />
                            <p>CV</p>
                        </Link>
                        <button id='cv_list_btn' className="btn_show_more" onClick={(btn) => showMore(btn, 'cv_list')}></button>

                        <ul id="cv_list" className="second_level_list_in_sidebar">
                            <li><a 
                                className="second_level_links" target={'_blank'} rel="noreferrer"
                                href="https://takct-server.netlify.app/CV/Mark%20Bordakov%20-%20Front-end.pdf"
                            >CV 1</a></li>
                            <li><a 
                                className="second_level_links" target={'_blank'} rel="noreferrer"
                                href=".https://takct-server.netlify.app/CV/M%20Bordakov%20-%20Front-end.pdf"
                            >CV 2</a></li>
                        </ul>
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
                        <Link className="head_links" to={'/contacts'} title="Contacts">
                            <img className="sidebar_icon" src={contact} alt="contacts" width={20} />
                            <p>Contacts</p>
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
            </aside>
        );
    }

    if (lang==='UA') {
        return (
            <aside id="sidebar_with_navigation" className={`sidebar_with_navigation${setSidebarColor()}`}>
                <button className="sidebar_btn" onMouseDown={mouseDown} onMouseUp={mouseUp}></button>
                
                <ul className="list_in_sidebar">
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/ua/'} title="?????????????? ????????????????">
                            <img className="sidebar_icon" src={home} alt="??????" width={20} />
                            <p>??????????????</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="head_links" onClick={() => showSelectedList('cv')} to={'/ua/cv'} title="????????????">
                            <img className="sidebar_icon" src={cv} alt="????????????" width={20} />
                            <p>????????????</p>
                        </Link>
                        <button id='cv_list_btn' className="btn_show_more" onClick={(btn) => showMore(btn, 'cv_list')}></button>

                        <ul id="cv_list" className="second_level_list_in_sidebar">
                            <li><a 
                                className="second_level_links" target={'_blank'} rel="noreferrer"
                                href="https://takct-server.netlify.app/CV/Mark_Bordakov_Front-end.pdf"
                            >???????????? 1</a></li>
                            <li><a 
                                className="second_level_links" target={'_blank'} rel="noreferrer"
                                href="https://takct-server.netlify.app/CV/M_Bordakov_Front-end.pdf"
                            >???????????? 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link className="head_links" onClick={() => showSelectedList('works')} to={'/ua/works'} title="?????? ????????????">
                            <img className="sidebar_icon" src={project} alt="????????????" width={20} />
                            <p>????????????</p>
                        </Link>
                        <button id='works_list_btn' className="btn_show_more" onClick={(btn) => showMore(btn, 'works_list')}></button>

                        <ul id="works_list" className="second_level_list_in_sidebar">
                            <li><Link className="second_level_links" to={'/ua/works/calculator'}>?????????????????????? ???????????????????? ??????????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/birthday-timer'}>?????????? ???? ?????? ????????????????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/password-generator'}>?????????????????? ??????????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/memory-game'}>?????? ?????? ????'????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/exchange-rate'}>???????? ??????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/event-timer'}>?????????? ???? ??????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/tank-game'}>?????????????? ??????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/local-data-bases'}>???????????????? ?????? ??????????</Link></li>
                            <li><Link className="second_level_links" to={'/ua/works/send-out'}>????????????????</Link></li>
                        </ul>
                    </li>
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/ua/certificates'} title="??????????????????????">
                            <img className="sidebar_icon" src={certificate} alt="????????????????????" width={20} />
                            <p>??????????????????????</p>
                        </Link>
                    </li>
                    <li onClick={hiddenAll}>
                        <Link className="head_links" to={'/ua/contacts'} title="????????????????">
                            <img className="sidebar_icon" src={contact} alt="????????????????" width={20} />
                            <p>????????????????</p>
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
                                <li className="puncts"><Link onClick={hiddenLanguage} to={`/`}>EN</Link></li>
                                <li className="puncts"><Link onClick={hiddenLanguage} to={`/ua`}>UA</Link></li>
                            </ul>
                        </label>
                        <p className="setting_name">????????</p>
                    </li>
                    <li>
                        <label id="sites_color" className="sites_color">
                            <input 
                                id="input_in_sites_color" className="input_in_sites_color" 
                                type="checkbox" defaultChecked={colorInputDefCheck()} onChange={changeColor}
                            />
                            <span id="sun_moon" className="sun_moon"><span></span></span>
                        </label>
                        <p className="setting_name">????????</p>
                    </li>
                </ul>
            </aside>
        );
    }
}



