export function deleteElement(elem) {
	if (!elem) {
		return String(window.location.pathname);
	}
	let array = window.location.pathname.split('');
	if (array.length>0) {
		array = array.join('').split('/');
		array.forEach((e) => e===elem ? array.splice(array.indexOf(e), 1, '') : null);
		array.shift()
		return array.join('/');
	}
}