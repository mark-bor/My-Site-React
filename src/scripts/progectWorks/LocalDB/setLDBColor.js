export const setLDBColor = () => {
    return localStorage.getItem('color')==='moon'? 'select_data_bases_dark' : ' ';
}
