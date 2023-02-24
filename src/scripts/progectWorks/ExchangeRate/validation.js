import { exchRate } from "./loading";
import { doRequest } from "./doRequest";


var myHeaders = new Headers();
myHeaders.append("apikey", "6hpKZxNazavfnQSo2e2pkyEbCFkiZhkQ");

export let url, head;

export function getValues({inp1, inp2, mass, rate1, rate2}) {
    inp2.value = "";
    let val = inp1.value;
    
    if (!val) {
        inp2.setAttribute("placeholder", '💸'); 
        inp2.value = '';
        // exchRate.input_second.value = '';

    } else if (val === 0) {
        mass.style.display = "none";
        inp2.setAttribute("placeholder", '💸');
        inp2.value = '';
        // mass.innerHTML = "Введіть число<br>Input numeric";
        
    } else if (!(val * 1)) {            
        let item = val.split('');
        
        if (item.includes('k') === true) {
            item.pop();
            let num = `${item.join('')}000`;
            checkRadioButtons(rate1, rate2, num, inp2);
            
        } else {
            mass.style.display = "block";
            mass.innerHTML = "Введіть число<br>Input numeric";
            inp2.setAttribute("placeholder", '💸'); 
            // mass.innerHTML = "Було введено нечислове значення<br>A non-numeric value was enteredc";
        }
    } else {
        mass.style.display = "none";
        checkRadioButtons(rate1, rate2, val, inp2);
    }
}

export function checkRadioButtons(have, want, amount, place) {
    if (exchRate.radio1.checked===true) {
        url = `https://api.apilayer.com/exchangerates_data/convert?to=${want}&from=${have}&amount=${amount}`;
        head = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        
        doRequest(place);
        
    } else if (exchRate.radio2.checked===true) {
        url = `https://currency-exchange.p.rapidapi.com/exchange?from=${have}&to=${want}&q=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        
        doRequest(place);
        
    } else if (exchRate.radio3.checked===true) {
        url = `https://urrency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;
        head = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '619624cca8msh0c9a9a85b5368a3p137753jsnbf1583a2183a',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        doRequest(place);
    }
}