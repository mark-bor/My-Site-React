import { hiddenAll } from "./list";

export function mouseDown(btn) {
    btn.target.style.opacity = '0.5';
}

export function mouseUp(btn) {
    btn.target.style.opacity = '';
    const root = document.getElementById('root');
    root.classList.toggle('root_without_sidebar');
    if (root.className==='root') {
        btn.target.style.transform = 'rotate(90deg)';
        localStorage.setItem('sidebar', 'big');
    } else {
        btn.target.style.transform = 'rotate(-90deg)';
        localStorage.setItem('sidebar', 'small');
    }
    hiddenAll();
}

export function setSidebarSize() {
    const sidebarSize = localStorage.getItem('sidebar');
    try {
        const root = document.getElementById('root');
        const sidebarBTN = document.getElementById('sidebar_btn');
        if (sidebarSize==='big') {
            root.classList.remove('root_without_sidebar');
            sidebarBTN.style.transform = 'rotate(90deg)';
        } else if (sidebarSize==='small') {
            root.classList.add('root_without_sidebar');
            sidebarBTN.style.transform = 'rotate(-90deg)';
        }
    } catch {}
}