const Node = require('./node.js');


class AbstractSound extends Node {
	static obfuscatedClassName = "gz";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AbstractSound.obfuscatedClassName);
	}


}
module.exports = AbstractSound;
