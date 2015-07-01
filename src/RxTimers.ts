import Rx = require('rx');
import * as utils from './utils';

export class RxTimers {

	forever() {
		var subject = Rx.Observable.timer(5000,1000);
		var observer = utils.CreateDumpingObserver();
		subject.subscribe(observer);
	}
	
	timerAndZip() {
		var timer = Rx.Observable.timer(5000,1000);
		var range = Rx.Observable.range(1,10);
		var zip = Rx.Observable.zip(timer, range, (t,r) => [t,r]);
		zip.subscribe(utils.CreateDumpingObserver());
	}	
}