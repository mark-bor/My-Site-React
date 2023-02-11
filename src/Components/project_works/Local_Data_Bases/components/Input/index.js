import "./style.css";

export let forChange;

export default function InputForChange({lang, set, save, valueD}) {
    if (lang==='EN') {
        return (
            <div className="input_card_container">
                <div className="input_card">
                    <textarea 
                        className="input_for_change" 
                        defaultValue={valueD}
                        onChange={(inp) => forChange=inp.target.value} 
                    ></textarea>
                    <div className="cancel_and_save">
                        <button className="btn_cancel" onClick={() => set(false)}>Cancel</button>
                        <button className="btn_save" onClick={() => save()}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
    
    if (lang==='UA') {
        return (
            <div className="input_card_container">
                <div className="input_card">
                    <textarea 
                        className="input_for_change" 
                        defaultValue={valueD}
                        onChange={(inp) => forChange=inp.target.value} 
                    ></textarea>
                    <div className="cancel_and_save">
                        <button className="btn_cancel" onClick={() => set(false)}>Скасувати</button>
                        <button className="btn_save" onClick={() => save()}>Зберегти</button>
                    </div>
                </div>
            </div>
        );
    }
}