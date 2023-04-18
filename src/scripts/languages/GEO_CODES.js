const GEO_CODES = {
	"UA":{code:"UA", ln:"uk|uk-ua", name:"Україна"},
	"PL":{code:"PL", ln:"pl|pl-pl", name:"Польща"}
};



export default function getGeolocationDateTimeLocale(){
	try {
		// var nf = Intl.DateTimeFormat();
		// var local = nf.resolvedOptions().locale.toLowerCase();
		let local = navigator.language;

		for(var i in GEO_CODES){
			if(GEO_CODES[i].ln.split('|').indexOf(local)>-1) {
				return GEO_CODES[i];
			}
		}
		return local;	
	} catch {
		return 'null';
	}	
}