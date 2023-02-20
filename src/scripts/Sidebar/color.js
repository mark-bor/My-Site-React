export const setSidebarColor = () => {
    return window.localStorage.getItem('color')==='moon' ? ' sidebar_with_navigation_dark' : ' ';
}
