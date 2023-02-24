import { url, head } from "./validation";
import { exchRate } from "./loading";

export function doRequest(place) {
    fetch(url, head) 
    .then(response => response.json())
    .then(result => {
        if (exchRate.radio1.checked===true) {
            place.value = result.result.toFixed(2);
        } else if (exchRate.radio2.checked===true) {
            place.value = result.toFixed(2);
        } else if (exchRate.radio3.checked===true) {
            place.value = result.new_amount.toFixed(2);
        }
    })
    .catch(error => {
        // console.log('ERROR ==>', error);

        // // const language = document.querySelector(".form_in_head");
        // const windowError = document.getElementById('error_background');
        // const messageError = document.getElementById('message_error');
        // // const errorCode = document.getElementById('error_code');

        // exchRate.input_first.value = '';
        // exchRate.input_second.value = '';
        // windowError.style.display = 'flex';
        // if (language.value==="UA") {
        //     messageError.innerHTML = 'Щось трапилось, <br>спробуйте інший сервіс із 3 запропонованих';
        // } else if (language.value==="EN") {
        //     messageError.innerHTML = 'Something happened, <br>try another service among the 3 offered';
        // } else if (language.value==="PL") {
        //     messageError.innerHTML = 'Coś się stało, <br>wypróbuj inną usługę z 3 oferowanych';
        // }
        // // errorCode.innerText = error;
        
        // document.getElementById('close_error').addEventListener('click', () => {
        //     // errorCode.innerText = '';
        //     messageError.innerText = '';
        //     windowError.style.display = 'none';
        // });
    });
}