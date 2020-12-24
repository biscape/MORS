const DualNode = require('./dualNode.js');
const IterableDualNodeQueue = require('./iterableDualNodeQueue.js');
const Interceptor = require('./core/apicore.js');


class IterableDualNodeQueueIterator extends Interceptor {
	static obfuscatedClassName = "fg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IterableDualNodeQueueIterator.obfuscatedClassName);
	}

	getHead(){
		return new DualNode(super.getField(IterableDualNodeQueueIterator.obfuscatedClassName,"ae", []));
	}
	getLast(){
		return new DualNode(super.getField(IterableDualNodeQueueIterator.obfuscatedClassName,"ai", []));
	}
	getQueue(){
		return new IterableDualNodeQueue(super.getField(IterableDualNodeQueueIterator.obfuscatedClassName,"ak", []));
	}

	static onHasNext(todo){
		super.onMethodExecution(IterableDualNodeQueueIterator.obfuscatedClassName,"", todo, []);
	}
	static onNext(todo){
		super.onMethodExecution(IterableDualNodeQueueIterator.obfuscatedClassName,"", todo, []);
	}
	static onRemove(todo){
		super.onMethodExecution(IterableDualNodeQueueIterator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = IterableDualNodeQueueIterator;
