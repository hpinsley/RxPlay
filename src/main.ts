import {RxDumper} from './RxDumper';
import {RxSimple} from './RxSimple';
import {RxTimers} from './RxTimers';
import {RxNodeEvents} from './RxNodeEvents';
import {RxPromise} from './RxPromise';
import {RxBackpressure} from './RxBackpressure';

//var dumper = new RxDumper();
//dumper.dumpRx();

var simple = new RxSimple();

//simple.fromArray();
//simple.fromRange();
//simple.fromZip();
//simple.fromMap();
//simple.fromFlatMap();
//simple.bufferByTime();
//simple.timer();
//simple.dispose();

var timers = new RxTimers();
//timers.forever();
//timers.timerAndZip();
//timers.hotExample();

var nodeEvents = new RxNodeEvents();
//nodeEvents.emitterTest();
//nodeEvents.callbackTest();

var promise = new RxPromise();
//promise.toPromise();

var backpressure = new RxBackpressure();
//backpressure.zip();
//backpressure.throttle();
//backpressure.generate();	//stackoverflow exception
//backpressure.sample();
backpressure.bufferWithCount();