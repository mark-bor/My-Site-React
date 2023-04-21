export function hiddenLanguage() {
	document.getElementById('select_language_input').checked=false;
}

export function languageMouseDown(btn) {
    btn.target.style.color='#457FD6'
};

export function languageMouseUp(btn) {
	btn.target.style.color='';
}