import "./styles.css";

export default function InputForAccessCard({lang, set}) {
    
    function ConfirmKey() {
        const inputForAccess = document.getElementById('input_for_access');

        if (inputForAccess.value!=='y9V1wV') {
            inputForAccess.classList.add('input_for_access_no');
            return;
        }
        
        inputForAccess.classList.remove('input_for_access_no');
        inputForAccess.classList.add('input_for_access_yes');
        setTimeout(() => set(true), 700);
    }

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
                        <button className="btn_confirm" onClick={ConfirmKey}>Confirm</button>
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
                        <button className="btn_confirm" onClick={ConfirmKey}>Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}
