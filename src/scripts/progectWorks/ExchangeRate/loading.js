export let exchRate = {};

export function getExchange() {
    const exchange = {
        radio1: document.getElementById('radio1'),
        radio2: document.getElementById('radio2'),
        radio3: document.getElementById('radio3'),
        inputFirst: document.querySelector(".input_first_block"),
        inputSecond: document.querySelector(".input_second_block"),
        rateFirst: document.querySelector(".rates_one"),
        rateSecond: document.querySelector(".rates_two"),
        massege: document.getElementById('massege')
    }
    exchRate = {...exchange};
    return exchange;
}