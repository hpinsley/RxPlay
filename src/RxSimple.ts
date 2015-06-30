import Rx = require('rx');

export class RxSimple {
	
	fromArray() {
		var observable = Rx.Observable.fromArray([1,2,3,4,5]);
		var sub = observable.subscribe(v => {
			console.log(v);
		});
	}
	
	fromRange() {
		var source = Rx.Observable.range(1,5);
		source.subscribe(v => {console.log(v);});
	}
	
	fromZip() {
		var s1 = Rx.Observable.range(1,5);
		var s2 = Rx.Observable.range(1,10);
		var s3 = Rx.Observable.zip(s1, s2, (v1,v2) => [v1,v2]);
		
		s3.subscribe(v => console.log(v));
	}
}