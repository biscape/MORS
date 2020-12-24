const DualNode = require('./dualNode.js');
const IterableDualNodeQueue = require('./iterableDualNodeQueue.js');
const Interceptor = require('./core/apicore.js');
const IterableNodeHashTable = require('./iterableNodeHashTable.js');


class EvictingDualNodeHashTable extends Interceptor {
	static obfuscatedClassName = "ga";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, EvictingDualNodeHashTable.obfuscatedClassName);
	}

	getCapacity(){
		return  super.getField(EvictingDualNodeHashTable.obfuscatedClassName,"ae", []);
	}
	getDeque(){
		return new IterableDualNodeQueue(super.getField(EvictingDualNodeHashTable.obfuscatedClassName,"ah", []));
	}
	getRemainingCapacity(){
		return  super.getField(EvictingDualNodeHashTable.obfuscatedClassName,"ai", []);
	}
	getField2642(){
		return new DualNode(super.getField(EvictingDualNodeHashTable.obfuscatedClassName,"ak", []));
	}
	getHashTable(){
		return new IterableNodeHashTable(super.getField(EvictingDualNodeHashTable.obfuscatedClassName,"ax", []));
	}

	static onPut(todo){
		super.onMethodExecution(EvictingDualNodeHashTable.obfuscatedClassName,"ai", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(EvictingDualNodeHashTable.obfuscatedClassName,"ak", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(EvictingDualNodeHashTable.obfuscatedClassName,"ax", todo, []);
	}
	static onToString(todo){
		super.onMethodExecution(EvictingDualNodeHashTable.obfuscatedClassName,"", todo, []);
	}
}
module.exports = EvictingDualNodeHashTable;
