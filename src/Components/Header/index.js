import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { 
	OptionContext,
	showMenuWindow,
	changeColor, colorInputDefCheck
} from "../../scripts/index";

import logo from '../../images/logo.png';
import './styles.css';



export default function Header() {
	const [page, setPage] = useState('home');
	const {options, setOptions} = useContext(OptionContext);


	if (options.language==='EN') {
		return (
		  	<header className="header">
			  	<div className="helper"></div>
  
			  	<Link className="but" to={'/'} name="logo">
				  	<img className="logo" src={logo} alt="logo" />
			  	</Link>

				<nav className="navigation">
					<ul className="list_in_navigation">
						<li>
							<Link 
								className="header_links" to={'/'} title="Head page" 
								style={{borderBottom: page==='home' ? '1px solid #61DAFB' : 'none'}} 
								onClick={() => setPage('home')}
							>Home</Link>
						</li>
						<li>
							<Link 
								className="header_links" to={'/works'} title="My works" 
								style={{borderBottom: page==='works' ? '1px solid #61DAFB' : 'none'}}
								onClick={() => setPage('works')}
							>Works</Link>
						</li>
						<li>
							<Link 
								className="header_links" to={'/certificates'} title="Certificates" 
								style={{borderBottom: page==='certificates' ? '1px solid #61DAFB' : 'none'}}
								onClick={() => setPage('certificates')}
							>Certificates</Link>
						</li>
						<li>
							<Link 
								className="header_links" to={'/aboutme'} title="Contacts" 
								style={{borderBottom: page==='aboutme' ? '1px solid #61DAFB' : 'none'}}
								onClick={() => setPage('aboutme')}
							>About me</Link>
						</li>
					</ul>
				</nav>

			  	<div className="menu_burger">
					<input id="select_language_input" className="select_language_input" type="checkbox" />
					<label className="select_language" htmlFor='select_language_input'>
						<span className="language english">EN</span>
						<ul id='select_lang' className='select_lang'>
							<li className="puncts" onClick={() => setOptions({...options, language: 'EN'})}>EN</li>
							<li className="puncts" onClick={() => setOptions({...options, language: 'UA'})}>UA</li>
						</ul>
					</label>

					<label id="sites_color" className="sites_color">
						<input 
							id="input_in_sites_color" className="input_in_sites_color" 
							type="checkbox" defaultChecked={colorInputDefCheck()} onChange={changeColor}
						/>
						<span id="sun_moon" className="sun_moon"><span></span></span>
					</label>

				  	<button id="link" className="link" onClick={showMenuWindow} name="window menu">
					  	<div className="burger"></div>
				  	</button>
			  	</div>
		  	</header>
		);
	}

	if (options.language==='UA') {
		return (
			<header className="header">
				<div className="helper"></div>
	
				<Link className="but" to={'/'} name="logo">
					<img className="logo" src={logo} alt="logo" />
				</Link>

				<nav className="navigation">
					<ul className="list_in_navigation">
						<li>
							<Link 
								className="header_links" to={'/'} title="Head page" 
								style={{borderBottom: page==='home' ? '1px solid #61DAFB' : 'none'}} 
								onClick={() => setPage('home')}
							>Головна</Link>
						</li>
						<li>
							<Link 
								className="header_links" to={'/works'} title="My works" 
								style={{borderBottom: page==='works' ? '1px solid #61DAFB' : 'none'}}
								onClick={() => setPage('works')}
							>Роботи</Link>
						</li>
						<li>
							<Link 
								className="header_links" to={'/certificates'} title="Certificates" 
								style={{borderBottom: page==='certificates' ? '1px solid #61DAFB' : 'none'}}
								onClick={() => setPage('certificates')}
							>Сертифікати</Link>
						</li>
						<li>
							<Link 
								className="header_links" to={'/aboutme'} title="Contacts" 
								style={{borderBottom: page==='aboutme' ? '1px solid #61DAFB' : 'none'}}
								onClick={() => setPage('aboutme')}
							>Про мене</Link>
						</li>
					</ul>
				</nav>
				
				<div className="menu_burger">
					<input id="select_language_input" className="select_language_input" type="checkbox" />
					<label className="select_language" htmlFor='select_language_input'>
						<span className="language ukrainian">UA</span>
						<ul id='select_lang' className='select_lang'>
							<li className="puncts" onClick={() => setOptions({...options, language: 'EN'})}>EN</li>
							<li className="puncts" onClick={() => setOptions({...options, language: 'UA'})}>UA</li>
						</ul>
					</label>

					<label id="sites_color" className="sites_color">
						<input 
							id="input_in_sites_color" className="input_in_sites_color" 
							type="checkbox" defaultChecked={colorInputDefCheck()} onChange={changeColor}
						/>
						<span id="sun_moon" className="sun_moon"><span></span></span>
					</label>

					<button id="link" className="link" onClick={showMenuWindow} name="window menu">
						<div className="burger"></div>
					</button>
				</div>
			</header>
		);
	}
}