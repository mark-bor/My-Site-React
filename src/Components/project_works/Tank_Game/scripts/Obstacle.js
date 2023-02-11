

export class Obstacle {
    constructor(position) {
        this.indX = position.left;
        this.indY = position.top;
        this.gameField = position.gameField;

        this.obstacleId = 0;
        this.personalObstacleId;

        this.obstacle;
    }

    addObstacle() {
        const obstacle = `
            <div id="obstacle${this.obstacleId}" class="obstacle" style="
                left: ${this.indX}px; 
                top: ${this.indY}px;
            "></div>
        `;
        
        this.gameField.insertAdjacentHTML('beforeend', obstacle);
        this.personalObstacleId = this.obstacleId;
        this.obstacleId = this.obstacleId+1;
        
        this.obstacle = document.getElementById(`obstacle${this.personalObstacleId}`);
    }

    removeObstacle() {
        this.gameField.removeChild(this.obstacle);
    }
    
    getInformation() {
        return {
            gameField: this.gameField,
            // name: this.name,'M1 Abrams'
            left: this.indX,
            top: this.indY,
            // colorLight: this.colorLight,
            // colorDark: this.colorDark,

            components: {
                obstacle: this.obstacle,
            },
            sounds: {}
        };
    }
}