const Node = require('./node.js');
const Interceptor = require('./core/apicore.js');


class IterableNodeDeque extends Interceptor {
	static obfuscatedClassName = "fx";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IterableNodeDeque.obfuscatedClassName);
	}

	getField2634(){
		return new Node(super.getField(IterableNodeDeque.obfuscatedClassName,"ae", []));
	}
	getSentinel(){
		return new Node(super.getField(IterableNodeDeque.obfuscatedClassName,"ak", []));
	}

	static onMethod4656(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"aa", todo, []);
	}
	static onAddFirst(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4661(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"af", todo, []);
	}
	static onLast(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"ah", todo, []);
	}
	static onPrevious(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod4667(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"al", todo, []);
	}
	static onMethod4674(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"as", todo, []);
	}
	static onRsClear(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4657(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"ab", todo, []);
	}
	static onAdd(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onAddAll(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onContains(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onContainsAll(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onHashCode(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onIsEmpty(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onIterator(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onRemove(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onRemoveAll(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onRetainAll(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onSize(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onToArray(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
	static onToArray(todo){
		super.onMethodExecution(IterableNodeDeque.obfuscatedClassName,"", todo, []);
	}
}
module.exports = IterableNodeDeque;
