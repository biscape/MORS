const IterableDualNodeQueue = require('./iterableDualNodeQueue.js');
const class98 = require('./class98.js');
const Interceptor = require('./core/apicore.js');
const IterableNodeHashTable = require('./iterableNodeHashTable.js');


class DemotingHashTable extends Interceptor {
	static obfuscatedClassName = "gt";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DemotingHashTable.obfuscatedClassName);
	}

	getRemaining(){
		return  super.getField(DemotingHashTable.obfuscatedClassName,"ae", []);
	}
	getField2755(){
		return new class98(super.getField(DemotingHashTable.obfuscatedClassName,"ah", []));
	}
	getHashTable(){
		return new IterableNodeHashTable(super.getField(DemotingHashTable.obfuscatedClassName,"ai", []));
	}
	getCapacity(){
		return  super.getField(DemotingHashTable.obfuscatedClassName,"ak", []);
	}
	getQueue(){
		return new IterableDualNodeQueue(super.getField(DemotingHashTable.obfuscatedClassName,"ax", []));
	}

	static onRemove(todo){
		super.onMethodExecution(DemotingHashTable.obfuscatedClassName,"ae", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(DemotingHashTable.obfuscatedClassName,"as", todo, []);
	}
	static onRemoveWrapper(todo){
		super.onMethodExecution(DemotingHashTable.obfuscatedClassName,"ai", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(DemotingHashTable.obfuscatedClassName,"ak", todo, []);
	}
	static onPut(todo){
		super.onMethodExecution(DemotingHashTable.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = DemotingHashTable;
