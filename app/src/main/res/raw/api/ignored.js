const IndexedSprite = require('./indexedSprite.js');
const class61 = require('./class61.js');


class Ignored extends class61 {
	static obfuscatedClassName = "eb";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Ignored.obfuscatedClassName);
	}

	static getField5942(){
		return  super.getField(Ignored.obfuscatedClassName,"cu", ['long', 6443027309893267073]);
	}
	static getField5943(){
		return new IndexedSprite(super.getField(Ignored.obfuscatedClassName,"en", []));
	}
	getField5944(){
		return  super.getField(Ignored.obfuscatedClassName,"ak", []);
	}

	static onVmethod13338(todo){
		super.onMethodExecution(Ignored.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod10469(todo){
		super.onMethodExecution(Ignored.obfuscatedClassName,"ak", todo, []);
	}
	static onCompareTo_user(todo){
		super.onMethodExecution(Ignored.obfuscatedClassName,"compareTo", todo, []);
	}
	static onMethod10462(todo){
		super.onMethodExecution(Ignored.obfuscatedClassName,"bw", todo, []);
	}
}
module.exports = Ignored;
