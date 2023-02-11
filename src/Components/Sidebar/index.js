import { Link } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar({lang}) {
    const setColor = () => window.localStorage.getItem('color')==='moon'? 'sidebar_with_navigation_dark': null;

    function mouseDown(btn) {
        btn.target.style.opacity = '0.5';
    }
    function mouseUp(btn) {
        btn.target.style.opacity = '';
        const root = document.getElementById('root');
        root.classList.toggle('root_without_sidebar');
        if (root.className==='root') {
            btn.target.style.transform = 'rotate(90deg)';
        } else {
            btn.target.style.transform = 'rotate(-90deg)';
        }
    }

    if (lang==='EN') {
        return (
            <aside id="sidebar_with_navigation" className={`sidebar_with_navigation ${setColor()}`}>
                <button className="sidebar_btn" onMouseDown={mouseDown} onMouseUp={mouseUp}></button>

                <ul className="links_list_in_sidebar">
                    <li onClick={hiddenAll}><Link className="head_links" to={'/'}>Home</Link></li>
                    <li>
                        <Link className="head_links" onClick={showSelectedList} to={'/cv'}>CV</Link>
                        <button 
                            className="btn_show_more" 
                            onClick={(btn) => showMore(btn, 'cv_list')}
                        ></button>
                        <ul id="cv_list" className="two_links_list_in_sidebar">
                            <li><a className="two_level_links" target={'_blank'} href="./CVs/Mark%20Bordakov%20-%20Front-end.pdf">CV 1</a></li>
                            <li><a className="two_level_links" target={'_blank'} href="./CVs/M%20Bordakov%20-%20Front-end.pdf">CV 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link className="head_links" onClick={showSelectedList} to={'/works'}>Works</Link>
                        <button 
                            className="btn_show_more"
                            onClick={(btn) => showMore(btn, 'works_list')}
                        ></button>
                        <ul id="works_list" className="two_links_list_in_sidebar">
                            <li><Link className="two_level_links" to={'/works/calculator'}>Quadratic equation calculator</Link></li>
                            <li><Link className="two_level_links" to={'/works/birthday-timer'}>Birthday timer</Link></li>
                            <li><Link className="two_level_links" to={'/works/password-generator'}>Password generator</Link></li>
                            <li><Link className="two_level_links" to={'/works/memory-game'}>Memory game</Link></li>
                            <li><Link className="two_level_links" to={'/works/exchange-rate'}>Exchange rate</Link></li>
                            <li><Link className="two_level_links" to={'/works/event-timer'}>Event timer</Link></li>
                            <li><Link className="two_level_links" to={'/works/tank-game/menu'}>Tank game</Link></li>
                            <li><Link className="two_level_links" to={'/works/local-data-bases'}>Local databases</Link></li>
                            <li><Link className="two_level_links" to={'/works/send-out'}>Send out</Link></li>
                        </ul>
                    </li>
                    <li onClick={hiddenAll}><Link className="head_links" to={'/certificates'}>Certificates</Link></li>
                    <li onClick={hiddenAll}><Link className="head_links" to={'/contacts'}>Contacts</Link></li>
                </ul>
            </aside>
        );
    }

    if (lang==='UA') {
        return (
            <aside id="sidebar_with_navigation" className={`sidebar_with_navigation ${setColor()}`}>
                <ul className="links_list_in_sidebar">
                    <li onClick={hiddenAll}><Link className="head_links" to={'/ua/'}>Головна</Link></li>
                    <li>
                        <Link className="head_links" onClick={showSelectedList} to={'/ua/cv'}>Резюме</Link>
                        <button 
                            className="btn_show_more" 
                            onClick={(btn) => showMore(btn, 'cv_list')}
                        ></button>
                        <ul id="cv_list" className="two_links_list_in_sidebar">
                            <li><a className="two_level_links" target={'_blank'} href="./CVs/Mark_Bordakov_Front-end.pdf">Резюме 1</a></li>
                            <li><a className="two_level_links" target={'_blank'} href="./CVs/M_Bordakov_Front-end.pdf">Резюме 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link className="head_links" onClick={showSelectedList} to={'/ua/works'}>Роботи</Link>
                        <button 
                            className="btn_show_more"
                            onClick={(btn) => showMore(btn, 'works_list')}
                        ></button>
                        <ul id="works_list" className="two_links_list_in_sidebar">
                            <li><Link className="two_level_links" to={'/ua/works/calculator'}>Калькулятор квадратних рівнянь</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/birthday-timer'}>Тімер до дня народження</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/password-generator'}>Генератор паролей</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/memory-game'}>Гра для па'мяті</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/exchange-rate'}>Курс валют</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/event-timer'}>Тімер до події</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/tank-game'}>Танкова гра</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/local-data-bases'}>Локальні ази даних</Link></li>
                            <li><Link className="two_level_links" to={'/ua/works/send-out'}>Розсилка</Link></li>
                        </ul>
                    </li>
                    <li onClick={hiddenAll}><Link className="head_links" to={'/ua/certificates'}>Сертифікати</Link></li>
                    <li onClick={hiddenAll}><Link className="head_links" to={'/ua/contacts'}>Контакти</Link></li>
                </ul>
            </aside>
        );
    }
}

function hiddenAll() {
    document.querySelectorAll('.two_links_list_in_sidebar').forEach((elem) => elem.classList.remove('open_list'));
    document.querySelectorAll('.btn_show_more').forEach((elem) => elem.style.transform='rotate(-90deg)');
}

function showMore(btn, id) {
    const list = document.getElementById(id);
    list.classList.toggle('open_list');
    list.className==='two_links_list_in_sidebar'? btn.target.style.transform='rotate(-90deg)': btn.target.style.transform='rotate(0deg)';
}

function showSelectedList(li) {
    hiddenAll();
    [...li.target.parentElement.children].forEach((elem) => {
        if (elem.tagName==='BUTTON' | elem.tagName==='button') {
            elem.style.transform='rotate(0deg)';
        }
        if (elem.tagName==='UL' | elem.tagName==='ul') {
            elem.classList.add('open_list');
        }
    });
}