import right_control from "../../Images/right_control.png";



export default function TowerAndFire({lang}) {
    if (lang==='EN') {
        return (
            <section id="tower_and_fire" className="part_of_explanation_card">
                <h3>Tower rotation and fire</h3>
    
                <img src={right_control} alt="right controller" width="200" />
    
                <ul className="explanation_list">
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation blocking_tower"></span>
                        <span className="defis"> - </span>
                        <p>Blocking the rotation of the tower (button Q on keyboard)</p>
                    </li>
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation rotate_left"></span>
                        <span className="defis"> - </span>
                        <p>Tower rotate to left (On keyboard - button "A")</p>
                    </li>
                    <li className="lists_element">
                        <span className="element_for_explanation_navigation rotate_right"></span>
                        <span className="defis"> - </span>
                        <p>Tower rotate to right (On keyboard - button "D")</p>
                    </li>
    
                    <li className="lists_element">
                        <span className="element_for_explanation_fire">&#128293;</span>
                        <span className="defis"> - </span>
                        <p>Fire (On keyboard - button "W")</p>
                    </li>
                    
                    <li className="lists_element">
                        <span id="explanation_fire_from_MG" className="element_for_explanation_fire"></span>
                        <span className="defis"> - </span>
                        <p>Fire from machine gun (On keyboard - button "E")</p>
                    </li>
                </ul>
            </section>
        );
    }
}