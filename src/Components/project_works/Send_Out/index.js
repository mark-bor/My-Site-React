import { useState } from "react";
import { Form } from "react-router-dom";

import ConfirmCard from "./components/Confirm_Card/index.js";
import InputForAccessCard from "./components/Access_Card/index.js";

import "./styles.css";

export default function SendOut({lang}) {
    const [data, setData] = useState(false);
    const [confirmCard, setConfirmCard] = useState(false);
    const [accessCard, setAccessCard] = useState(false);
    let datas = {};
    
    function startSendOut() {
        datas = {
            toNumber: document.getElementById('to_number'),
            fromNumber: document.getElementById('from_number'),
            message: document.getElementById('message'),
            numberOfMessages: document.getElementById('number_of_messages'),
        };
        
        if (!datas.toNumber.value | datas.toNumber.value.length<10 |
            !datas.fromNumber.value | datas.fromNumber.value.length<10 |
            !datas.message.value | datas.message.value.length<2 | 
            !datas.numberOfMessages.value | datas.numberOfMessages.value<=0 | datas.numberOfMessages.value>50) {
            
            if (!datas.toNumber.value | datas.toNumber.value.length<10) {datas.toNumber.style.border = '1px solid #FF5555';} 
            else {datas.toNumber.style.border = '1px solid #B2ED83'}
            
            if (!datas.fromNumber.value | datas.fromNumber.value.length<10) {datas.fromNumber.style.border = '1px solid #FF5555';} 
            else {datas.fromNumber.style.border = '1px solid #B2ED83'}
            
            if (!datas.message.value | datas.message.value.length<2) {datas.message.style.border = '1px solid #FF5555';} 
            else {datas.message.style.border = '1px solid #B2ED83'}
            
            if (!datas.numberOfMessages.value | datas.numberOfMessages.value<=0 | datas.numberOfMessages.value>50) {datas.numberOfMessages.style.border = '1px solid #FF5555';} 
            else {datas.numberOfMessages.style.border = '1px solid #B2ED83'}
            
            return;
        }

        setData({
            toNumber: datas.toNumber.value,
            fromNumber: datas.fromNumber.value,
            message: datas.message.value,
            numberOfMessages: datas.numberOfMessages.value,
        });
        setConfirmCard(true);
        
        datas.toNumber.style.border = 'none';
        datas.fromNumber.style.border = 'none';
        datas.message.style.border = 'none';
        datas.numberOfMessages.style.border = 'none';
    }

    if (lang==='EN') {
        return (
            <section className="div sen-out" id="send-out">
                <h1 className="light_dark">Send out</h1>

                {confirmCard ? <ConfirmCard lang={lang} set={setConfirmCard} data={data} /> : null}
                {!accessCard ? <InputForAccessCard lang={lang} set={setAccessCard} /> : null}

                <Form className="form_for_send_out">
                    <h2>Form for send out</h2>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">To number:</span>
                        <input id="to_number" className="filed_in_send_out" type='text' defaultValue={'+380'} required />
                    </label>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">From number:</span>
                        <input id="from_number" className="filed_in_send_out" type='text' defaultValue={'+380'} required />
                    </label>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">Message:</span>
                        <textarea id="message" className="filed_in_send_out" required></textarea>
                    </label>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">Number of messages:</span>
                        <input id="number_of_messages" className="filed_in_send_out" type='number' min={1} max={50} defaultValue={1} required />
                    </label>

                    <div className="buttons_in_form_send_out">
                        <button className="clear_in_form_send_out" type="reset">Clear</button>
                        <button 
                            className="start_in_form_send_out" 
                            onClick={startSendOut}
                        >Start</button>
                    </div>
                </Form>
            </section>
        );
    }
    
    if (lang==='UA') {
        return (
            <section className="div sen-out" id="send-out">
                <h1>Розсилка</h1>

                {confirmCard ? <ConfirmCard lang={lang} set={setConfirmCard} data={data} /> : null}
                {!accessCard ? <InputForAccessCard lang={lang} set={setAccessCard} /> : null}

                <Form className="form_for_send_out">
                    <h2 className="light_dark">Форма для розсилки</h2>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">На номер:</span>
                        <input id="to_number" className="filed_in_send_out" type='text' defaultValue={'+380'} required />
                    </label>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">З номеру:</span>
                        <input id="from_number" className="filed_in_send_out" type='text' defaultValue={'+380'}  required />
                    </label>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">Повідомлення:</span>
                        <textarea id="message" className="filed_in_send_out"  required></textarea>
                    </label>

                    <label className="label_in_send_out">
                        <span className="span_in_send_out">Кількість повідомлень:</span>
                        <input id="number_of_messages"  className="filed_in_send_out" type='number' min={1} max={50} defaultValue={1} required />
                    </label>

                    <div className="buttons_in_form_send_out">
                        <button className="clear_in_form_send_out" type="reset">Очистити</button>
                        <button
                            className="start_in_form_send_out" 
                            onClick={startSendOut}
                        >Почати</button>
                    </div>
                </Form>
            </section>
        );
    }
}
