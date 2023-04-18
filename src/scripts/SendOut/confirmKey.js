export function ConfirmKey(set) {
    const inputForAccess = document.getElementById('input_for_access');

    if (inputForAccess.value!=='y9V1wV') {
        inputForAccess.classList.add('input_for_access_no');
        return;
    }
    
    inputForAccess.classList.remove('input_for_access_no');
    inputForAccess.classList.add('input_for_access_yes');
    setTimeout(() => set(true), 700);
}