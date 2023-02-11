import "./styles.css"

export default function ConfirmCard({lang, set, data}) {
    if (lang==='EN') {
        return (
            <div className="confirm_card_container">
                <section className="confirm_card">
                    <h2>Please, confirm data</h2>

                    <ul className="data_list_for_confirm">
                        <li>
                            <span className="data_name_in_confirm">To number:</span>
                            <span className="data_for_confirm">{data.toNumber}</span>
                        </li>
                        <li>
                            <span className="data_name_in_confirm">From number:</span>
                            <span className="data_for_confirm">{data.fromNumber}</span>
                        </li>
                        <li>
                            <span className="data_name_in_confirm">Message:</span>
                            <span className="data_for_confirm message_for_confirm">{data.message}</span>
                        </li>
                        <li>
                            <span className="data_name_in_confirm">Number of messages:</span>
                            <span className="data_for_confirm">{data.numberOfMessages}</span>
                        </li>
                    </ul>

                    <div className="buttons_in_confirm_card">
                        <button 
                            className="clear_in_confirm_card" 
                            onClick={() => {
                                set(false);
                                // document.querySelectorAll('.data_for_confirm').forEach((elem) => elem.style.color='#8FD855');
                            }}
                        >Cancel</button>
                        <button 
                            className="start_in_confirm_card" 
                            onClick={() => confirmData(data)}
                        >Confirm</button>
                    </div>
                </section>
            </div>
        );
    }

    if (lang==='UA') {
        return (
            <div className="confirm_card_container">
                <section className="confirm_card">
                    <h2>Будь ласка,<br />підтвердіть дані</h2>

                    <ul className="data_list_for_confirm">
                        <li>
                            <span className="data_name_in_confirm">На номер:</span>
                            <span className="data_for_confirm">{data.toNumber}</span>
                        </li>
                        <li>
                            <span className="data_name_in_confirm">З номеру:</span>
                            <span className="data_for_confirm">{data.fromNumber}</span>
                        </li>
                        <li>
                            <span className="data_name_in_confirm">Повідомлення:</span>
                            <span className="data_for_confirm message_for_confirm">{data.message}</span>
                        </li>
                        <li>
                            <span className="data_name_in_confirm">Кількість повідомлень:</span>
                            <span className="data_for_confirm">{data.numberOfMessages}</span>
                        </li>
                    </ul>

                    <div className="buttons_in_confirm_card">
                        <button 
                            className="clear_in_confirm_card" 
                            onClick={() => {
                                set(false);
                                // document.querySelectorAll('.data_for_confirm').forEach((elem) => elem.style.color='#8FD855');
                            }}
                        >Cancel</button>
                        <button 
                            className="start_in_confirm_card" 
                            onClick={() => confirmData(data)}
                        >Confirm</button>
                    </div>
                </section>
            </div>
        );
    }
}

function confirmData(data) {
    document.querySelectorAll('.data_for_confirm').forEach((elem) => elem.style.color='#8FD855');
    // console.log(data);
    // sendMessage(data.toNumber, data.FromNumber, data.message);
}

// function sendMessage(to, from, text) {
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'device-authorized': 'd_WQc3LKSNqY1dI8_jnPyQ:APA91bGWAeFLdypWVyYkNm6y4DwsYwATxn-BOluMqooWkHywQZEUq5e0lOzyJQTWghit--uEPb2O-VlzT0mmeTU-Fem_u5WZNW8zTCATRbbKgTt4ayrELNmStHlTqPsg1n0aF-WB9CVT',
//             'X-RapidAPI-Key': 'ea6d444961msh7b22bed0f7ee444p133fcfjsndadf83f4d4ba',
//             'X-RapidAPI-Host': 'sms-cloud.p.rapidapi.com'
//         },
//         body: {"messages":[{"to":to,"m":text}]}
//     };
    
//     fetch('https://sms-cloud.p.rapidapi.com/send', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }