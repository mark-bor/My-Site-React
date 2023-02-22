export function hiddenMenuWindow() {
	const link = document.querySelector('#link');
	const menu = document.querySelector('#menu_window');

	link.classList.remove('link_active');
	menu.classList.remove('transMenu');
	menu.classList.add('transMenu_S');
}