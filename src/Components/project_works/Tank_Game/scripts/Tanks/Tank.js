let tankId = window.localStorage.getItem("tankID") ? Number(window.localStorage.getItem("tankID")) : 0;
export default class Tank {
    constructor(x, y, classname) {
        this.move = 2;
        this.tankR = 0;
        this.tankDeg = 0;
        this.degId = 0;
        this.towerR = 0;
        this.gFireId = 0;
        this.laser = document.getElementById('laser');
        this.gCartrCaseId = 20;
        this.mgFireId = 0;
        this.mgCartrCaseId = 200;
        this.deviation = 0;
        this.d = 10;
        this.keyDown = (event) => {
            const keyName = event.code;
            switch (keyName) {
                case 'ArrowUp':
                    event.preventDefault();
                    document.getElementById('move_up').classList.add('btn_control_active');
                    this.moveUp();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    document.getElementById('move_right').classList.add('btn_control_active');
                    this.moveRight();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    document.getElementById('move_down').classList.add('btn_control_active');
                    this.moveDown();
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    document.getElementById('move_left').classList.add('btn_control_active');
                    this.moveLeft();
                    break;
                case 'KeyD':
                    document.getElementById('rotate_right').classList.add('btn_control_active');
                    this.rotateRight();
                    break;
                case 'KeyA':
                    document.getElementById('rotate_left').classList.add('btn_control_active');
                    this.rotateLeft();
                    break;
                case 'KeyW':
                    document.getElementById('fire').classList.add('btn_control_active');
                    this.fire();
                    break;
                case 'KeyE':
                    document.getElementById('fire_frome_MG').classList.add('btn_control_active');
                    this.fireFromMachineGun();
                    break;
                case 'KeyQ':
                    break;
                case 'KeyC':
                    break;
                default:
                    console.log('Key was not found');
                    break;
            }
        };
        this.keyUp = (event) => {
            const keyName = event.code;
            switch (keyName) {
                case 'ArrowUp':
                    document.getElementById('move_up').classList.remove('btn_control_active');
                    break;
                case 'ArrowRight':
                    document.getElementById('move_right').classList.remove('btn_control_active');
                    break;
                case 'ArrowDown':
                    document.getElementById('move_down').classList.remove('btn_control_active');
                    break;
                case 'ArrowLeft':
                    document.getElementById('move_left').classList.remove('btn_control_active');
                    break;
                case 'KeyD':
                    document.getElementById('rotate_right').classList.remove('btn_control_active');
                    break;
                case 'KeyA':
                    document.getElementById('rotate_left').classList.remove('btn_control_active');
                    break;
                case 'KeyW':
                    document.getElementById('fire').classList.remove('btn_control_active');
                    break;
                case 'KeyE':
                    document.getElementById('fire_frome_MG').classList.remove('btn_control_active');
                    break;
                case 'KeyQ':
                    const blocked = document.getElementById('blocking_rotation_of_tower');
                    blocked.checked === false ? blocked.checked = true : blocked.checked = false;
                    break;
                case 'KeyC':
                    if (this.laser.checked === false) {
                        this.laser.checked = true;
                        this.beam.classList.add('beam_active');
                    }
                    else {
                        this.laser.checked = false;
                        this.beam.classList.remove('beam_active');
                    }
                    break;
                default:
                    break;
            }
        };
        this.at = (params) => {
            switch (params) {
                case '1:30':
                    if (this.indY > 20 && this.indX < this.endW) {
                        this.indX = this.indX + this.move / 2;
                        this.tank.style.left = `${this.indX}px`;
                        this.indY = this.indY - this.move / 2;
                        this.tank.style.top = `${this.indY}px`;
                    }
                    break;
                case '3':
                    if (this.indX < this.endW) {
                        this.indX = this.indX + this.move;
                        this.tank.style.left = `${this.indX}px`;
                    }
                    break;
                case '4:30':
                    if (this.indX < this.endW && this.indY < this.endH) {
                        this.indX = this.indX + this.move / 2;
                        this.tank.style.left = `${this.indX}px`;
                        this.indY = this.indY + this.move / 2;
                        this.tank.style.top = `${this.indY}px`;
                    }
                    break;
                case '6':
                    if (this.indY < this.endH) {
                        this.indY = this.indY + this.move;
                        this.tank.style.top = `${this.indY}px`;
                    }
                    break;
                case '7:30':
                    if (this.indX > 0 && this.indY < this.endH) {
                        this.indX = this.indX - this.move / 2;
                        this.tank.style.left = `${this.indX}px`;
                        this.indY = this.indY + this.move / 2;
                        this.tank.style.top = `${this.indY}px`;
                    }
                    break;
                case '9':
                    if (this.indX > 0) {
                        this.indX = this.indX - this.move;
                        this.tank.style.left = `${this.indX}px`;
                    }
                    break;
                case '10:30':
                    if (this.indY > 20 && this.indX > 0) {
                        this.indX = this.indX - this.move / 2;
                        this.tank.style.left = `${this.indX}px`;
                        this.indY = this.indY - this.move / 2;
                        this.tank.style.top = `${this.indY}px`;
                    }
                    break;
                case '12':
                    if (this.indY > 20) {
                        this.indY = this.indY - this.move;
                        this.tank.style.top = `${this.indY}px`;
                    }
                    break;
                default:
                    console.log(`This tank broke.`);
                    break;
            }
        };
        this.tank = `
            <div id="tank${tankId}" class="tank tank_${classname}" 
            style="
                left: ${x}px; top: ${y}px;
                transform: rotate(${this.tankR}deg);
            ">
                <audio id="tank_motor_sound${tankId}" src="./Sounds/tank_motor.mp3" loop volume="0.3"></audio>
                <audio id="tank_move_sound${tankId}" src="./Sounds/tank_move.mp3" loop volume="0.3"></audio>

                <span id="tower${tankId}" class="rotate_tower rotate_tower_${classname}"
                style="transform: rotate(${this.towerR}deg);">
                    <audio id="tower_rotate_sound${tankId}" src="./Sounds/tower_rotate.mp3" loop volume="0.3"></audio>
                    
                    <span id="tower_image${tankId}" class="tower tower_${classname}">
                        <span id="weapon${tankId}" class="weapon weapon_${classname}">
                            <audio id="tank_fire_sound${tankId}" src="./Sounds/tank_fire.mp3" loop volume="0.3"></audio>

                            <span id="bullet${tankId}" class="bullet"></span>
                            <span id="fire_smoke${tankId}" class="fire_smoke"></span>

                            <span class="laser">
                                <span id="beam${tankId}" class="beam"></span>
                            </span>
                        </span>

                        <span class="trapdoor trapdoor_${classname}"></span>
                        
                        <span class="machine_gun machine_gun_${classname}">
                            <span id="cartridge_case_from_MG${tankId}" class="cartridge_case_from_MG"></span>
                            <span id="bullet_from_MG${tankId}" class="armors_from_MG"></span>
                            <span id="fire_smoke_frome_MG${tankId}" class="fire_smoke_frome_MG"></span>
                        </span>
                    </span>
                </span>
            </div>
        `;
        this.personalTankId = tankId;
        tankId += 1;
        window.localStorage.setItem("tankID", String(tankId));
    }
    addOnField() {
        this.gameField = document.getElementById('game_field');
        this.gameField.insertAdjacentHTML('beforeend', this.tank);
        this.activationControl();
    }
    removeFromField() {
        this.gameField.removeChild(this.tank);
        document.removeEventListener('keydown', this.keyDown);
        document.removeEventListener('keyup', this.keyUp);
        this.informationAboutG.innerHTML = "20/20";
        this.informationAboutMG.innerHTML = "200/200";
        this.blocked = false;
    }
    activation() {
        this.tank = document.getElementById(`tank${this.personalTankId}`);
        this.tower = document.getElementById(`tower${this.personalTankId}`);
        this.weapon = document.getElementById(`weapon${this.personalTankId}`);
        this.bullet = document.getElementById(`bullet${this.personalTankId}`);
        this.fireSmoke = document.getElementById(`fire_smoke${this.personalTankId}`);
        this.blocked = document.getElementById('blocking_rotation_of_tower');
        this.beam = document.getElementById(`beam${this.personalTankId}`);
        this.cartridgeCaseFromMG = document.getElementById(`cartridge_case_from_MG${this.personalTankId}`);
        this.bulletFromMG = document.getElementById(`bullet_from_MG${this.personalTankId}`);
        this.fireSmokeFromMG = document.getElementById(`fire_smoke_frome_MG${this.personalTankId}`);
        this.endW = this.gameField.clientWidth - this.tank.clientWidth;
        this.endH = this.gameField.clientHeight - this.tank.clientHeight / 3 * 4;
        this.informationAboutG = document.getElementById('information_about_gun');
        this.remainderG = document.getElementById('g_remainder');
        this.fireMGunTimer = document.getElementById('fire_MG_timer');
        this.informationAboutMG = document.getElementById('information_about_mg');
        this.remainderMG = document.getElementById('mg_remainder');
    }
    activationControl() {
        document.getElementById('move_up').onclick = () => this.moveUp();
        document.getElementById('move_down').onclick = () => this.moveDown();
        document.getElementById('move_right').onclick = () => this.moveRight();
        document.getElementById('move_left').onclick = () => this.moveLeft();
        document.getElementById('rotate_left').onclick = () => this.rotateLeft();
        document.getElementById('rotate_right').onclick = () => this.rotateRight();
        document.getElementById('fire').onclick = () => this.fire();
        document.getElementById('fire_frome_MG').onclick = () => this.fireFromMachineGun();
        this.laser.onchange = (elem) => elem.target.checked === true ? this.beam.classList.add('beam_active') : this.beam.classList.remove('beam_active');
        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
    }
    getInformation() {
        return {
            gameField: this.gameField,
            name: this.name,
            left: this.indX,
            top: this.indY,
            colorLight: this.colorLight,
            colorDark: this.colorDark,
            components: {
                tank: this.tank,
                tower: this.tower,
                armor: this.bullet,
                fireSmoke: this.fireSmoke,
                cartridgeCaseFromMG: this.cartridgeCaseFromMG,
                bulletFromMG: this.bulletFromMG,
                fireSmokeFromMG: this.fireSmokeFromMG,
            },
            sounds: {
                tankMotor: document.getElementById(`tank_motor_sound${this.personalTankId}`),
                tankMove: document.getElementById(`tank_move_sound${this.personalTankId}`),
                towerRotate: document.getElementById(`tower_rotate_sound${this.personalTankId}`),
            }
        };
    }
    moveUp() {
        if (this.tankDeg === this.tankR) {
            this.at('3');
        }
        else if (this.tankDeg + 45 === this.tankR || this.tankDeg + (-315) === this.tankR) {
            this.at('4:30');
        }
        else if (this.tankDeg + 90 === this.tankR || this.tankDeg + (-270) === this.tankR) {
            this.at('6');
        }
        else if (this.tankDeg + 135 === this.tankR || this.tankDeg + (-225) === this.tankR) {
            this.at('7:30');
        }
        else if (this.tankDeg + 180 === this.tankR || this.tankDeg + (-180) === this.tankR) {
            this.at('9');
        }
        else if (this.tankDeg + 225 === this.tankR || this.tankDeg + (-135) === this.tankR) {
            this.at('10:30');
        }
        else if (this.tankDeg + 270 === this.tankR || this.tankDeg + (-90) === this.tankR) {
            this.at('12');
        }
        else if (this.tankDeg + 315 === this.tankR || this.tankDeg + (-45) === this.tankR) {
            this.at('1:30');
        }
    }
    moveDown() {
        if (this.tankDeg === this.tankR) {
            this.at('9');
        }
        else if (this.tankDeg + 45 === this.tankR || this.tankDeg + (-315) === this.tankR) {
            this.at('10:30');
        }
        else if (this.tankDeg + 90 === this.tankR || this.tankDeg + (-270) === this.tankR) {
            this.at('12');
        }
        else if (this.tankDeg + 135 === this.tankR || this.tankDeg + (-225) === this.tankR) {
            this.at('1:30');
        }
        else if (this.tankDeg + 180 === this.tankR || this.tankDeg + (-180) === this.tankR) {
            this.at('3');
        }
        else if (this.tankDeg + 225 === this.tankR || this.tankDeg + (-135) === this.tankR) {
            this.at('4:30');
        }
        else if (this.tankDeg + 270 === this.tankR || this.tankDeg + (-90) === this.tankR) {
            this.at('6');
        }
        else if (this.tankDeg + 315 === this.tankR || this.tankDeg + (-45) === this.tankR) {
            this.at('7:30');
        }
    }
    tankShadow() {
        if (this.tankDeg === this.tankR) {
            this.tank.style.boxShadow = '-2px 2px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 45 === this.tankR || this.tankDeg + (-315) === this.tankR) {
            this.tank.style.boxShadow = '0px 2px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 90 === this.tankR || this.tankDeg + (-270) === this.tankR) {
            this.tank.style.boxShadow = '2px 2px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 135 === this.tankR || this.tankDeg + (-225) === this.tankR) {
            this.tank.style.boxShadow = '2px 0px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 180 === this.tankR || this.tankDeg + (-180) === this.tankR) {
            this.tank.style.boxShadow = '2px -2px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 225 === this.tankR || this.tankDeg + (-135) === this.tankR) {
            this.tank.style.boxShadow = '0px -2px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 270 === this.tankR || this.tankDeg + (-90) === this.tankR) {
            this.tank.style.boxShadow = '-2px -2px 6px -1px rgba(97, 105, 116, 0.3)';
        }
        else if (this.tankDeg + 315 === this.tankR || this.tankDeg + (-45) === this.tankR) {
            this.tank.style.boxShadow = '-2px 0px 6px -1px rgba(97, 105, 116, 0.3)';
        }
    }
    moveLeft() {
        if (this.degId === 0) {
            this.tankR = this.tankR - 45;
            this.tank.style.transform = `rotate(${this.tankR}deg)`;
            if (this.blocked.checked === false) {
                if (this.towerR < 90)
                    this.towerR = this.towerR + 45;
                this.tower.style.transform = `rotate(${this.towerR}deg)`;
            }
            this.degId = 1;
            setTimeout(() => this.degId = 0, 200);
            if (this.tankR % 360 === 0) {
                this.tankDeg = this.tankR;
            }
            this.tankShadow();
        }
    }
    moveRight() {
        if (this.degId === 0) {
            this.tankR = this.tankR + 45;
            this.tank.style.transform = `rotate(${this.tankR}deg)`;
            if (this.blocked.checked === false) {
                if (this.towerR > -90)
                    this.towerR = this.towerR - 45;
                this.tower.style.transform = `rotate(${this.towerR}deg)`;
            }
            this.degId = 1;
            setTimeout(() => this.degId = 0, 199);
            if (this.tankR % 360 === 0) {
                this.tankDeg = this.tankR;
            }
            this.tankShadow();
        }
    }
    rotateLeft() {
        this.towerR = this.towerR - 2;
        this.tower.style.transform = `rotate(${this.towerR}deg)`;
    }
    rotateRight() {
        this.towerR = this.towerR + 2;
        this.tower.style.transform = `rotate(${this.towerR}deg)`;
    }
    tankJolt() {
        if ((-45 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg + 45) ||
            (315 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg + 405) ||
            (-405 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg - 315)) {
            this.tank.style.left = `${this.indX - 10}px`;
        }
        else if ((45 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg + 135) ||
            (-315 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg - 225)) {
            this.tank.style.top = `${this.indY - 10}px`;
        }
        else if ((135 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg + 225) ||
            (-225 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg - 135)) {
            this.tank.style.left = `${this.indX + 10}px`;
        }
        else if ((225 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg + 315) ||
            (-135 + this.tankDeg <= this.towerR && this.towerR < this.tankDeg - 45)) {
            this.tank.style.top = `${this.indY + 10}px`;
        }
    }
    fire() {
        if (this.gCartrCaseId === 0) {
            this.gCartrCaseId = this.gCartrCaseId - 1;
            for (let i = 0; i <= 10000; i++) {
                setTimeout(() => {
                    this.remainderG.style.width = `${0 + ((100 / 10000) * i)}%`;
                    if (i === 10000) {
                        this.gCartrCaseId = 20;
                        this.informationAboutG.innerHTML = `${this.gCartrCaseId}/20`;
                    }
                }, i);
            }
        }
        else {
            if (this.gFireId === 0) {
                const fire_timer = document.getElementById('fire_timer');
                this.gFireId = 1;
                this.gCartrCaseId = this.gCartrCaseId - 1;
                this.informationAboutG.innerHTML = `${this.gCartrCaseId}/20`;
                this.remainderG.style.width = `${100 - ((100 / 20) * (20 - this.gCartrCaseId))}%`;
                this.tankJolt();
                for (let i = 0; i <= 3000; i++) {
                    setTimeout(() => {
                        this.bullet.style.left = `${i}px`;
                        fire_timer.style.strokeDasharray = 145 - ((145 / 3000) * i);
                        fire_timer.style.strokeDasharray < 145 / 3 ? fire_timer.style.stroke = '#FFF85C' : fire_timer.style.stroke = '#FF5555';
                        if (i === 3000) {
                            fire_timer.style.strokeDasharray = 145;
                            fire_timer.style.stroke = '#8FD855';
                            this.gFireId = 0;
                        }
                    }, i);
                }
                this.fireSmoke.className = 'fire_smoke_active';
                setTimeout(() => {
                    this.fireSmoke.className = 'fire_smoke';
                    this.tank.style.left = `${this.indX}px`;
                    this.tank.style.top = `${this.indY}px`;
                }, 10);
            }
        }
    }
    fireFromMachineGun() {
        if (this.mgCartrCaseId === 0) {
            this.mgCartrCaseId = this.mgCartrCaseId - 1;
            for (let i = 0; i <= 7000; i++) {
                setTimeout(() => {
                    this.fireMGunTimer.style.strokeDasharray = 0 + ((119 / 7000) * i);
                    if (this.fireMGunTimer.style.strokeDasharray < 119 / 2) {
                        this.fireMGunTimer.style.stroke = '#FFF85C';
                        if (this.fireMGunTimer.style.strokeDasharray < 119 / 4) {
                            this.fireMGunTimer.style.stroke = '#FF5555';
                        }
                    }
                    else {
                        this.fireMGunTimer.style.stroke = '#8FD855';
                    }
                    if (i === 7000) {
                        this.mgCartrCaseId = 200;
                        this.informationAboutMG.innerHTML = `${this.mgCartrCaseId}/200`;
                        this.remainderMG.style.width = `100%`;
                    }
                }, i);
            }
        }
        else if (this.mgCartrCaseId > 0) {
            if (this.mgFireId === 0) {
                this.mgFireId = 1;
                setTimeout(() => this.mgFireId = 0, this.mgFireTime);
                this.cartridgeCaseFromMG.insertAdjacentHTML('beforeend', `
                    <span id="cartridge_case_${this.mgCartrCaseId}_${this.personalTankId}" class="cartridge_case"></span>
                `);
                this.bulletFromMG.insertAdjacentHTML('beforeend', `
                    <span id="bullet_for_MG_${this.mgCartrCaseId}_${this.personalTankId}" class="armors_for_MG"></span>
                `);
                let cartridgeCase = document.getElementById(`cartridge_case_${this.mgCartrCaseId}_${this.personalTankId}`);
                let bulletForMG = document.getElementById(`bullet_for_MG_${this.mgCartrCaseId}_${this.personalTankId}`);
                this.deviation = this.deviation + this.d;
                if (this.deviation === 20)
                    this.d = (-10);
                if (this.deviation === (-20))
                    this.d = 10;
                const deviationI = this.deviation / 1500;
                const left = Math.random() * 10;
                const top = Math.random() * 10 + 10;
                for (let i = 0; i <= 1500; i++) {
                    if (i <= 500) {
                        this.mgCartrCaseId % 2 === 0 ?
                            setTimeout(() => { if (cartridgeCase)
                                cartridgeCase.style.left = `-${left}px`; }, i) :
                            setTimeout(() => { if (cartridgeCase)
                                cartridgeCase.style.left = `${left}px`; }, i);
                        setTimeout(() => { if (cartridgeCase)
                            cartridgeCase.style.top = `${top}px`; }, i);
                        if (i === 500)
                            if (cartridgeCase)
                                cartridgeCase.style.transform = `rotate(${Math.random() * 360}deg)`;
                    }
                    setTimeout(() => {
                        if (bulletForMG)
                            bulletForMG.style.transform = ` translateY(${deviationI * i}px) translateX(${i}px)`;
                        if (i === 1500) {
                            if (bulletForMG)
                                this.bulletFromMG.removeChild(bulletForMG);
                        }
                    }, i);
                }
                setTimeout(() => { if (cartridgeCase)
                    this.cartridgeCaseFromMG.removeChild(cartridgeCase); }, 3000);
                this.fireSmokeFromMG.className = 'fire_smoke_frome_MG_active';
                setTimeout(() => this.fireSmokeFromMG.className = 'fire_smoke_frome_MG', 5);
                this.mgCartrCaseId = this.mgCartrCaseId - 1;
                this.informationAboutMG.innerHTML = `${this.mgCartrCaseId}/200`;
                this.remainderMG.style.width = `${100 - ((100 / 200) * (200 - this.mgCartrCaseId))}%`;
                this.fireMGunTimer.style.strokeDasharray = 119 - ((119 / 200) * (200 - this.mgCartrCaseId));
                if (this.fireMGunTimer.style.strokeDasharray < 119 / 2) {
                    this.fireMGunTimer.style.stroke = '#FFF85C';
                    if (this.fireMGunTimer.style.strokeDasharray < 119 / 4) {
                        this.fireMGunTimer.style.stroke = '#FF5555';
                    }
                }
            }
        }
    }
}
