import { CheckedRemuv } from "./generating";

export function onMouseDown(btn) {
    btn.target.style.opacity = 0.7;
    document.querySelectorAll('.pswd').forEach(pswd => pswd.innerHTML = '');
}

export function onMouseUp(btn) {
    btn.target.style.opacity = 1;
    
    // Генерація, виводить результат в інтерфейс
    for (let j=1; j<=document.querySelector('.kil').value; j++) {
        for (let i=1; i<=document.querySelector('.dov').value; i++){
            const numPass = document.getElementById(`${j}_pass`);
            numPass.insertAdjacentHTML( "afterBegin", CheckedRemuv(numPass));
        }
    }
}