import React from "react";

import "./styles.css";



class Certificate extends React.Component {
	constructor({certificate, lang}){
		super();
		this.state = {
			...certificate,
			lang: lang
		}
	}

	focus(elem) {
		if (elem.target.className === 'block_text_0') {
			elem.target.className = 'block_text_0_T';
		}
	}

	blur(elem) {
		if (elem.target.className === 'block_text_0_T') {
			elem.target.className = 'block_text_0';
		}
	}

	language() {
		if (this.state.lang==='EN') {
			return this.state.courseEN;
		}
		if (this.state.lang==='UA') {
			return this.state.courseUA;
		}
	}

	render() {
		return (
			<li>
				<button className="block_text_0" onFocus={this.focus} onBlur={this.blur} name={this.language()}>
					<div className="block0" style={this.state.styles}>
						<h3 className="data_from_certificate course">{this.language()}</h3>
						<hr className="data_from_certificate line" />
						<h4 className="data_from_certificate company">{this.state.company}</h4>
					</div>
					<object className="text0" type="application/pdf" aria-label={this.language()} data={this.state.file} />
				</button>
			</li>
		);
	}
}

export default Certificate;