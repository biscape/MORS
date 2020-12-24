const Node = require('./node.js');
const AbstractSound = require('./abstractSound.js');


class PcmStream extends Node {
	static obfuscatedClassName = "hg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, PcmStream.obfuscatedClassName);
	}

	getField6099(){
		return  super.getField(PcmStream.obfuscatedClassName,"ao", []);
	}
	getSound(){
		return new AbstractSound(super.getField(PcmStream.obfuscatedClassName,"ap", []));
	}

}
module.exports = PcmStream;
