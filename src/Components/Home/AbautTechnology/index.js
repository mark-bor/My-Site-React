import { useContext } from "react";
import { 
	OptionContext,
    closeWindow
} from "../../../scripts/index"

import "./styles.css"



export default function AboutTechnology({content, set}) {
    const {options} = useContext(OptionContext);

    const setContent = () => {
        if (options.language==='EN') {
            return content.informationEN;
        }
        if (options.language==='UA') {
            return content.informationUA;
        }
    }


    if (options.language==='EN') {
        return (
            <div className="about_technology_div" onClick={(elem) => closeWindow(elem, set)}>
                <section className="about_technology">
                    <h2 className="technology_name">{content.title}</h2>
                    <p className="inform_abaut_technology">{setContent}</p>
                    <button className="close_inform" onClick={() => set(false)}>Close</button>
                </section>
            </div>
        );
    }

    if (options.language==='UA') {
        return (
            <div className="about_technology_div" onClick={(elem) => closeWindow(elem, set)}>
                <section className="about_technology">
                    <h2 className="technology_name">{content.title}</h2>
                    <p className="inform_abaut_technology">{setContent}</p>
                    <button className="close_inform" onClick={() => set(false)}>Закрити</button>
                </section>
            </div>
        );
    }
}