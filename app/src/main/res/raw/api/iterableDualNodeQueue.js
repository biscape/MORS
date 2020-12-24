const DualNode = require('./dualNode.js');
const Interceptor = require('./core/apicore.js');


class IterableDualNodeQueue extends Interceptor {
	static obfuscatedClassName = "fl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IterableDualNodeQueue.obfuscatedClassName);
	}

	getSentinel(){
		return new DualNode(super.getField(IterableDualNodeQueue.obfuscatedClassName,"ak", []));
	}

	static onAdd(todo){
		super.onMethodExecution(IterableDualNodeQueue.obfuscatedClassName,"ae", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(IterableDualNodeQueue.obfuscatedClassName,"ak", todo, []);
	}
	static onRemoveLast(todo){
		super.onMethodExecution(IterableDualNodeQueue.obfuscatedClassName,"ax", todo, []);
	}
	static onIterator(todo){
		super.onMethodExecution(IterableDualNodeQueue.obfuscatedClassName,"", todo, []);
	}
}
module.exports = IterableDualNodeQueue;
