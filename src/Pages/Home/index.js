import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { AbautTechnology, Technology } from "../../components/index";
import { TECHNOLOGIES } from "../../data/TECHNOLOGIES";
import { OptionContext } from "../../scripts/index";

import cv from "../../images/cv_for_home.png";
import certificate from "../../images/certificate_for_home.png";
import gear from "../../images/gear_for_home.png";

import './styles.css';



export default function Home() {
	const [window, setWindow] = useState(false);
	const [content, setContent] = useState({});
	const {options} = useContext(OptionContext);
	

	if (options.language==='EN') {
		return (
			<section className="div h" id="home">
				{/* __________ TITLE _____________________ */}
				<h1 className="title light_dark">My CV-Site</h1>

				{window ? <AbautTechnology content={content} set={setWindow}/> : null}

				{/* __________ TECHNOLOGIES _____________________ */}
				<section className='technologies_section'>
					<h2 className='titles_in_tech_section light_dark'>Technologies which I used in this app</h2>

					<ul className='list_of_tech'>
						{TECHNOLOGIES.map((data, i) => <Technology key={i} setContent={setContent} setWindow={setWindow} data={data} text='logo' />)}						
					</ul>
				</section>

				{/* __________ MENU _____________________ */}
				<ul className="head_block_menu">
					<li className="one">
						<Link className="but block_text" to={'/aboutme'} name="Cv">
							<svg className='image_background' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path fill="#6D6D6D" d="M44.5,-62.4C54.8,-53.8,58.2,-36.9,60.1,-21.7C62.1,-6.5,62.5,7,58.9,19.4C55.2,31.8,47.4,43.2,36.9,51.9C26.4,60.7,13.2,66.8,-1.9,69.5C-17.1,72.1,-34.1,71.3,-50,64.3C-65.8,57.3,-80.4,44.1,-82.1,29C-83.8,13.9,-72.6,-3,-65.1,-19.6C-57.5,-36.1,-53.6,-52.2,-43.4,-60.9C-33.1,-69.5,-16.6,-70.6,0.3,-71C17.1,-71.4,34.2,-71.1,44.5,-62.4Z" transform="translate(100 100)" />
							</svg>
							<img src={cv} alt="cv" />
							<p className={`text`}>CV</p>
						</Link>
					</li>
					<li className="two">
						<Link className="but block_text" to={'/certificates'} name="Certificates">
							<svg className='image_background' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path fill="#6D6D6D" d="M41.2,-53.7C55.3,-46.5,69.9,-37,75.5,-23.6C81.1,-10.3,77.6,6.9,69.6,19.9C61.6,32.8,49.1,41.5,36.7,52.6C24.3,63.7,12.2,77.2,-0.1,77.4C-12.4,77.5,-24.7,64.3,-34.7,52.4C-44.7,40.6,-52.3,30,-60.1,17C-67.8,3.9,-75.6,-11.6,-72.7,-24.6C-69.8,-37.5,-56.1,-47.9,-42.2,-55.2C-28.3,-62.6,-14.1,-66.8,-0.3,-66.4C13.6,-66,27.1,-61,41.2,-53.7Z" transform="translate(100 100)" />
							</svg>
							<img id="certificate" src={certificate} alt="certificate" />
							<p className={`text`}>Certificates</p>
						</Link>
					</li>
					<li className="three">
						<Link className="but block_text" to={'/works'} name="My Works">
							<svg className='image_background' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path fill="#6D6D6D" d="M35.1,-49.6C48.8,-38.4,65.4,-32.5,74.2,-20.5C83.1,-8.6,84.1,9.5,77.5,23.7C70.8,37.8,56.6,48,42.4,59.8C28.2,71.5,14.1,84.8,1,83.5C-12.2,82.2,-24.4,66.2,-38.7,54.5C-53.1,42.9,-69.6,35.4,-73.7,23.8C-77.7,12.1,-69.3,-3.8,-61,-16.9C-52.8,-30,-44.7,-40.2,-34.6,-52.6C-24.4,-65,-12.2,-79.4,-0.8,-78.4C10.7,-77.4,21.4,-60.8,35.1,-49.6Z" transform="translate(100 100)" />
							</svg>
							<img src={gear} alt="gear" />
							<p className={`text`}>My Works</p>
						</Link>
					</li>
				</ul>
			</section>
		);
	}

	if (options.language==='UA') {
		return (
		  <section className="div h" id="home" >
				{/* __________ TITLE _____________________ */}
				<h1 className="title light_dark">Мій Сайт</h1>

				{window ? <AbautTechnology content={content} set={setWindow}/> : null}

				{/* __________ TECHNOLOGIES _____________________ */}
				<section className='technologies_section'>
					<h2 className='titles_in_tech_section light_dark'>Технології які я використав в цьому додатку</h2>

					<ul className='list_of_tech'>
						{TECHNOLOGIES.map((data, i) => <Technology key={i} setContent={setContent} setWindow={setWindow} data={data} text='логотип' />)}
					</ul>
				</section>

				{/* __________ MENU _____________________ */}
				<ul className="head_block_menu">
					<li className="one">
						<Link className="but block_text" to={'/aboutme'} name="Резюме">
							<svg className='image_background' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path fill="#6D6D6D" d="M44.5,-62.4C54.8,-53.8,58.2,-36.9,60.1,-21.7C62.1,-6.5,62.5,7,58.9,19.4C55.2,31.8,47.4,43.2,36.9,51.9C26.4,60.7,13.2,66.8,-1.9,69.5C-17.1,72.1,-34.1,71.3,-50,64.3C-65.8,57.3,-80.4,44.1,-82.1,29C-83.8,13.9,-72.6,-3,-65.1,-19.6C-57.5,-36.1,-53.6,-52.2,-43.4,-60.9C-33.1,-69.5,-16.6,-70.6,0.3,-71C17.1,-71.4,34.2,-71.1,44.5,-62.4Z" transform="translate(100 100)" />
							</svg>
							<img src={cv} alt="Резюме" />
							<p className={`text`}>Резюме</p>
						</Link>
					</li>
					<li className="two">
						<Link className="but block_text" to={'/certificates'} name="Сертифікати">
							<svg className='image_background' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path fill="#6D6D6D" d="M41.2,-53.7C55.3,-46.5,69.9,-37,75.5,-23.6C81.1,-10.3,77.6,6.9,69.6,19.9C61.6,32.8,49.1,41.5,36.7,52.6C24.3,63.7,12.2,77.2,-0.1,77.4C-12.4,77.5,-24.7,64.3,-34.7,52.4C-44.7,40.6,-52.3,30,-60.1,17C-67.8,3.9,-75.6,-11.6,-72.7,-24.6C-69.8,-37.5,-56.1,-47.9,-42.2,-55.2C-28.3,-62.6,-14.1,-66.8,-0.3,-66.4C13.6,-66,27.1,-61,41.2,-53.7Z" transform="translate(100 100)" />
							</svg>
							<img id="certificate" src={certificate} alt="Сертифікати" />
							<p className={`text`}>Сертифікати</p>
						</Link>
					</li>
					<li className="three">
						<Link className="but block_text" to={'/works'} name="Мої Роботи">
							<svg className='image_background' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path fill="#6D6D6D" d="M35.1,-49.6C48.8,-38.4,65.4,-32.5,74.2,-20.5C83.1,-8.6,84.1,9.5,77.5,23.7C70.8,37.8,56.6,48,42.4,59.8C28.2,71.5,14.1,84.8,1,83.5C-12.2,82.2,-24.4,66.2,-38.7,54.5C-53.1,42.9,-69.6,35.4,-73.7,23.8C-77.7,12.1,-69.3,-3.8,-61,-16.9C-52.8,-30,-44.7,-40.2,-34.6,-52.6C-24.4,-65,-12.2,-79.4,-0.8,-78.4C10.7,-77.4,21.4,-60.8,35.1,-49.6Z" transform="translate(100 100)" />
							</svg>
							<img src={gear} alt="Мої Роботи" />
							<p className={`text`}>Мої Роботи</p>
						</Link>
					</li>
				</ul>
		  </section>
		);
	}
}