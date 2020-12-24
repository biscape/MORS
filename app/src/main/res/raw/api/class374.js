const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class class374 extends DualNode {
	static obfuscatedClassName = "dp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class374.obfuscatedClassName);
	}

	static getField6973(){
		return new EvictingDualNodeHashTable(super.getField(class374.obfuscatedClassName,"ae", []));
	}
	static getField6974(){
		return new AbstractArchive(super.getField(class374.obfuscatedClassName,"ak", []));
	}

}
module.exports = class374;
