import { Link } from "react-router-dom";
import { siteColor, setColor } from '../../scripts/site_color.js';
import logo from './Images/logo.png';
import './header.css';



const hiddenLanguage = () => document.getElementById('select_lang').className='select_lang';
const mouseDown = (btn) => btn.target.style.color='#457FD6';



export default function Header({lang}) {
	if (lang==='EN') {
		return (
		  	<header id="head" className="head">
			  	<div className="form_in_head">
				  	<div className="select_language">
						<button className="language english" onMouseDown={mouseDown} onMouseUp={mouseUp}>EN</button>
						<ul id='select_lang' className='select_lang'>
						  	{/* <li className="puncts"><button data-lang="EN" onClick={changeLanguage}>EN</button></li>
						  	<li className="puncts"><button data-lang="UA" onClick={changeLanguage}>UA</button></li> */}
 						  	<li className="puncts"><Link onClick={hiddenLanguage} to={`/`}>EN</Link></li>
						  	<li className="puncts"><Link onClick={hiddenLanguage} to={`/ua`}>UA</Link></li>
					  	</ul>
				  	</div>
				  
				  	<label id="sites_color" className="sites_color">
					  	<input 
						  	id="input_in_sites_color" 
						  	className="input_in_sites_color" 
						  	type="checkbox" 
						  	onChange={changeColor}
						/>
					  	<span id="sun_moon" className="sun_moon"><span></span></span>
				  	</label>
			  	</div>
  
			  	<Link className="but" to={'/'} name="logo">
				  	<img className="logo" src={logo} alt="logo" />
			  	</Link>
			  
			  	<div className="menu_burger">
				  	<button id="link" className="link" onClick={showMenuWindow} name="window menu">
					  	<div className="burger"></div>
				  	</button>
			  	</div>
		  	</header>
		);
	}

	if (lang==='UA') {
		return (
			<header id="head" className="head">
				<div className="form_in_head">
					<div className="select_language">
						<button className="language ukrainian" onMouseDown={mouseDown} onMouseUp={mouseUp}>УКР</button>
						<ul id='select_lang' className='select_lang'>
						  	<li className="puncts"><Link onClick={hiddenLanguage} to={`/`}>EN</Link></li>
						  	<li className="puncts"><Link onClick={hiddenLanguage} to={`/ua`}>UA</Link></li>
					  	</ul>
					</div>
					
					<label id="sites_color" className="sites_color">
						<input 
							id="input_in_sites_color" 
							className="input_in_sites_color" 
							type="checkbox" 
							onChange={changeColor}/>
						<span id="sun_moon" className="sun_moon"><span></span></span>
					</label>
				</div>
	
				<Link className="but" to={'/ua/'} name="logo">
					<img className="logo" src={logo} alt="logo" />
				</Link>
				
				<div className="menu_burger">
					<button id="link" className="link" onClick={showMenuWindow} name="window menu">
						<div className="burger"></div>
					</button>
				</div>
			</header>
		);
	}
}



function changeColor(color) {
	color.target.checked===false ? setColor('sun') : setColor('moon');
	siteColor();
}

function mouseUp(btn) {
	btn.target.style.color='';
	const selectLang = document.getElementById('select_lang');
	selectLang.className==='select_lang' ? selectLang.className='select_lang_active' : selectLang.className='select_lang'
}

/*------------- MENU BURGER AND WINDOW --------------*/
export function showMenuWindow() {
	const link = document.querySelector('#link');
	const menu = document.querySelector('#menu_window');

	link.classList.toggle('link_active');
	menu.classList.toggle('transMenu');
	menu.classList.toggle('transMenu_S');
}