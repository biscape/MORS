const Node = require('./node.js');
const Interceptor = require('./core/apicore.js');


class NodeHashTable extends Interceptor {
	static obfuscatedClassName = "pk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, NodeHashTable.obfuscatedClassName);
	}

	getBuckets(){
		return  super.getField(NodeHashTable.obfuscatedClassName,"ae", []);
	}
	getIndex(){
		return  super.getField(NodeHashTable.obfuscatedClassName,"ah", []);
	}
	getCurrentGet(){
		return new Node(super.getField(NodeHashTable.obfuscatedClassName,"ai", []));
	}
	getSize(){
		return  super.getField(NodeHashTable.obfuscatedClassName,"ak", []);
	}
	getCurrent(){
		return new Node(super.getField(NodeHashTable.obfuscatedClassName,"ax", []));
	}

	static onPut(todo){
		super.onMethodExecution(NodeHashTable.obfuscatedClassName,"ae", todo, []);
	}
	static onFirst(todo){
		super.onMethodExecution(NodeHashTable.obfuscatedClassName,"ai", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(NodeHashTable.obfuscatedClassName,"ak", todo, []);
	}
	static onNext(todo){
		super.onMethodExecution(NodeHashTable.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = NodeHashTable;
