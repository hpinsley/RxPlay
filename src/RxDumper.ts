import Rx = require('rx');

export class RxDumper {
	
	dumpRx() {
		console.log('Rx!');
		console.log(Rx);
		console.log('Observable');
		console.log(Rx.Observable);
		console.log('Observer');
		console.log(Rx.Observer);		
	}
}