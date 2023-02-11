export function siteColor() {
    const inp = document.getElementById('input_in_sites_color');

    const windowError = document.getElementById('window_error');
    const head = document.getElementById('head');
    const menuWindow = document.getElementById('menu_window');
    const sidebarWithNavigation = document.getElementById('sidebar_with_navigation');
    const inHome = [...document.querySelectorAll('.block'), ...document.querySelectorAll('.text')]
    const cv1 = document.getElementById('button_in_cvs_one');
    const cv2 = document.getElementById('button_in_cvs_two');
    const selectDataBases = document.getElementById('select_data_bases');
    const dataBasesSection = document.querySelectorAll('.data_bases_section');
    const footer = document.getElementById('footer');

    if (inp.checked===false) {
        if (windowError) windowError.classList.remove('window_error_dark');
        document.querySelector('body').style.background = '#F5F5F5';
        head.style.background = '#A1BEEA';
        if (menuWindow) menuWindow.classList.remove('trans__menu__dark');
        if (sidebarWithNavigation) sidebarWithNavigation.classList.remove('sidebar_with_navigation_dark');
        inHome.forEach((elem) => elem?.classList.remove('dark'));
        if (cv1) cv1.classList.remove('button_in_cvs_one_dark');
        if (cv2) cv2.classList.remove('button_in_cvs_two_dark');
        if (selectDataBases) selectDataBases.classList.remove('select_data_bases_dark');
        dataBasesSection.forEach((elem) => elem?.classList.remove('data_bases_section_dark'));
        footer.style.background = '#A1BEEA';
    } else {
        if (windowError) windowError.classList.add('window_error_dark');
        document.querySelector('body').style.background = '#8F949C';
        head.style.background = '#1E2939';
        if (menuWindow) menuWindow.classList.add('trans__menu__dark');
        if (sidebarWithNavigation) sidebarWithNavigation.classList.add('sidebar_with_navigation_dark');
        inHome.forEach((elem) => elem?.classList.add('dark'));
        if (cv1) cv1.classList.add('button_in_cvs_one_dark');
        if (cv2) cv2.classList.add('button_in_cvs_two_dark');
        if (selectDataBases) selectDataBases.classList.add('select_data_bases_dark');
        dataBasesSection.forEach((elem) => elem?.classList.add('data_bases_section_dark'));
        footer.style.background = '#1E2939';
    }
}

export function getOrSetColor() {
    const inputInSitesColor = document.getElementById('input_in_sites_color');

    if (!localStorage.getItem('color')) {
        const time = new Date();
        console.log(time);
        const hourNow =  time.getHours();
        if (hourNow>19 | 7>hourNow) {
            inputInSitesColor.checked=true;
            setColor('moon');
        } else {
            inputInSitesColor.checked=false;
            setColor('sun');
        }
        
    } else {
        const colorType = localStorage.getItem('color');
        if (colorType==='moon') {
            setColor('moon');
            inputInSitesColor.checked=true;
        } else {
            setColor('sun');
            inputInSitesColor.checked=false;
        }
    }
    siteColor();
}

export function setColor(colorType) {
    const sitesColor = document.getElementById('sites_color');
    // const titles = document.querySelectorAll('.light_dark');
    // titles.forEach((el) => el.style.transition = '0.7s');
    
    if (colorType==='moon') {
        sitesColor.style.background = '#595959';
        // titles.forEach((el) => el.style.color = '#D9D9D9')
    } else if (colorType==='sun') {
        sitesColor.style.background = '#F5F5F5';
        // titles.forEach((el) => el.style.color = '#1E2939')
    } 
    localStorage.setItem('color', colorType);
}