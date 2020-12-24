const Node = require('./node.js');
const Interceptor = require('./core/apicore.js');
const IterableNodeHashTable = require('./iterableNodeHashTable.js');


class IterableNodeHashTableIterator extends Interceptor {
	static obfuscatedClassName = "pa";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IterableNodeHashTableIterator.obfuscatedClassName);
	}

	getHead(){
		return new Node(super.getField(IterableNodeHashTableIterator.obfuscatedClassName,"ae", []));
	}
	getIndex(){
		return  super.getField(IterableNodeHashTableIterator.obfuscatedClassName,"ai", []);
	}
	getHashTable(){
		return new IterableNodeHashTable(super.getField(IterableNodeHashTableIterator.obfuscatedClassName,"ak", []));
	}
	getLast(){
		return new Node(super.getField(IterableNodeHashTableIterator.obfuscatedClassName,"ax", []));
	}

	static onStart(todo){
		super.onMethodExecution(IterableNodeHashTableIterator.obfuscatedClassName,"aa", todo, []);
	}
	static onHasNext(todo){
		super.onMethodExecution(IterableNodeHashTableIterator.obfuscatedClassName,"", todo, []);
	}
	static onNext(todo){
		super.onMethodExecution(IterableNodeHashTableIterator.obfuscatedClassName,"", todo, []);
	}
	static onRemove(todo){
		super.onMethodExecution(IterableNodeHashTableIterator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = IterableNodeHashTableIterator;
