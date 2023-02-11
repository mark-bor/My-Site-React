import { useState } from "react";

import InputForChange, { forChange } from "../Input/index.js";

let key, value;
export default function LocalStorageSection({lang}) {
    const [locStorage, setLocStorage] = useState(Object.entries(localStorage));
    const [param, setParam] = useState(false);

    function changeData(btn) {
        key = btn.target.dataset.index;
        value = window.localStorage.getItem(key);
        setParam(true);
    }
    
    function saveChange() {
        if (window.confirm('Do you really want to save this data changes?')) {
            setParam(false);
            localStorage.setItem(key, forChange);
            setLocStorage(Object.entries(localStorage));
        }
    }

    function deleteDataLocStor(btn) {
        if (window.confirm('Do you really want to delete this data?')) {
            localStorage.removeItem(btn.target.dataset.index);
            setLocStorage(Object.entries(localStorage));
        }
    }

    function deleteAllSelectLocStor() {
        if (window.confirm('Do you really want to delete this data?')) {
            const checkboxForSelect = document.querySelectorAll('.loc_store');
            checkboxForSelect?.forEach((elem) => {
                if (elem.checked===true) localStorage.removeItem(elem.dataset.index);
            });
            setLocStorage(Object.entries(localStorage));
            checkboxForSelect?.forEach((elem) => elem.removeAttribute('checked'));
            document.getElementById('functions_list').classList.remove('functions_list_active');
        }
    }

    const setColor = () => window.localStorage.getItem('color')==='moon'? 'data_bases_section_dark': null;

    if (lang==='EN') {
        return (
            <table className={`data_bases_section ${setColor()}`}>
                <caption className="base_name">
                    LocalStorage

                    {param ? <InputForChange lang={lang} param={param} set={setParam} save={saveChange} valueD={value} /> : null}

                    <div className="functions">
                        <ul id="functions_list" className="functions_list">
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.loc_store')?.forEach((elem) => elem.setAttribute('checked', ''))}
                            >Select all</button></li>
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.loc_store')?.forEach((elem) => elem.removeAttribute('checked'))}
                            >Cancel all</button></li>
                            <li><button 
                                className="btn_delete_datas" 
                                onClick={deleteAllSelectLocStor}
                            >Delete</button></li>
                        </ul>
                        <button 
                            className="btn_open_functions" 
                            onClick={() => document.getElementById('functions_list').classList.toggle('functions_list_active')}
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </caption>
                
                <thead>
                    <tr className="data_bases">
                        <td className="checkbox"></td>
                        <th className="key">Key</th>
                        <th className="value">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {locStorage.map((data, ind) => <DatasLocStor key={ind} keyD={data[0]} valueD={data[1]} del={deleteDataLocStor} chan={changeData} />)}
                </tbody>
            </table>
        );
    }
    
    if (lang==='UA') {
        return (
            <table className={`data_bases_section ${setColor()}`}>
                <caption className="base_name">
                    LocalStorage

                    {param ? <InputForChange lang={lang} param={param} set={setParam} save={saveChange} valueD={value} /> : null}

                    <div className="functions">
                        <ul id="functions_list" className="functions_list">
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.loc_store')?.forEach((elem) => elem.setAttribute('checked', ''))}
                            >Вибрати все</button></li>
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.loc_store')?.forEach((elem) => elem.removeAttribute('checked'))}
                            >Скасувати вибір</button></li>
                            <li><button 
                                className="btn_delete_datas" 
                                onClick={deleteAllSelectLocStor}
                            >Видалити</button></li>
                        </ul>
                        <button 
                            className="btn_open_functions" 
                            onClick={() => document.getElementById('functions_list').classList.toggle('functions_list_active')}
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </caption>
                
                <thead>
                    <tr className="data_bases">
                        <td className="checkbox"></td>
                        <th className="key">Ключ</th>
                        <th className="value">Значення</th>
                    </tr>
                </thead>
                <tbody>
                    {locStorage.map((data, ind) => <DatasLocStor key={ind} keyD={data[0]} valueD={data[1]} del={deleteDataLocStor} chan={changeData} />)}
                </tbody>
            </table>
        );
    }
}



function DatasLocStor({keyD, valueD, del, chan}) {
    function selectCheckbox(row) {
        let arr = [];
        document.querySelectorAll('.loc_store').forEach((elem) => {
            if (elem.dataset.index===row) {
                elem.checked===false? elem.setAttribute('checked', ''): elem.removeAttribute('checked');
            }
            if (elem.checked===true) arr=[...arr, elem];
        });
        if (arr.length>0) {document.getElementById('functions_list').classList.add('functions_list_active')} 
        else {document.getElementById('functions_list').classList.remove('functions_list_active');}
    }

    if (keyD) {
        return (
            <tr id={keyD} className="data_bases" onClick={() => selectCheckbox(keyD)}>
                <td className="checkbox">
                    <input className="checkbox_for_select loc_store" type='checkbox' data-index={keyD} />
                </td>
                <td className="key">{keyD}</td>
                <td className="value">{valueD}</td>
                <th className="open_funtions">
                    <button 
                        className="btn_change_functions" 
                        data-index={keyD} 
                        onClick={(btn) => {
                            btn.stopPropagation();
                            chan(btn);
                    }}></button>
                    <button 
                        className="btn_delete_functions" 
                        data-index={keyD} 
                        onClick={(btn) => {
                            btn.stopPropagation();
                            del(btn);
                        }}
                    ></button>
                </th>
            </tr>
        );
    }
}