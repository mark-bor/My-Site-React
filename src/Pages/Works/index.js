import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { sortByColor, sortWorks } from "../../scripts/Works/sort";

import "./style.css";


export default function Works({lang}) {
	const [works, setWorks] = useState([]);

	useEffect(() => {
		fetch(`${window.location.origin}/JSON/works.json`)
		.then((res) => res.json())
		.then((res) => setWorks(res))
		.catch((err) => console.log(err));
	}, [setWorks]);

	

	if (lang==='EN') {
		return (
			<section className="div wor" id="works">
				{/* <!------------ TITLE ----------------------> */}
				<h1 className="title light_dark">Works</h1>

				{/* <!------------ LEGEND ----------------------> */}
				<ul className="legend">
					<li className="leg_el" onClick={() => sortByColor('open', setWorks)}>
						<button id="blue" className="color"></button>
						<p className='light_dark'> - in developing proces.</p>
					</li>
					<li className="leg_el" onClick={() => sortByColor('close', setWorks)}>
						<button id="green" className="color"></button>
						<p className='light_dark'> - to complete.</p>
					</li>
				</ul>
				
				{/* <!------------ FILTER ----------------------> */}
				<button 
					className='open_filters' 
					onClick={() => document.getElementById('sorting').classList.toggle('sorting_open')}
				></button>

				{/* <!------------ SORTIGN ----------------------> */}
				<ul id='sorting' className='sorting'>
					<li className='sorting_by sorting_by_active'><button data-sort='all' onClick={(btn) => sortWorks(btn, setWorks)}>All</button></li>
					<li className='sorting_by'><button data-sort='calculator' onClick={(btn) => sortWorks(btn, setWorks)}>Calculators</button></li>
					<li className='sorting_by'><button data-sort='timer' onClick={(btn) => sortWorks(btn, setWorks)}>Timers</button></li>
					<li className='sorting_by'><button data-sort='generator' onClick={(btn) => sortWorks(btn, setWorks)}>Generators</button></li>
					<li className='sorting_by'><button data-sort='game' onClick={(btn) => sortWorks(btn, setWorks)}>Games</button></li>
					<li className='sorting_by'><button data-sort='other' onClick={(btn) => sortWorks(btn, setWorks)}>Other</button></li>
				</ul>

				{/* <!------------ MENU ----------------------> */}
				<ul className="block_menu_p">
					{works.map((work, i) => <Work key={i} work={work} title={work.nameEN} lang={''} />)}
				</ul>
			</section>
		)
	}
	
	if (lang==='UA') {
		return (
			<section className="div wor" id="works">
				{/* <!------------ TITLE ----------------------> */}
				{/* <h1 className="title light_dark">Роботи</h1> */}

				{/* <!------------ LEGEND ----------------------> */}
				<ul className="legend">
					<li className="leg_el" onClick={() => sortByColor('open', setWorks)}>
						<button id="blue" className="color"></button>
						<p> - в процесі розробкиі.</p>
					</li>
					<li className="leg_el" onClick={() => sortByColor('close', setWorks)}>
						<button id="green" className="color"></button>
						<p> - завершено.</p>
					</li>
				</ul>

				{/* <!------------ SORTIGN ----------------------> */}
				<ul className='sorting'>
					<li className='sorting_by sorting_by_active'><button data-sort='all' onClick={(btn) => sortWorks(btn, setWorks)}>Все</button></li>
					<li className='sorting_by'><button data-sort='calculator' onClick={(btn) => sortWorks(btn, setWorks)}>Калькулятори</button></li>
					<li className='sorting_by'><button data-sort='timer' onClick={(btn) => sortWorks(btn, setWorks)}>Таймери</button></li>
					<li className='sorting_by'><button data-sort='generator' onClick={(btn) => sortWorks(btn, setWorks)}>Генератори</button></li>
					<li className='sorting_by'><button data-sort='game' onClick={(btn) => sortWorks(btn, setWorks)}>Ігри</button></li>
					<li className='sorting_by'><button data-sort='other' onClick={(btn) => sortWorks(btn, setWorks)}>Інше</button></li>
				</ul>
	
				{/* <!------------ MENU ----------------------> */}
				<ul className="block_menu_p">
					{works.map((work, i) => <Work key={i} work={work} title={work.nameUA} lang={'/ua'} />)}
				</ul>
			</section>
		);
	}
}



function Work({work, title, lang}) {
	return (
		<li>
			<Link className={`but ${work.className} ${work.status}`} to={`${lang}/works/${work.link}`}>
				<img className='project_background' src={window.location.origin+work.image} alt={work.alt} />
				<span className="light_dark">{title}</span>
			</Link>	
		</li>		
	);
}