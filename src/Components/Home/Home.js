import React from 'react';
import { Link } from "react-router-dom";

import cv from "./Images/cv.png";
import certificate from "./Images/certificate.png";
import gear from "./Images/gear.png";

import './home.css';

export default function Home({lang}) {
	const setGradient = () => window.localStorage.getItem('color')==='moon'? 'dark': null;

	if (lang==='EN') {
		return (
			<section className="div h" id="home" >
				{/* __________ TITLE _____________________ */}
				<h1 className="title light_dark">My Site</h1>
				{/* __________ MENU _____________________ */}
				<ul className="head_block_menu">
					<li className="one">
						<Link className="but block_text" to={'/cv'} name="Cv">
							<div className={`block ${setGradient()}`}>				
								<img src={cv} alt="cv" />
							</div>
							<div className={`text ${setGradient()}`}>CV</div>
						</Link>
					</li>
					<li className="two">
						<Link className="but block_text" to={'/certificates'} name="Certificates">
							<div className={`block ${setGradient()}`}>
								<img id="certificate" src={certificate} alt="certificate" />
							</div>
							<div className={`text ${setGradient()}`}>Certificates</div>
						</Link>
					</li>
					<li className="three">
						<Link className="but block_text" to={'/works'} name="My Works">
							<div className={`block ${setGradient()}`}>
								<img src={gear} alt="gear" />
							</div>
							<div className={`text ${setGradient()}`}>My Works</div>
						</Link>
					</li>
				</ul>
			</section>
		);
	}

	if (lang==='UA') {
		return (
		  <section className="div h" id="home" >
				{/* __________ TITLE _____________________ */}
				<h1 className="title light_dark">Мій Сайт</h1>
				{/* __________ MENU _____________________ */}
				<ul className="head_block_menu">
					<li className="one">
						<Link className="but block_text" to={'/ua/cv'} name="Резюме">
							<div className={`block ${setGradient()}`}>				
								<img src={cv} alt="Резюме" />
							</div>
							<div className={`text ${setGradient()}`}>Резюме</div>
						</Link>
					</li>
					<li className="two">
						<Link className="but block_text" to={'/ua/certificates'} name="Сертифікати">
							<div className={`block ${setGradient()}`}>
								<img id="certificate" src={certificate} alt="Сертифікати" />
							</div>
							<div className={`text ${setGradient()}`}>Сертифікати</div>
						</Link>
					</li>
					<li className="three">
						<Link className="but block_text" to={'/ua/works'} name="Мої Роботи">
							<div className={`block ${setGradient()}`}>
								<img src={gear} alt="Мої Роботи" />
							</div>
							<div className={`text ${setGradient()}`}>Мої Роботи</div>
						</Link>
					</li>
				</ul>
		  </section>
		);
	}
}