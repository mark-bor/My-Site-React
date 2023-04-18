// import { Obstacle } from "./Obstacle.js";
import { 
    Abrams, 
    Leopard, 
    Challenger, 
    Leclerc,
    Oplot,
    Twardy
 } from "./Tanks/Tanks.js";



const positon = {
    left: 30,
    top: 170,
}
export let tank = {};



export function createTank(tankName) {
    switch (tankName) {
        case 'M1 Abrams':
            tank.tank = new Abrams(positon);
            break;
    
        case 'Leopard 2':
            tank.tank = new Leopard(positon);
            break;

        case 'Challenger 2':
            tank.tank = new Challenger(positon);
            break;
    
        case 'Leclerc':
            tank.tank = new Leclerc(positon);
            break;
            
        case 'BM Oplot':
            tank.tank = new Oplot(positon);
            break;
    
        case 'PT-91 Twardy':
            tank.tank = new Twardy(positon);
            break;
            
        default:
            console.log("Tank not found");
            break;
    }
}

export function changeTank(tankName) {
    tank.tank?.removeFromField();
    delete tank.tank;
    createTank(tankName);
}



// function stopSaund(sound) {
//     setTimeout(() => {
//         sound.pause()
//         soundStor.tankMove.currentTime=2;
//         soundStor.towerRotate.currentTime=2;
//     }, 100);
// }