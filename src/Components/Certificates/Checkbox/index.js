import React from "react";
import { buttonStyle } from "../../../scripts/Certificates/service.js";
import { widthCert } from "../Section/index.js";

import "./styles.css"



class Checkbox extends React.Component {
    constructor({certificate, lang, object, len}) {
        super();
		this.state = {
            certificate: {...certificate},
            lang: lang,
            object: object, 
            len: len
        }
    }
    
    click(elem, object) {        
        const slider = document.getElementById(`menu_block_text_${object.object.type}`);
        if (slider.style.transform !== `translateX(${-1*widthCert*elem.target.dataset.cert}px)`){
            object.object.index = elem.target.dataset.cert;
            slider.style.transform = `translateX(${-1*widthCert*object.object.index}px)`;
        }
        buttonStyle(object.object, this.state.len);
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
                <button 
                    id={this.state.certificate.id+"_"+this.state.object.type} 
                    className={`checkbox_${this.state.object.type} ${this.state.certificate.id===1? 'active': ''}`} 
                    onClick={(btn) => this.click(btn, this.state)}
                    name={this.language()}
                    data-cert={this.state.certificate.id-1}
                >
                </button>
            </li>
        );
    }
}


export default Checkbox;