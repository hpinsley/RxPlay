import Rx = require('rx');

export function CreateDumpingObserver() {
	
	var observer = Rx.Observer.create(
		
		(v) => { console.log(v); },
		(error) => { console.log("error", error); },
		() => { console.log("done"); }
	);
	
	return observer;
}
