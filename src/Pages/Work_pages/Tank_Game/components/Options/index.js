import { useContext } from "react";
import { OptionContext } from "../../../../../scripts/index";

import "./styles.css";



export default function Options() {
    const setVolume = () => localStorage.getItem('volume') ? localStorage.getItem('volume') : '0%';
    const {options} = useContext(OptionContext);


    if (options.language==='EN') {
        return (
            <section id="options" className="section_in_menu_tank_game">

                <h2 className="menu_title">Options</h2>
                
                <section className="section_in_options">

                    <h3 className="section_title">Sound</h3>

                    {/* <audio id="music_one" src="./Sounds/Creedence_Clearwater_Revival-Fortunate_Son.mp3"></audio>
                    <audio id="music_two" src="./Sounds/Jefferson_Airplane-Somebody_To_Love.mp3"></audio>
                    <audio id="music_three" src="./Sounds/James_Brown-I_Got_You_(I Feel Good).mp3"></audio> */}

                    <div className="global_sound">
                        <div className="block_with_management_body">
                            <button id="more_sounds" className="more_sounds" onClick={showSounds}></button>
                            <label className="global_volume" htmlFor="volume">
                                <input 
                                    id="volume" 
                                    type="range" 
                                    name="volume" 
                                    defaultValue={setVolume()} 
                                    onInput={changeVolume}/>
                                <span id="volume_number" className="volume_number">{setVolume()}%</span>
                            </label>
                        </div>
                        
                        <div id="detailed_sounds" className="detailed_sounds">
                            <label className="detailed_volume" htmlFor="volume_motor">
                                <span className="label">Tank motor</span>
                                <input id="volume_motor" type="range" name="volume" defaultValue={setVolume()} />
                            </label>
                            <label className="detailed_volume" htmlFor="volume_move">
                                <span className="label">Tank movement</span>
                                <input id="volume_move" type="range" name="volume" defaultValue={setVolume()} />
                            </label>
                            <label className="detailed_volume" htmlFor="volume_rotate_tower">
                                <span className="label">Tower</span>
                                <input id="volume_rotate_tower" type="range" name="volume" defaultValue={setVolume()} />
                            </label>
                            <label className="detailed_volume" htmlFor="volume_fire_from_g">
                                <span className="label">Fire from gun</span>
                                <input id="volume_fire_from_g" type="range" name="volume" defaultValue={setVolume()} />
                            </label>
                            <label className="detailed_volume" htmlFor="volume_fire_from_mg">
                                <span className="label">Machine gun</span>
                                <input id="volume_fire_from_mg" type="range" name="volume" defaultValue={setVolume()} />
                            </label>
                            <label className="detailed_volume" htmlFor="volume_music">
                                <span className="label">Music</span>
                                <input id="volume_music" type="range" name="volume" defaultValue={setVolume()} />
                            </label>
                        </div>
                    </div>
                </section>

                <section className="section_in_options">

                    <h3 className="section_title">Game controllers</h3>

                    <div className="block_with_management_body">
                        <label className="hide_controllers_label" htmlFor="hide_controllers">
                            <span className="hide_controllers_explanation">
                                <span>Without<br />controllers</span>
                                <span>With<br />controllers</span>
                            </span>
                            <input 
                                id="hide_controllers" 
                                className="hide_controllers" 
                                type="checkbox" 
                                name="with or without controllers" 
                                defaultChecked={localStorage.getItem('controllers')==='hidden'}
                                onChange={hideControllers} /> 
                            <span className="thumb_in_hide_controllers"></span>
                        </label>
                    </div>
                </section>
            </section>
        );
    }
}



function showSounds(btn) {
    btn.target.classList.toggle('more_sounds_active');
    document.getElementById('detailed_sounds').classList.toggle('detailed_sounds_show');
}

function changeVolume(range) {
    const globalVol = range.target.value;
    document.getElementById('volume_number').innerHTML = `${globalVol}%`;
    localStorage.setItem('volume', globalVol);

    const volumeMotor = document.getElementById('volume_motor');
    const volumeMove = document.getElementById('volume_move');
    const volumeRotateTower = document.getElementById('volume_rotate_tower');
    const volumeForeG = document.getElementById('volume_fire_from_g');
    const volumeForeMG = document.getElementById('volume_fire_from_mg');
    
    volumeMotor.value = Number(volumeMotor.value) + (globalVol - volumeMotor.value);
    volumeMove.value = Number(volumeMove.value) + (globalVol - volumeMove.value);
    volumeRotateTower.value = Number(volumeRotateTower.value) + (globalVol - volumeRotateTower.value);
    volumeForeG.value = Number(volumeForeG.value) + (globalVol - volumeForeG.value);
    volumeForeMG.value = Number(volumeForeMG.value) + (globalVol - volumeForeMG.value);

    const volumeMusic = document.getElementById('volume_music');
    volumeMusic.value = Number(volumeMusic.value) + (globalVol - volumeMusic.value);

    // sounds.tankMotor.volume=volumeMotor.value/100/5*1;
    // sounds.tankMove.volume=volumeMove.value/100;
    // sounds.towerRotate.volume=volumeRotateTower.value/100;

    // sounds.musicOne.volume=volumeMusic.value/100;
    // sounds.musicTwo.volume=volumeMusic.value/100;
    // sounds.musicThree.volume=volumeMusic.value/100;
}

function hideControllers(element) {
    if (element.target.checked) {
        document.getElementById('position_left').classList.add('position_left_hidden');
        document.getElementById('position_right').classList.add('position_right_hidden');
        localStorage.setItem('controllers', 'hidden');
    } else {
        document.getElementById('position_left').classList.remove('position_left_hidden');
        document.getElementById('position_right').classList.remove('position_right_hidden');
        localStorage.setItem('controllers', 'visible');
    }
}