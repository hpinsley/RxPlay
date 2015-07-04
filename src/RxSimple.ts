import Rx = require('rx');
import * as utils from './utils';

export class RxSimple {
	
	fromArray() {
		var observable = Rx.Observable.fromArray([1,2,3,4,5]);
		var sub = observable.subscribe(v => {
			console.log(v);
		});
	}
	
	fromRange() {
		var source = Rx.Observable.range(1,5);
		var tapped = source.tap();	// What does tap do?
		tapped.subscribe(utils.CreateDumpingObserver());
	}
	
	fromZip() {
		var s1 = Rx.Observable.range(1,5);
		var s2 = Rx.Observable.range(1,10);
		var s3 = Rx.Observable.zip(s1, s2, (v1,v2) => [v1,v2]);
		
		//s3.subscribe(v => console.log(v));
		var x = s3.subscribe();
		console.log(x);
	}
	
	fromFlatMap() {
		var s1 = Rx.Observable.interval(1000);
		var s2 = Rx.Observable.range(1,2);
		var s3 = s1.flatMap(s2);
		
		s3.subscribe(utils.CreateDumpingObserver());		
	}
	
	buffer1() {
		var s1 = Rx.Observable.interval(500);
		var bufseq = s1.bufferWithCount(5);
		var sum = bufseq.map(v => v.reduce((acc,v) => acc + v, 0));
		var both = Rx.Observable.zip(bufseq, sum, (v1, v2) => { return {v:v1, sum:v2}; });
		both.subscribe(utils.CreateDumpingObserver());
	}
	
	bufferByTime() {
		var s1 = Rx.Observable.interval(500);
		var bufseq = s1.bufferWithTime(2000);
		var sum = bufseq.map(v => v.reduce((acc,v) => acc + v, 0));
		var both = Rx.Observable.zip(bufseq, sum, (v1, v2) => { return {v:v1, sum:v2}; });
		both.subscribe(utils.CreateDumpingObserver());
		s1.subscribe(utils.CreateDumpingObserver());
		
	}
	
	timer() {
		var source = Rx.Observable.timer(2000);
		var vals = Rx.Observable.range(1,10);
		var delayed = source.flatMap(vals);
		delayed.subscribe(utils.CreateDumpingObserver());
	}
	
	//Not sure if this is right or what it is doing.
	dispose() {
		var d = Rx.Disposable.create(() => { console.log(this); });
		d.x = "goodbye";
		console.log(d);
		var source = Rx.Observable.using(() => d, x => Rx.Observable.range(1,5));
		source.subscribe(utils.CreateDumpingObserver());
	}
}