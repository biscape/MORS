const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class VarcInt extends DualNode {
	static obfuscatedClassName = "dd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VarcInt.obfuscatedClassName);
	}

	static getField6857(){
		return new EvictingDualNodeHashTable(super.getField(VarcInt.obfuscatedClassName,"ae", []));
	}
	static getField6858(){
		return new AbstractArchive(super.getField(VarcInt.obfuscatedClassName,"ak", []));
	}
	getPersist(){
		return  super.getField(VarcInt.obfuscatedClassName,"ai", []);
	}

	static onMethod12865(todo){
		super.onMethodExecution(VarcInt.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod12867(todo){
		super.onMethodExecution(VarcInt.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = VarcInt;
