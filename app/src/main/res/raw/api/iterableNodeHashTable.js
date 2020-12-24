const Node = require('./node.js');
const Interceptor = require('./core/apicore.js');


class IterableNodeHashTable extends Interceptor {
	static obfuscatedClassName = "py";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IterableNodeHashTable.obfuscatedClassName);
	}

	getBuckets(){
		return  super.getField(IterableNodeHashTable.obfuscatedClassName,"ae", []);
	}
	getIndex(){
		return  super.getField(IterableNodeHashTable.obfuscatedClassName,"ah", []);
	}
	getCurrentGet(){
		return new Node(super.getField(IterableNodeHashTable.obfuscatedClassName,"ai", []));
	}
	getSize(){
		return  super.getField(IterableNodeHashTable.obfuscatedClassName,"ak", []);
	}
	getCurrent(){
		return new Node(super.getField(IterableNodeHashTable.obfuscatedClassName,"ax", []));
	}

	static onPut(todo){
		super.onMethodExecution(IterableNodeHashTable.obfuscatedClassName,"ae", todo, []);
	}
	static onNext(todo){
		super.onMethodExecution(IterableNodeHashTable.obfuscatedClassName,"ah", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(IterableNodeHashTable.obfuscatedClassName,"ai", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(IterableNodeHashTable.obfuscatedClassName,"ak", todo, []);
	}
	static onFirst(todo){
		super.onMethodExecution(IterableNodeHashTable.obfuscatedClassName,"ax", todo, []);
	}
	static onIterator(todo){
		super.onMethodExecution(IterableNodeHashTable.obfuscatedClassName,"", todo, []);
	}
}
module.exports = IterableNodeHashTable;
