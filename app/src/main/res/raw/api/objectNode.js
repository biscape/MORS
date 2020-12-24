const Node = require('./node.js');


class ObjectNode extends Node {
	static obfuscatedClassName = "nz";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ObjectNode.obfuscatedClassName);
	}

	getObj(){
		return  super.getField(ObjectNode.obfuscatedClassName,"ak", []);
	}

}
module.exports = ObjectNode;
