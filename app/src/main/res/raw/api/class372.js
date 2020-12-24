const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const MouseWheel = require('./mouseWheel.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class class372 extends DualNode {
	static obfuscatedClassName = "dh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class372.obfuscatedClassName);
	}

	static getField6944(){
		return new AbstractArchive(super.getField(class372.obfuscatedClassName,"ae", []));
	}
	static getField6951(){
		return  super.getField(class372.obfuscatedClassName,"cm", []);
	}
	static getField6952(){
		return new MouseWheel(super.getField(class372.obfuscatedClassName,"ny", []));
	}
	static getField6945(){
		return  super.getField(class372.obfuscatedClassName,"ai", ['int', 923610949]);
	}
	static getField6946(){
		return new AbstractArchive(super.getField(class372.obfuscatedClassName,"ak", []));
	}
	static getField6948(){
		return new EvictingDualNodeHashTable(super.getField(class372.obfuscatedClassName,"ax", []));
	}
	getField6954(){
		return  super.getField(class372.obfuscatedClassName,"aa", []);
	}
	getField6956(){
		return  super.getField(class372.obfuscatedClassName,"af", []);
	}
	getField6957(){
		return  super.getField(class372.obfuscatedClassName,"ah", ['int', 251352637]);
	}
	getField6958(){
		return  super.getField(class372.obfuscatedClassName,"aj", []);
	}
	getField6959(){
		return  super.getField(class372.obfuscatedClassName,"al", []);
	}
	getHideUnderlay(){
		return  super.getField(class372.obfuscatedClassName,"aq", []);
	}
	getCountobj(){
		return  super.getField(class372.obfuscatedClassName,"as", []);
	}
	getField6955(){
		return  super.getField(class372.obfuscatedClassName,"ab", []);
	}

	static onMethod12981(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod12983(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod12984(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"al", todo, []);
	}
	static onGetCountObj(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"as", todo, []);
	}
	static onMethod12982(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"ai", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod12966(todo){
		super.onMethodExecution(class372.obfuscatedClassName,"ad", todo, []);
	}
}
module.exports = class372;
