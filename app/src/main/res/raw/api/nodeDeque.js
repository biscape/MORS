const Node = require('./node.js');
const Interceptor = require('./core/apicore.js');


class NodeDeque extends Interceptor {
	static obfuscatedClassName = "fe";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, NodeDeque.obfuscatedClassName);
	}

	getCurrent(){
		return new Node(super.getField(NodeDeque.obfuscatedClassName,"ae", []));
	}
	getSentinel(){
		return new Node(super.getField(NodeDeque.obfuscatedClassName,"ak", []));
	}

	static onPrevious(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"aa", todo, []);
	}
	static onAddFirst(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"ae", todo, []);
	}
	static onRemoveLast(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"ah", todo, []);
	}
	static onLast(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod4095(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"as", todo, []);
	}
	static onAddLast(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"ai", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(NodeDeque.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = NodeDeque;
