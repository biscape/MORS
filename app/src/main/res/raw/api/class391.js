const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');


class class391 extends DualNode {
	static obfuscatedClassName = "hl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class391.obfuscatedClassName);
	}

	static getField7204(){
		return new EvictingDualNodeHashTable(super.getField(class391.obfuscatedClassName,"ak", []));
	}

}
module.exports = class391;
