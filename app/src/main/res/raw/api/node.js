const Interceptor = require('./core/apicore.js');


class Node extends Interceptor {
	static obfuscatedClassName = "nr";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Node.obfuscatedClassName);
	}

	getNext(){
		return new Node(super.getField(Node.obfuscatedClassName,"go", []));
	}
	getPrevious(){
		return new Node(super.getField(Node.obfuscatedClassName,"gu", []));
	}
	getKey(){
		return  super.getField(Node.obfuscatedClassName,"gb", []);
	}

	static onHasNext(todo){
		super.onMethodExecution(Node.obfuscatedClassName,"lw", todo, []);
	}
	static onRemove(todo){
		super.onMethodExecution(Node.obfuscatedClassName,"lc", todo, []);
	}
}
module.exports = Node;
