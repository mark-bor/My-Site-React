import browning from "../../Images/browning.png";

export default function MachineGun({lang}) {
    if (lang==='EN') {
        return (
            <section id="machine_gun_in_main_menu_section" className="section_in_main_menu">
                
                <figure className="machine_gun_image">
                    <img id="machine_gun_image" src={browning} alt="machine gun" width="230" />
                    <figcaption id="machine_gun_name" className="wepon_name">M2 Browning</figcaption>
                </figure>

                <ul className="change_wepon">
                    <li><button id="select_machine_gun_browning" className="select_wepon" name="abrams"></button></li>
                    <li><button id="select_machine_gun_mg-42" className="select_wepon" name="leopard"></button></li>
                </ul>

                <table className="table_whith_characteristics">
                    <caption className="table_name">Characteristics</caption>
                    <tbody>
                        <tr>
                            <td className="characteristic_name">Number of bullets</td>
                            <td className="characteristic">200x</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        );
    }
}