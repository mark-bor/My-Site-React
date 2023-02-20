export function showMenuWindow() {
	const link = document.querySelector('#link');
	const menu = document.querySelector('#menu_window');

	link.classList.toggle('link_active');
	menu.classList.toggle('transMenu');
	menu.classList.toggle('transMenu_S');
}