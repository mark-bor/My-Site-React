import { Component } from "react";

import { buttonStyle } from "../../../scripts/Certificates/service.js";
import Certificate from "../Certificate/index.js";
import Checkbox from "../Checkbox/index.js";

import left from "../../../Images/Left.png";
import right from "../../../Images/Right.png";

import "./styles.css";



export let widthCert;

export default class Section extends Component {
    constructor({object, certificates, lang}) {
        super();
		this.state = {
            object: object,
            certificates: [],
            lang: lang
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    mouseDown(btn) {
        btn.target.style.transform='scale(0.9)';
    }
    
    btnLeft(btn, object) {
        btn.target.style.transform='';
        const len = this.state.certificates.length;
        const slider = document.getElementById(`menu_block_text_${object.object.type}`);
        if (slider.style.transform === `translateX(${-1*widthCert*(len-len)}px)`) {
            return;
        } else if (slider.style.transform === `translateX(${(-1)*widthCert*object.object.index}px)`){
            object.object.index--;
            slider.style.transform = `translateX(${(-1)*widthCert*object.object.index}px)`;
        }
        buttonStyle(object.object, len);
    }
    
    btnRight(btn, object) {
        btn.target.style.transform='';
        const len = this.state.certificates.length;
        const slider = document.getElementById(`menu_block_text_${object.object.type}`);
        if (slider.style.transform === `translateX(${(-widthCert*(len-1))}px)`){
            return;
        } else if (slider.style.transform === `translateX(${(-widthCert*object.object.index)}px)`){
            object.object.index++;
            slider.style.transform = `translateX(${(-widthCert*object.object.index)}px)`;
        }
        buttonStyle(object.object, len);
    }

    componentDidMount() {
        widthCert=document.querySelector('.buttonCert').clientWidth;

        fetch(this.state.object.url)
        .then(res => res.json())
        .then(res => this.setState(() => ({certificates: [...res]})))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <section className="buttonCert">
                <h3 className="title-sert light_dark">
                    {
                        this.state.lang==='EN' ? this.state.object.en : 
                        this.state.lang==='UA' ? this.state.object.ua : 
                        null
                    }
                </h3>

                <div id="button_certificate" className="block_menu">
                    <button 
                        id={"left_"+this.state.object.type} className="button btn_left" 
                        onMouseDown={this.mouseDown} 
                        onMouseUp={(btn) => this.btnLeft(btn, this.state)} 
                        name="left">
                        <img 
                            id={"to_L-"+this.state.object.type} className="to_L" 
                            src={left} alt="arrow left" style={{width: "0"}} />
                    </button>

                    <button 
                        id={"right_"+this.state.object.type} className="button btn_right" 
                        onMouseDown={this.mouseDown} 
                        onMouseUp={(btn) => this.btnRight(btn, this.state)} 
                        name="right">
                        <img 
                            id={"to_R-"+this.state.object.type} className="to_R" 
                            src={right} alt="arrow right" style={{width: "100%"}} />
                    </button>

                    <ul id={"menu_block_text_"+this.state.object.type} className="menu_block_text" style={{transform: "translateX(0px)"}}>
                        {this.state.certificates.map((cert, ind) => <Certificate key={ind} certificate={cert} lang={this.state.lang}/>)}
                    </ul>
                </div>

                <ul className={"checkbox_block_"+this.state.object.type}>
                    {this.state.certificates.map((cert, ind) => 
                        <Checkbox 
                            key={ind} 
                            certificate={cert} 
                            lang={this.state.lang} 
                            object={this.state.object} 
                            len={this.state.certificates.length}
                        />
                    )}
                </ul>
            </section>
        );
    }
}