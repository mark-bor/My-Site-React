import left_control from "../../Images/left_control.png";



export default function Driving({lang}) {
    if (lang==='EN') {
        return (
            <section id="driving" className="part_of_explanation_card">
                <h3>Driving on a tank</h3>
    
                <img src={left_control} alt="left controller" width="200" />
    
                <ul className="explanation_list">
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation driving_up"></span>
                        <span className="defis"> - </span>
                        <p>Tank move straight (On keyboard - button "Arrow Up")</p>
                    </li>
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation driving_down"></span>
                        <span className="defis"> - </span>
                        <p>Tank move back (On keyboard - button "Arrow Down")</p>
                    </li>
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation driving_left"></span>
                        <span className="defis"> - </span>
                        <p>Tank rotate to left (On keyboard - button "Arrow Left")</p>
                    </li>
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation driving_right"></span>
                        <span className="defis"> - </span>
                        <p>Tank rotate to right (On keyboard - button "Arrow Right")</p>
                    </li>
                </ul>
            </section>
        );
    }
}