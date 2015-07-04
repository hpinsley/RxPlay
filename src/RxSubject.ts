import Rx = require('rx');
import * as utils from './utils';

export class RxSubject {

	simple() {
		var subject = new Rx.Subject();
		subject.subscribe(utils.CreateDumpingObserver("simple subject"));
		subject.onNext({name: "Howard"});
		subject.onNext(2);
		subject.onCompleted();
	}
	
	asRelay() {
		var source = Rx.Observable.interval(1000).take(10);
		var subject = new Rx.Subject();
		var sub = source.subscribe(subject);
		
		var sub1 = subject.subscribe(utils.CreateDumpingObserver('sub1'));
		var sub2 = subject.subscribe(utils.CreateDumpingObserver('sub2'));
		
	}
}