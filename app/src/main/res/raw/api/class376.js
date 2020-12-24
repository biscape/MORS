const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class class376 extends DualNode {
	static obfuscatedClassName = "du";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class376.obfuscatedClassName);
	}

	static getField7035(){
		return new EvictingDualNodeHashTable(super.getField(class376.obfuscatedClassName,"ae", []));
	}
	static getField7036(){
		return new AbstractArchive(super.getField(class376.obfuscatedClassName,"ak", []));
	}

	static onMethod13140(todo){
		super.onMethodExecution(class376.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13146(todo){
		super.onMethodExecution(class376.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13148(todo){
		super.onMethodExecution(class376.obfuscatedClassName,"bz", todo, []);
	}
}
module.exports = class376;
