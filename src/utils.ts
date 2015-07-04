import Rx = require('rx');

export function CreateDumpingObserver(name:string = '(anon)') {
	
	var observer = Rx.Observer.create(
		
		(v) => { console.log(name, v); },
		(error) => { 
			console.log(name, "error", error); 
		},
		() => { console.log(name, "done"); }
	);
	
	return observer;
}
