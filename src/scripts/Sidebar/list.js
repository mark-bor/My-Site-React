export function hiddenAll() {
    document.querySelectorAll('.second_level_list_in_sidebar').forEach((elem) => elem.classList.remove('open_list'));
    document.querySelectorAll('.btn_show_more').forEach((elem) => elem.style.transform='rotate(-90deg)');
}

export function showMore(btn, id) {
    const list = document.getElementById(id);
    list.classList.toggle('open_list');
    list.className==='second_level_list_in_sidebar'? btn.target.style.transform='rotate(-90deg)': btn.target.style.transform='rotate(0deg)';
}

export function showSelectedList(text) {
    hiddenAll();
    if (document.getElementById('root').className==="root") {
        document.getElementById(`${text}_list_btn`).style.transform='rotate(0deg)';
        document.getElementById(`${text}_list`).classList.add('open_list');
    }
}