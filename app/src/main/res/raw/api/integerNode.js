const Node = require('./node.js');


class IntegerNode extends Node {
	static obfuscatedClassName = "nt";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IntegerNode.obfuscatedClassName);
	}

	getInteger(){
		return  super.getField(IntegerNode.obfuscatedClassName,"ak", []);
	}

}
module.exports = IntegerNode;
