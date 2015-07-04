import Rx = require('rx');
import * as Events from 'events';
import * as fs from 'fs'
import * as utils from './utils';

export class RxNodeEvents {

	emitterTest() {
		var emitter = new Events.EventEmitter();
		var source = Rx.Observable.fromEvent(emitter, "gotdata");
		var observer = utils.CreateDumpingObserver("data observer");
		source.subscribe(observer);
		
		emitter.emit("gotdata", {name: "howard", age: 55});		
	}
	
	callbackTest() {
		var rename = Rx.Observable.fromNodeCallback(fs.rename);
		var source = rename("noexist.txt", "exist.txt");
		source.subscribe(utils.CreateDumpingObserver("rename observer"));
	}
}