const Bounds = require('./bounds.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class class379 extends DualNode {
	static obfuscatedClassName = "dy";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class379.obfuscatedClassName);
	}

	static getField7072(){
		return  super.getField(class379.obfuscatedClassName,"ae", ['int', 1659287331]);
	}
	static getField7075(){
		return new Bounds(super.getField(class379.obfuscatedClassName,"ce", []));
	}
	static getField7073(){
		return new EvictingDualNodeHashTable(super.getField(class379.obfuscatedClassName,"ai", []));
	}
	static getField7074(){
		return new AbstractArchive(super.getField(class379.obfuscatedClassName,"ak", []));
	}

}
module.exports = class379;
