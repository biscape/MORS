const TextureProvider = require('./textureProvider.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class class366 extends DualNode {
	static obfuscatedClassName = "da";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class366.obfuscatedClassName);
	}

	static getField6802(){
		return new AbstractArchive(super.getField(class366.obfuscatedClassName,"ae", []));
	}
	static getField6810(){
		return new TextureProvider(super.getField(class366.obfuscatedClassName,"jm", []));
	}
	static getField6804(){
		return new EvictingDualNodeHashTable(super.getField(class366.obfuscatedClassName,"ai", []));
	}
	static getField6805(){
		return new AbstractArchive(super.getField(class366.obfuscatedClassName,"ak", []));
	}
	static getField6807(){
		return new EvictingDualNodeHashTable(super.getField(class366.obfuscatedClassName,"ax", []));
	}
	getField6814(){
		return  super.getField(class366.obfuscatedClassName,"af", ['int', 730401613]);
	}
	getField6817(){
		return  super.getField(class366.obfuscatedClassName,"am", ['int', 2140324645]);
	}
	getField6818(){
		return  super.getField(class366.obfuscatedClassName,"an", ['int', 472313221]);
	}
	getField6819(){
		return  super.getField(class366.obfuscatedClassName,"aq", []);
	}
	getField6820(){
		return  super.getField(class366.obfuscatedClassName,"aw", []);
	}
	getField6821(){
		return  super.getField(class366.obfuscatedClassName,"ay", ['int', 1942917731]);
	}
	getField6813(){
		return  super.getField(class366.obfuscatedClassName,"ab", ['int', 151416921]);
	}

	static onMethod12782(todo){
		super.onMethodExecution(class366.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod12787(todo){
		super.onMethodExecution(class366.obfuscatedClassName,"as", todo, []);
	}
	static onMethod12780(todo){
		super.onMethodExecution(class366.obfuscatedClassName,"dn", todo, []);
	}
}
module.exports = class366;
