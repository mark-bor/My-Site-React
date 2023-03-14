export function setColor(colorType) {
    localStorage.setItem('color', colorType);
}

export function changeColor(color) {
	color.target.checked===false ? setColor('sun') : setColor('moon');
	siteColor();
}

export function colorInputDefCheck() {    
    if (!localStorage.getItem('color')) {
        const time = new Date();
        const hourNow =  time.getHours();
        return hourNow>19 | 7>hourNow ? true : false;
        
    } else {
        const colorType = localStorage.getItem('color');
        return colorType==='moon' ? true : false;
    }
}

export function getAndSetColor() {
    if (!localStorage.getItem('color')) {
        const time = new Date();
        const hourNow =  time.getHours();
        if (hourNow>19 | 7>hourNow) {
            setColor('moon');
        } else {
            setColor('sun');
        }
    }
    siteColor();
}

export function siteColor() {
    const windowError = document.getElementById('window_error');
    const selectDataBases = document.getElementById('select_data_bases');
    const dataBasesSection = document.querySelectorAll('.data_bases_section');

    if (document.getElementById('input_in_sites_color').checked===false) {
        if (windowError) windowError.classList.remove('window_error_dark');
        document.querySelector('body').style.background = '#F5F5F5';
        if (selectDataBases) selectDataBases.classList.remove('select_data_bases_dark');
        dataBasesSection.forEach((elem) => elem?.classList.remove('data_bases_section_dark'));
    } else {
        if (windowError) windowError.classList.add('window_error_dark');
        document.querySelector('body').style.background = '#595959';
        if (selectDataBases) selectDataBases.classList.add('select_data_bases_dark');
        dataBasesSection.forEach((elem) => elem?.classList.add('data_bases_section_dark'));
    }
}
