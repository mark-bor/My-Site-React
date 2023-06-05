import { useContext } from "react";
import { Link } from "react-router-dom";
import { OptionContext, showMenuWindow } from "../../scripts/index";

import logo from '../../images/logo.png';
import './styles.css';



export default function Header() {
	const {options} = useContext(OptionContext);


	if (options.language==='EN') {
		return (
		  	<header className="header">
			  	<div className="helper"></div>
  
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

	if (options.language==='UA') {
		return (
			<header className="header">
				<div className="helper"></div>
	
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
}