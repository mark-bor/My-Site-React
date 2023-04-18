import { useRouteError } from "react-router-dom";
import { setErrorPageColor } from "../../scripts/ErrorPage/setErrorPageColor";

import "./styles.css";



export default function ErrorPage({lang, position}) {
	const error = useRouteError();
  	console.error(error);



	if (lang==='EN') {
		return (
			<article id="window_error" className={`error_background ${setErrorPageColor()}`} style={{"position": position}}>
				<section className="window_error">
					{/* <button id="close_error" className="close_error">
						<span></span>
						<span></span>
					</button> */}
					
					<h2 className="message_error">Error happened</h2>
					<p className="error_status">
						<span className="error_code">{error.status}</span>
						<span>{error.statusText? '-': null}</span>
						{error.statusText}
					</p>
					<p className="error_message">{error.message}</p>
				</section>
			</article>
		);
	}

	if (lang==='UA') {
		return (
			<article id="error_background" className="error_background" style={{"position": position}}>
				<section id="window_error" className={`window_error ${setErrorPageColor()}`}>
					<h2 className="message_error">Сталась помилка</h2>
					<p className="error_status">
						<span className="error_code">{error.status}</span>
						<span>{error.statusText? '-': null}</span>
						{error.statusText}
					</p>
					<p className="error_message">{error.message}</p>
				</section>
			</article>
		);
	}
}