export function hiddenAll() {
    document.querySelectorAll('.two_links_list_in_sidebar').forEach((elem) => elem.classList.remove('open_list'));
    document.querySelectorAll('.btn_show_more').forEach((elem) => elem.style.transform='rotate(-90deg)');
}

export function showMore(btn, id) {
    const list = document.getElementById(id);
    list.classList.toggle('open_list');
    list.className==='two_links_list_in_sidebar'? btn.target.style.transform='rotate(-90deg)': btn.target.style.transform='rotate(0deg)';
}

export function showSelectedList(li) {
    hiddenAll();
    [...li.target.parentElement.children].forEach((elem) => {
        if (elem.tagName==='BUTTON' | elem.tagName==='button') {
            elem.style.transform='rotate(0deg)';
        }
        if (elem.tagName==='UL' | elem.tagName==='ul') {
            elem.classList.add('open_list');
        }
    });
}