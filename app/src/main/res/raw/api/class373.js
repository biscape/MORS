const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class class373 extends DualNode {
	static obfuscatedClassName = "do";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class373.obfuscatedClassName);
	}

	static getField6962(){
		return new EvictingDualNodeHashTable(super.getField(class373.obfuscatedClassName,"ae", []));
	}
	static getField6963(){
		return new AbstractArchive(super.getField(class373.obfuscatedClassName,"ak", []));
	}

	static onMethod13010(todo){
		super.onMethodExecution(class373.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod13012(todo){
		super.onMethodExecution(class373.obfuscatedClassName,"bb", todo, []);
	}
	static onMethod13004(todo){
		super.onMethodExecution(class373.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod13003(todo){
		super.onMethodExecution(class373.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class373;
