export const hiddenLanguage = () => document.getElementById('select_lang').className='select_lang';

export function languageMouseDown(btn) {
    btn.target.style.color='#457FD6'
};

export function languageMouseUp(btn) {
	btn.target.style.color='';
	const selectLang = document.getElementById('select_lang');
	selectLang.className==='select_lang' ? selectLang.className='select_lang_active' : selectLang.className='select_lang'
}