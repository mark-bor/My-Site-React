import { useState, useEffect, useContext } from "react";
import { WorkCard } from "../../components/index";
import { 
	OptionContext,
	sortByColor, sortWorks
} from "../../scripts/index";

import "./style.css";


export default function Works() {
	const [works, setWorks] = useState([]);
	const {options} = useContext(OptionContext);

	useEffect(() => {
		fetch(`${window.location.origin}/JSON/works.json`)
		.then((res) => res.json())
		.then((res) => setWorks(res))
		.catch((err) => console.log(err));
	}, [setWorks]);

	

	if (options.language==='EN') {
		return (
			<section className="div wor" id="works">
				{/* <!------------ LEGEND ----------------------> */}
				<ul className="legend">
					<li 
						id="blue" className="legend_element light_dark" 
						onClick={() => sortByColor('open', setWorks)}
					>in developing proces</li>
					<li 
						id="green" className="legend_element light_dark" 
						onClick={() => sortByColor('close', setWorks)}
					>to complete</li>
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
				<ul className="works_list">
					{works.map((work, i) => <WorkCard key={i} work={work} title={work.nameEN} />)}
				</ul>
			</section>
		)
	}
	
	if (options.language==='UA') {
		return (
			<section className="div wor" id="works">
				{/* <!------------ TITLE ----------------------> */}
				<h1 className="title light_dark">Роботи</h1>

				{/* <!------------ LEGEND ----------------------> */}
				<ul className="legend">
					<li 
						id="blue" className="legend_element light_dark"
						onClick={() => sortByColor('open', setWorks)}
					>в процесі розробкиі</li>
					<li 
						id="green" className="legend_element light_dark"
						onClick={() => sortByColor('close', setWorks)}
					>завершено</li>
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
					{works.map((work, i) => <WorkCard key={i} work={work} title={work.nameUA} />)}
				</ul>
			</section>
		);
	}
}
