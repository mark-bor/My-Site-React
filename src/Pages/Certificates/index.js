import { Section } from "../../Components/index.js";

import "./certificates.css";



const it = { 
    index: 0,
    type: "it",
    url: "/JSON/cert-IT.json",
    en: "IT",
    ua: "IT",
};

const languages = { 
    index: 0,
    type: "lang",
    url: "/JSON/cert-Lang.json",
    en: "Languages",
    ua: "Мови",
};

export default function Certificates({lang}) {
    return (
        <section className="div cer" id="certificates">
            {/* __________ TITLE _____________________ */}
            {/* <h1 className="title light_dark">{lang==='EN'? 'Certificates': lang==='UA'? 'Сертифікати': null}</h1> */}
            
            {/* __________ MENU NOT TECHNICAL IT _____________________ */}
            <Section object={it} lang={lang} />
            {/* __________ MENU LAHGUAGES _____________________ */}
            <Section object={languages} lang={lang} />
        </section>
    );
}