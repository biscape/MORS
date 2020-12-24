const Node = require('./node.js');


class DualNode extends Node {
	static obfuscatedClassName = "mp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DualNode.obfuscatedClassName);
	}

	getPreviousDual(){
		return new DualNode(super.getField(DualNode.obfuscatedClassName,"dl", []));
	}
	getNextDual(){
		return new DualNode(super.getField(DualNode.obfuscatedClassName,"dr", []));
	}
	getKeyDual(){
		return  super.getField(DualNode.obfuscatedClassName,"dv", []);
	}

	static onRemoveDual(todo){
		super.onMethodExecution(DualNode.obfuscatedClassName,"dr", todo, []);
	}
}
module.exports = DualNode;
