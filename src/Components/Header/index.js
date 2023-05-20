import { Link } from "react-router-dom";
import { showMenuWindow } from "../../scripts/Header/burgerMenu";

import logo from '../../images/logo.png';
import './styles.css';



export default function Header({lang}) {
	if (lang==='EN') {
		return (
		  	<header id="head" className="head">
			  	<div className="form_in_head"> </div>
  
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
				<div className="form_in_head"></div>
	
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