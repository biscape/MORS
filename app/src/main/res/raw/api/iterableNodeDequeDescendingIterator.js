const Node = require('./node.js');
const IterableNodeDeque = require('./iterableNodeDeque.js');
const Interceptor = require('./core/apicore.js');


class IterableNodeDequeDescendingIterator extends Interceptor {
	static obfuscatedClassName = "fu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IterableNodeDequeDescendingIterator.obfuscatedClassName);
	}

	getField2608(){
		return new Node(super.getField(IterableNodeDequeDescendingIterator.obfuscatedClassName,"ae", []));
	}
	getLast(){
		return new Node(super.getField(IterableNodeDequeDescendingIterator.obfuscatedClassName,"ai", []));
	}
	getDeque(){
		return new IterableNodeDeque(super.getField(IterableNodeDequeDescendingIterator.obfuscatedClassName,"ak", []));
	}

	static onSetDeque(todo){
		super.onMethodExecution(IterableNodeDequeDescendingIterator.obfuscatedClassName,"aa", todo, []);
	}
	static onStart(todo){
		super.onMethodExecution(IterableNodeDequeDescendingIterator.obfuscatedClassName,"ab", todo, []);
	}
	static onHasNext(todo){
		super.onMethodExecution(IterableNodeDequeDescendingIterator.obfuscatedClassName,"", todo, []);
	}
	static onNext(todo){
		super.onMethodExecution(IterableNodeDequeDescendingIterator.obfuscatedClassName,"", todo, []);
	}
	static onRemove(todo){
		super.onMethodExecution(IterableNodeDequeDescendingIterator.obfuscatedClassName,"", todo, []);
	}
}
module.exports = IterableNodeDequeDescendingIterator;
