export function doRequest() {
	return (
		fetch(`${window.location.origin}/JSON/works.json`)
		.then((res) => res.json())
		.then((res) => { return res; })
		.catch((err) => console.log(err))
	)
}

export function getWorks(sortBy, set) {
	document.querySelectorAll('.leg_el').forEach(elem => elem.classList.remove('leg_el_active'));
	doRequest().then((res) => sortBy==='all' ? set(res) : set(res.filter((element) => element.type===sortBy)));
}