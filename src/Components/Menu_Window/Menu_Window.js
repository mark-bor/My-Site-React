import React from 'react';
import { Link } from "react-router-dom";

import cats_paw from "./Images/cats_paw.png";

import "./menu_window.css";

export default function MenuWindow({lang}) {
	const setColor = () => window.localStorage.getItem('color')==='moon'? 'trans__menu__dark': null;

	if (lang==='EN') {
		return (
			<nav id="menu_window" className={`trans__menu transMenu_S ${setColor()}`}>
				<ul>
					<li className="men_win">
						<Link id="top" className="but" to={'/cv'} name="Cv">CV</Link>
					</li>
					<li className="men_win">
						<Link className="but" to={'/works'} name="Works">My Works</Link>
					</li>
					<li className="men_win">
						<Link className="but" to={'/certificates'} name="Certificates">Certificates</Link>
					</li>
					<li className="men_win">
						<Link className="but" to={'/contacts'} name="Contacts">Contacts</Link>
					</li>
					<li id="paw">
						<img className="paw-img" src={cats_paw} alt="paw" height="40" />
					</li>
				</ul>
			</nav>
		);
	}

	if (lang==='UA') {
		return (
			<nav id="menu_window" className={`trans__menu transMenu_S ${setColor()}`}>
				<ul>
					<li className="men_win">
						<Link id="top" className="but" to={'/ua/cv'} name="Резюме">Резюме</Link>
					</li>
					<li className="men_win">
						<Link className="but" to={'/ua/works'} name="Роботи">Мої Роботи</Link>
					</li>
					<li className="men_win">
						<Link className="but" to={'/ua/certificates'} name="Сертифікати">Сертифікати</Link>
					</li>
					<li className="men_win">
						<Link className="but" to={'/ua/contacts'} name="Контакти">Контакти</Link>
					</li>
					<li id="paw">
						<img className="paw-img" src={cats_paw} alt="слід лапки" height="40" />
					</li>
				</ul>
			</nav>
		);
	}
}