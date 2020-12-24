const Node = require('./node.js');


class ByteArrayNode extends Node {
	static obfuscatedClassName = "mo";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ByteArrayNode.obfuscatedClassName);
	}

	getByteArray(){
		return  super.getField(ByteArrayNode.obfuscatedClassName,"ak", []);
	}

}
module.exports = ByteArrayNode;
