import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./style.css";


export default function Works({lang}) {
	const [works, setWorks] = useState([]);

	useEffect(() => {
		fetch(`${window.location.origin}/JSON/works.json`)
		.then((res) => res.json())
		.then((res) => setWorks(res))
		.catch((err) => console.log(err));
	}, [setWorks]);

	function sortWorks(btn) {
		document.querySelectorAll('.sorting_by').forEach(elem => elem.classList.remove('sorting_by_active'));
		btn.target.parentElement.classList.add('sorting_by_active');
		document.getElementById('sorting').classList.remove('sorting_open');
		getWorks(btn.target.dataset.sort, setWorks);
	}

	if (lang==='EN') {
		return (
			<section className="div wor" id="works">
				{/* <!------------ TITLE ----------------------> */}
				<h1 className="title light_dark">Works</h1>

				{/* <!------------ LEGEND ----------------------> */}
				<ul className="legend">
					<li className="leg_el" onClick={() => sortByColor('open', setWorks)}>
						<button id="blue" className="color"></button>
						<p> - in developing proces.</p>
					</li>
					<li className="leg_el" onClick={() => sortByColor('close', setWorks)}>
						<button id="green" className="color"></button>
						<p> - to complete.</p>
					</li>
				</ul>
				
				{/* <!------------ FILTER ----------------------> */}
				<button 
					className='open_filters' 
					onClick={() => document.getElementById('sorting').classList.toggle('sorting_open')}
				></button>

				{/* <!------------ SORTIGN ----------------------> */}
				<ul id='sorting' className='sorting'>
					<li className='sorting_by sorting_by_active'><button data-sort='all' onClick={sortWorks}>All</button></li>
					<li className='sorting_by'><button data-sort='calculator' onClick={sortWorks}>Calculators</button></li>
					<li className='sorting_by'><button data-sort='timer' onClick={sortWorks}>Timers</button></li>
					<li className='sorting_by'><button data-sort='generator' onClick={sortWorks}>Generators</button></li>
					<li className='sorting_by'><button data-sort='game' onClick={sortWorks}>Games</button></li>
					<li className='sorting_by'><button data-sort='other' onClick={sortWorks}>Other</button></li>
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
				<h1 className="title light_dark">Роботи</h1>

				{/* <!------------ LEGEND ----------------------> */}
				<ul className="legend">
					<li className="leg_el" onClick={() => sortByColor('open', setWorks)}>
						<button id="blue" className="color"></button>
						<p> - in developing proces.</p>
					</li>
					<li className="leg_el" onClick={() => sortByColor('close', setWorks)}>
						<button id="green" className="color"></button>
						<p> - to complete.</p>
					</li>
				</ul>

				{/* <!------------ SORTIGN ----------------------> */}
				<ul className='sorting'>
					<li className='sorting_by sorting_by_active'><button data-sort='all' onClick={sortWorks}>Все</button></li>
					<li className='sorting_by'><button data-sort='calculator' onClick={sortWorks}>Калькулятори</button></li>
					<li className='sorting_by'><button data-sort='timer' onClick={sortWorks}>Таймери</button></li>
					<li className='sorting_by'><button data-sort='generator' onClick={sortWorks}>Генератори</button></li>
					<li className='sorting_by'><button data-sort='game' onClick={sortWorks}>Ігри</button></li>
					<li className='sorting_by'><button data-sort='other' onClick={sortWorks}>Інше</button></li>
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
				<img src={window.location.origin+work.image} alt={work.alt} />
				<span className="light_dark">{title}</span>
			</Link>	
		</li>		
	);
}



function getWorks(sortBy, set) {
	document.querySelectorAll('.leg_el').forEach(elem => elem.classList.remove('leg_el_active'));

	fetch(`${window.location.origin}/JSON/works.json`)
	.then((res) => res.json())
	.then((res) => sortBy==='all' ? set(res) : set(res.filter((element) => element.type===sortBy)))
	.catch((err) => console.log(err));
}

function sortByColor(status, set) {
	document.querySelectorAll('.sorting_by').forEach(elem => elem.classList.remove('sorting_by_active'));

	fetch(`${window.location.origin}/JSON/works.json`)
	.then((res) => res.json())
	.then((res) => set(res.filter(element => element.status===status)))
	.catch((err) => console.log(err));
}
