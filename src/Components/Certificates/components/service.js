import { widthCert } from "./Section.js";
// export let widthCert = 0;
// window.innerWidth <= 481 ? widthCert = 370 : widthCert = 850;

export let certArr;

export function getCertificates({object}) {	
	fetch(object.url)
	.then((res) => res.json())
	.then((res) => {
		certArr = res;
		// object.len = res.length;
		// return res.forEach((cert) => <Certificate certificate={cert}/>);
		// return res;
	})
	.catch((err) => {
		console.log("ERROR in getCertificates() ==>", err);
	});
}

/*------------------------------- BOTTOM BUTTONS STYLE -----------------------------------*/
export function buttonStyle(object, len) {
	const left = document.getElementById(`to_L-${object.type}`);
	const right = document.getElementById(`to_R-${object.type}`);
	document.querySelectorAll(`.checkbox_${object.type}`).forEach((checkbox) => {
		if (checkbox === document.getElementById(`${1+Number(object.index)}_${object.type}`)){
			checkbox.classList.add(`active`);
		} else {
			checkbox.classList.remove(`active`);
		}
		left.style.width = '100%';
		right.style.width = '100%';
	});
	const slider = document.getElementById(`menu_block_text_${object.type}`);
	if (slider.style.transform === `translateX(${-1*widthCert*(len-len)}px)`) {
		left.style.width = '0';
		right.style.width = '100%';
	}
	if (slider.style.transform === `translateX(${-1*widthCert*(len-1)}px)`) {
		left.style.width = '100%';
		right.style.width = '0';
	}
}
