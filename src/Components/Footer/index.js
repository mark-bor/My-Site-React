import { useContext } from "react";
import { Link } from "react-router-dom";
import { 
	OptionContext,
} from "../../scripts/index";

import phone from "../../images/phone.jpg";
import mail from "../../images/email.jpg";
import facebook from "../../images/facebook.png";
import telegram from "../../images/telegram.png";
import './footer.css';



export default function Footer() {
	const {options} = useContext(OptionContext);


	if (options.language==='EN') {
		return (
			<footer id="footer" className="footer">
				<Link className="but" to={'/aboutme'}>Contacts</Link>
				<nav className="contacts_C">
					<div className="string_footer">
						<figure className="phone_email">
							<a href="tel:+380957625669">
								<img src={phone} alt="phone" height="30px" />
							</a>
							<figcaption className="phone_email_text">
								<p>+38 095 762 56 69</p>
							</figcaption>
						</figure>
	
						<figure className="phone_email">
							<a target="_blank" rel="noreferrer" href="mailto:mark12bord@gmail.com">
								<img src={mail} alt="email" height="30px" />
							</a>
							<figcaption className="phone_email_text">
								<p>mark12bord@gmail.com</p>
							</figcaption>
						</figure>
					</div>
	
					<div className="string_foot">
						<a className="img_contacts" target="_blank" rel="noreferrer" href="https://www.facebook.com/mark.uvarov.1">
							<img src={facebook} alt="facebook" height="45px" />
						</a>
	
						<a className="img_contacts" target="_blank" rel="noreferrer" href="https://t.me/marchi003">
							<img src={telegram} alt="telegram" height="45px" />
						</a>
					</div>
				</nav>
			</footer>
		);
	}

	if (options.language==='UA') {
		return (
			<footer id="footer" className="footer">
				<Link className="but" to={'/aboutme'} name="Контакти">Контакти</Link>
				<nav className="contacts_C">
					<div className="string_footer">
						<figure className="phone_email">
							<a href="tel:+380957625669">
								<img src={phone} alt="номер телефону" height="30px" />
							</a>
							<figcaption className="phone_email_text">
								<p>+38 095 762 56 69</p>
							</figcaption>
						</figure>
	
						<figure className="phone_email">
							<a href="mailto:mark12bord@gmail.com">
								<img src={mail} alt="пошта" height="30px" />
							</a>
							<figcaption className="phone_email_text">
								<p>mark12bord@gmail.com</p>
							</figcaption>
						</figure>
					</div>
	
					<div className="string_foot">
						<a className="img_contacts" target="_blank" rel="noreferrer" href="https://www.facebook.com/mark.uvarov.1">
							<img src={facebook} alt="фейсбук" height="45px" />
						</a>
	
						<a className="img_contacts" target="_blank" rel="noreferrer" href="https://t.me/marchi003">
							<img src={telegram} alt="телеграм" height="45px" />
						</a>
					</div>
				</nav>
			</footer>
		);
	}
}