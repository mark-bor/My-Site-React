import { getWorks, doRequest } from "./get";

export function sortByColor(status, set) {
	document.querySelectorAll('.sorting_by').forEach(elem => elem.classList.remove('sorting_by_active'));
	doRequest().then((res) => set(res.filter(element => element.status===status)));
}

export function sortWorks(btn, set) {
    document.querySelectorAll('.sorting_by').forEach(elem => elem.classList.remove('sorting_by_active'));
    btn.target.parentElement.classList.add('sorting_by_active');
    document.getElementById('sorting').classList.remove('sorting_open');
    getWorks(btn.target.dataset.sort, set);
}