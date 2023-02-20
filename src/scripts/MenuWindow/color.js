export const setMenuWindowColor = () => {
    return window.localStorage.getItem('color')==='moon' ? ' trans__menu__dark' : ' ';
}
