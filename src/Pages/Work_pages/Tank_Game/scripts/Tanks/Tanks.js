import Tank from "./Tank";
export class Abrams extends Tank {
    constructor(position) {
        super(position.left, position.top, "abrams");
        this.width = 100;
        this.height = 60;
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
    constructor(position) {
        super(position.left, position.top, "leopard");
        this.width = 90;
        this.height = 55;
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
    constructor(position) {
        super(position.left, position.top, "challenger");
        this.width = 100;
        this.height = 60;
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
    constructor(position) {
        super(position.left, position.top, "leclerc");
        this.width = 90;
        this.height = 55;
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
    constructor(position) {
        super(position.left, position.top, "oplot");
        this.width = 100;
        this.height = 60;
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
    constructor(position) {
        super(position.left, position.top, "twardy");
        this.width = 100;
        this.height = 60;
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
