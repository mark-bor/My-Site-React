import Tank from "./Tank";



export class Abrams extends Tank {
    width: number = 100;
    height: number = 60;
    
    constructor(position: any) {
        super(position.left, position.top, "abrams");
        this.indX = position.left;
        this.indY = position.top;

        this.name = 'M1 Abrams';
        this.colorLight = '#E3D1AD';
        this.colorDark = '#C9B897';
        this.mgFireTime = 90;

        this.addOnField();
        this.activation();
    }
}



export class Leopard extends Tank {
    width = 90;
    height = 55;

    constructor(position: any) {
        super(position.left, position.top, "leopard");
        this.indX = position.left;
        this.indY = position.top;

        this.name = 'Leopard 2';
        this.colorLight = '#96A889';
        this.colorDark = '#76886A';
        this.mgFireTime = 30;
    
        this.addOnField();
        this.activation();
    }
}



export class Challenger extends Tank {
    width = 100;
    height = 60;
    
    constructor(position: any) {
        super(position.left, position.top, "challenger");
        this.indX = position.left;
        this.indY = position.top;

        this.name = 'Challenger 2';
        this.colorLight = '#E3D1AD';
        this.colorDark = '#C9B897';
        this.mgFireTime = 90;

        this.addOnField();
        this.activation();
    }
}



export class Leclerc extends Tank {
    width = 90;
    height = 55;

    constructor(position: any) {
        super(position.left, position.top, "leclerc");
        this.indX = position.left;
        this.indY = position.top;

        this.name = 'Leclerc';
        this.colorLight = '#96A889';
        this.colorDark = '#76886A';
        this.mgFireTime = 90;

        this.addOnField();
        this.activation();
    }
}



export class Oplot extends Tank {
    width = 100;
    height = 60;
    
    constructor(position: any) {
        super(position.left, position.top, "oplot");
        this.indX = position.left;
        this.indY = position.top;

        this.name = 'BM Oplot';
        this.colorLight = '#E3D1AD';
        this.colorDark = '#C9B897';
        this.mgFireTime = 90;

        this.addOnField();
        this.activation();
    }
}



export class Twardy extends Tank {
    width = 100;
    height = 60;

    constructor(position: any) {
        super(position.left, position.top, "twardy");
        this.indX = position.left;
        this.indY = position.top;
        
        this.name = 'PT-91 Twardy';
        this.colorLight = '#96A889';
        this.colorDark = '#76886A';
        this.mgFireTime = 90;

        this.addOnField();
        this.activation();
    }
}