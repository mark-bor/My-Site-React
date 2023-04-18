import { ConfirmKey } from "../../../scripts/SendOut/confirmKey";

import "./styles.css";



export default function InputForAccessCard({lang, set}) {
    if (lang==='EN') {
        return (
            <div className="access_card_container">
                <div className="access_card">
                    <label className="access_label">
                        <span>Input access key:</span>
                        <input 
                            id="input_for_access" 
                            className="input_for_access" 
                            type={'password'}
                            name="access key"
                            autoFocus
                            off="true"
                        />
                    </label>
                    <div className="cancel_and_confirm">
                        <button className="btn_confirm" onClick={() => ConfirmKey(set)}>Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
    
    if (lang==='UA') {
        return (
            <div className="access_card_container">
                <div className="access_card">
                    <label className="access_label">
                        <span>Введіть ключ доступу:</span>
                        <input 
                            id="input_for_access"
                            className="input_for_access" 
                            type={'password'}
                            name="ключ доступу"
                            autoFocus
                            off="true"
                        />
                    </label>
                    <div className="cancel_and_confirm">
                        <button className="btn_confirm" onClick={() => ConfirmKey(set)}>Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}
