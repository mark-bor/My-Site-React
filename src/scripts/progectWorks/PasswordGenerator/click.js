import { CheckedRemuv } from "./generating";

export function onMouseDown(btn) {
    btn.target.style.opacity = 0.7;
}

export function onMouseUp(btn, setPasswords, setError) {
    btn.target.style.opacity = 1;
    const kil = document.getElementById('kil');
    const dov = document.getElementById('dov');

    // validation
    if (dov.value<4 | 15<dov.value) {
        dov.style.border = '1px solid #FF5555';
        setError('Min 4, Max 15');
        return;
    }
    if (kil.value<1 | 9<kil.value) {
        kil.style.border = '1px solid #FF5555';
        setError('Min 1, Max 9');
        return;
    }
    dov.style.border = 'none';
    kil.style.border = 'none';
    setError('');
    
    // generating, display result
    let passwords = [];
    for (let j=1; j<=kil.value; j++) {
        passwords[j] = [];
        for (let i=1; i<=dov.value; i++) {
            passwords[j].push(CheckedRemuv(passwords[j]));
        }
        passwords[j]?.join('');
    }
    setPasswords([...passwords]);
}