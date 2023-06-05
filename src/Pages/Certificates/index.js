import { useContext } from "react";
import { Section } from "../../components/index.js";
import { OptionContext } from "../../scripts/index";

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
    const {options} = useContext(OptionContext);

    return (
        <section className="div cer" id="certificates">
            {/* __________ TITLE _____________________ */}
            <h1 className="title light_dark">{options.language==='EN'? 'Certificates': options.language==='UA'? 'Сертифікати': null}</h1>
            
            {/* __________ MENU NOT TECHNICAL IT _____________________ */}
            <Section object={it} lang={options.language} />
            {/* __________ MENU LAHGUAGES _____________________ */}
            <Section object={languages} lang={options.language} />
        </section>
    );
}