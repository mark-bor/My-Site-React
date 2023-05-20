export function calculateOnMouseDown(btn) {
    btn.target.style.boxShadow = 'inset 0 0 10px #1E2939';
}

export function calculateQuadraticEquation(btn, args, setArgs, setResults) {
    btn.target.style.boxShadow = 'none';
    
    let {a, b, c} = args;
    const {setA, setB, setC} = setArgs;
    
    if (!a) {
        setA(1);
        a=1;
    }
    if (!b) {
        setB(1);
        b=1;
    };
    if (!c) {
        setC(1);
        c=1;
    };

    const desk = (b*b) + (4*a*c);
    const dk = Math.sqrt(desk);
    const a2 = 2*a;
    const x1 = ((-b+dk)/a2).toFixed(1);
    const x2 = ((-b-dk)/a2).toFixed(1);
    const x = (-b/a2).toFixed(1);

    if (desk<0 || a2===0){
        setResults({xOne: 'NaN', xTwo: 'NaN'});
    }else if (desk===0){
        setResults({xOne: x, xTwo: x});
    }else if (desk>0){
        setResults({xOne: x1, xTwo: x2});
    }
}