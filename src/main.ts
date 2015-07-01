import {RxDumper} from './RxDumper';
import {RxSimple} from './RxSimple';
import {RxTimers} from './RxTimers';

//var dumper = new RxDumper();
//dumper.dumpRx();

var simple = new RxSimple();

//simple.fromArray();
//simple.fromRange();
//simple.fromZip();

var timers = new RxTimers();
//timers.forever();
timers.timerAndZip();