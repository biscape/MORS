const Node = require('./node.js');


class InterfaceParent extends Node {
	static obfuscatedClassName = "ik";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, InterfaceParent.obfuscatedClassName);
	}

	getGroup(){
		return  super.getField(InterfaceParent.obfuscatedClassName,"ak", ['int', 1714697067]);
	}

}
module.exports = InterfaceParent;
