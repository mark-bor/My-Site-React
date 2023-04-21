export function showInformation(setContent, setWindow, title) {
    fetch(`${window.location.origin}/JSON/technologies.json`)
    .then(res => res.json())
    .then(res => res.filter(elem => elem.title===title).map(elem => setContent({...elem})))
    .then(res => setWindow(true))
    .catch(err => console.log(err));
}