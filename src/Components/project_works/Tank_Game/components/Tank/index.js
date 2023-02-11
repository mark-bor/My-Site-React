import { useState, useEffect } from "react";
import * as managementFile from "../../scripts/management_file.js"

import "./styles.css"



export default function Tank({lang}) {
    const [select, setSelect] = useState(true);
    const [taknsBTN, setTaknsBTN] = useState([]);
    if (!window.localStorage.getItem("tankName")) window.localStorage.setItem("tankName", "M1 Abrams");

    useEffect(() => {
        fetch(`${window.location.origin}/JSON/tanks.json`)
        .then((res) => res.json())
        .then((res) => setTaknsBTN([...res]));
        getTank(setSelect, window.localStorage.getItem("tankName"));
    }, [setSelect, setTaknsBTN]);

    

    if (lang==='EN') {
        return (
            <section id="tank_in_main_menu_section" className="section_in_main_menu">

                <div className="tank_image">
                    <img id="tank_image" src='' alt="tank" width="350" />
                    <div className="block_with_name_and_button">
                        <img id="country_flag" src="" alt="country flag" width={30} />
                        <h3 id="tank_name" className="wepon_name">Loading</h3>
                        {select ? <SelectBTN text={"SELECT"} set={setSelect} /> : null}
                    </div>
                </div>

                <ul className="change_wepon">
                    {taknsBTN.map((elem, i) => <TankBTN key={i} info={elem.info} data={elem.name} set={setSelect} />)}
                </ul>

                <table className="table_whith_characteristics">
                    <caption className="table_name">Characteristics</caption>
                    <tbody>
                        <tr>
                            <td className="characteristic_name">Number of bullets</td>
                            <td className="characteristic"><span id="tank_number_of_bullets"></span>x</td>
                        </tr>
                        <tr>
                            <td className="characteristic_name">Rate of fire</td>
                            <td className="characteristic"><span id="tank_rate_of_fire"></span>rate/min</td>
                        </tr>
                        <tr>
                            <td className="characteristic_name">Recharge speed</td>
                            <td className="characteristic"><span id="tank_recharge_speed"></span>s</td>
                        </tr>
                    </tbody>
                </table>
                
            </section>
        );
    }
}


let tankName;


const SelectBTN = ({text, set}) => {
    return (
        <button id="confirm_selection" className="confirm_selection"
        onClick={() => selsectTank(set)}>
            <span>{text}</span>
        </button>
    );
}

const TankBTN = ({info, data, set}) => {
    return (
        <li><button 
            id={`select_tank_${info.name}`} className="select_wepon" 
            style={{backgroundImage: `url(${window.location.origin+info.url})`}}
            name={info.name} data-tank={data}
            onClick={(elem) => getTank(set, elem.target.dataset.tank)}
        ></button></li>
    );
}



function getTank(set, params) {
    fetch(`${window.location.origin}/JSON/tanks.json`)
    .then((res) => res.json())
    .then((res) => {
        const tank = res.find((elem) => elem.name===params);
        setTank(tank.info);
        tankName=params;
        checkConfirm(params, set);
    });
}

function setTank(object) {
    document.getElementById('tank_image').src = window.location.origin + object.url;
    document.getElementById('country_flag').src = window.location.origin + object.countryFlag;
    document.getElementById('tank_name').innerText = object.name;
    document.getElementById('tank_number_of_bullets').innerText = object.numberOfBullets;
    document.getElementById('tank_rate_of_fire').innerText = object.rateOfFire;
    document.getElementById('tank_recharge_speed').innerText = object.rechargeSpeed;
    [
        ...document.querySelectorAll('.characteristic_name'), 
        ...document.querySelectorAll('.characteristic')
    ].forEach((element) => element.style.borderColor = object.color);
}

const checkConfirm = (name, set) => {
    managementFile.tank.tank?.getInformation().name!==name ? set(true) : set(false);
}

function selsectTank(set) {
    managementFile.changeTank(tankName);
    window.localStorage.setItem("tankName", tankName)
    set(false);
}



// function stopSaund(sound) {
//     setTimeout(() => {
//         sound.pause()
//         soundStor.tankMove.currentTime=2;
//         soundStor.towerRotate.currentTime=2;
//     }, 100);
// }