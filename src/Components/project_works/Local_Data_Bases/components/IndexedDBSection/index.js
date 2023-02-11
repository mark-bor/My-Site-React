import { useState, useEffect } from "react";
import localforage from "localforage";

import InputForChange, { forChange } from "../Input/index.js";

let key, value;
export default function IndexedDBSection({lang}) {
    const [locforage, setLocforage] = useState([]);
    const [param, setParam] = useState(false);

    useEffect(() => {
        localforage.keys().then((res) => setLocforage(Object.entries(res)));
    }, [setLocforage])

    async function changeData(btn) {
        key = btn.target.dataset.index;
        await localforage.getItem(key).then((res) => value = JSON.stringify(res));
        setParam(true);
    }
    
    function saveChange() {
        if (window.confirm('Do you really want to save this data changes?')) {
            setParam(false);
            localforage.setItem(key, forChange);
            localforage.keys().then((res) => setLocforage(Object.entries(res)));
            document.querySelectorAll('.indDB')?.forEach((elem) => elem.removeAttribute('checked'));
            document.getElementById('functions_list_locfor').classList.remove('functions_list_active');
        }
    }

    function deleteData(btn) {
        if (window.confirm('Do you really want to delete this data?')) {
            localforage.removeItem(btn.target.dataset.index);
            localforage.keys().then((res) => setLocforage(Object.entries(res)));
            setTimeout(() => document.querySelectorAll('.indDB')?.forEach((elem) => elem.removeAttribute('checked')), 10);
        }
    }
    
    function deleteAllSelectLocfor() {
        if (window.confirm('Do you really want to delete this data?')) {
            const checkboxForSelect = document.querySelectorAll('.indDB');
            checkboxForSelect?.forEach((elem) => {
                if (elem.checked===true) {
                    localforage.removeItem(elem.dataset.index);
                }
            });
            localforage.keys().then((res) => setLocforage(Object.entries(res)));
            checkboxForSelect?.forEach((elem) => elem.removeAttribute('checked'));
            document.getElementById('functions_list_locfor').classList.remove('functions_list_active');
        }
    }
    
    const setColor = () => window.localStorage.getItem('color')==='moon'? 'data_bases_section_dark': null;
    
    if (lang==='EN') {
        return (
            <table className={`data_bases_section ${setColor()}`}>
                <caption className="base_name">
                    IndexedDB

                    {param ? <InputForChange lang={lang} param={param} set={setParam} save={saveChange} valueD={value} /> : null}

                    <div className="functions">
                        <ul id="functions_list_locfor" className="functions_list">
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.indDB')?.forEach((elem) => elem.setAttribute('checked', ''))}
                            >Select all</button></li>
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.indDB')?.forEach((elem) => elem.removeAttribute('checked'))}
                            >Cancel all</button></li>
                            <li><button className="btn_delete_datas" onClick={deleteAllSelectLocfor}>Delete</button></li>
                        </ul>
                        <button 
                            className="btn_open_functions" 
                            onClick={() => document.getElementById('functions_list_locfor').classList.toggle('functions_list_active')}
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
                    {locforage.map((data, ind) => <DatasLocfor key={ind} keyD={data[1]} chan={changeData} del={deleteData} />)}
                </tbody>
            </table>
        );
    }
    
    if (lang==='UA') {
        return (
            <table className={`data_bases_section ${setColor()}`}>
                <caption className="base_name">
                    IndexedDB

                    {param ? <InputForChange lang={lang} param={param} set={setParam} save={saveChange} valueD={value} /> : null}

                    <div className="functions">
                        <ul id="functions_list_locfor" className="functions_list">
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.indDB')?.forEach((elem) => elem.setAttribute('checked', ''))}
                            >Вибрати все</button></li>
                            <li><button 
                                className="btn_select_all_datas" 
                                onClick={() => document.querySelectorAll('.indDB')?.forEach((elem) => elem.removeAttribute('checked'))}
                            >Скасувати вибір</button></li>
                            <li><button 
                                className="btn_delete_datas" 
                                onClick={deleteAllSelectLocfor}
                            >Видалити</button></li>
                        </ul>
                        <button 
                            className="btn_open_functions" 
                            onClick={() => document.getElementById('functions_list_locfor').classList.toggle('functions_list_active')}
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
                    {locforage.map((data, ind) => <DatasLocfor key={ind} keyD={data[1]} chan={changeData} del={deleteData} />)}
                </tbody>
            </table>
        );
    }
}



function DatasLocfor({keyD, chan, del}) {
    const [valueD, setValueD] = useState('')

    useEffect(() => {
        localforage.getItem(keyD).then((res) => {
            setValueD(JSON.stringify(res));
        });
    });

    function selectCheckbox(row) {
        let arr = [];
        document.querySelectorAll('.indDB').forEach((elem) => {
            if (elem.dataset.index===row) {
                elem.checked===false? elem.setAttribute('checked', ''): elem.removeAttribute('checked');
            }
            if (elem.checked===true) arr=[...arr, elem];
        });
        if (arr.length>0) {document.getElementById('functions_list_locfor').classList.add('functions_list_active')} 
        else {document.getElementById('functions_list_locfor').classList.remove('functions_list_active');}
    }

    if (keyD) {
        return (
            <tr className="data_bases" onClick={() => selectCheckbox(keyD)}>
                <td className="checkbox">
                    <input className="checkbox_for_select indDB" type='checkbox' data-index={keyD} />
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