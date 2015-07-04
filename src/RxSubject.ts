import Rx = require('rx');
import * as utils from './utils';

export class RxTimers {

	forever() {
		var subject = Rx.Observable.timer(5000,1000);
		var observer = utils.CreateDumpingObserver();
		subject.subscribe(observer);
	}
	
	timerAndZip() {
		var timer = Rx.Observable.timer(2000,500)	//Start after 2 seconds and them go every half second
						.map(v => v + 1)	//emit one-based numbers instead of zero-based
						.where(v => v % 2 == 0)	// but only even ones
						.take(4);	//and only the first four
						
		var range = Rx.Observable.range(1,10)
						.map(v => v * v);	//emit squares
						
		var zip = Rx.Observable.zip(timer, range, (t,r) => [t,r])
						.map(arr => [arr[0], arr[1], arr[0] + arr[1]]);
						
		zip.subscribe(utils.CreateDumpingObserver());
	}
	coldExample() {
		var sub1, sub2;
		var source = Rx.Observable.interval(1000);
		
		sub1 = source.subscribe(utils.CreateDumpingObserver());
		
		setTimeout(() => {
			sub2 = source.subscribe(utils.CreateDumpingObserver()); 
		}, 3000);
				
		setTimeout(() => {
			sub1.dispose();
			sub2.dispose();
		}, 10000);
	}	
		
	hotExample() {
		var sub1, sub2;
		var hot = Rx.Observable.interval(1000).publish();
		
		hot.connect();

		console.log('Starting the hot observable');
		
		setTimeout(() => {
			console.log('Subscribing sub1');
			sub1 = hot.subscribe(utils.CreateDumpingObserver("sub1")); 
		}, 3000);
		
		
		setTimeout(() => {
			console.log('Subscribing sub2');
			sub2 = hot.subscribe(utils.CreateDumpingObserver("sub2")); 
		}, 5000);
				
		setTimeout(() => {
			console.log("unsubscribing sub1 and sub2");
			sub1.dispose();
			sub2.dispose();
			
		}, 10000);
		
		setTimeout(() => {
			console.log("subscribing sub3");
			var sub3 = hot.take(5).subscribe(utils.CreateDumpingObserver("sub3"));
		}, 13000);

	}	
}