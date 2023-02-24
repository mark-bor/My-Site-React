// SYMBOLS ARRAYS 
const arrays = {
    numers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    small_Letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    big_Letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    symbols: ['/', '*', '-', '_', ')', '.', '$'],
};

// Функція генерує масив символів по чекбоксам та повертає рандомний символ
function Colaps () {
    let result = [];

    if (document.getElementById('number').checked === true)  
    {result.push(arrays.numers[Math.floor(Math.random() * arrays.numers.length)])};

    if (document.getElementById('small').checked === true)  
    {result.push(arrays.small_Letters[Math.floor(Math.random() * arrays.small_Letters.length)])};
    
    if (document.getElementById('big').checked === true)  
    {result.push(arrays.big_Letters[Math.floor(Math.random() * arrays.big_Letters.length)])};
    
    if (document.getElementById('sumbol').checked === true)  
    {result.push(arrays.symbols[Math.floor(Math.random() * arrays.symbols.length)])};

    const res_len = result.length
    if (res_len === 0) {return res_len;} 
    else {return result[Math.floor(Math.random() * res_len)];}
}

// перевірка повторювання символів та додавання символу у список паролів
export function CheckedRemuv(place) {
    if (document.getElementById('remuv').checked){
        let item = Colaps(arrays);
        if (place.innerHTML.split('').includes(item)){
            return CheckedRemuv(place, arrays);
        }
        return item;
    } else { return Colaps(arrays); }
}