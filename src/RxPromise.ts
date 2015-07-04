import Rx = require('rx');
import * as utils from './utils';

export class RxPromise {
	
	toPromise() {
		var source = Rx.Observable.just(1).toPromise();
		source.then(v => console.log(v), e => console.log("error",e));
	}
}