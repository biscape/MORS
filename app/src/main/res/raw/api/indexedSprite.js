const DualNode = require('./dualNode.js');


class IndexedSprite extends DualNode {
	static obfuscatedClassName = "ei";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, IndexedSprite.obfuscatedClassName);
	}

	getPalette(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"ae", []);
	}
	getField7118(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"ah", []);
	}
	getField7120(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"aj", []);
	}
	getField7122(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"al", []);
	}
	getField7123(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"as", []);
	}
	getField7119(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"ai", []);
	}
	getField7121(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"ak", []);
	}
	getField7124(){
		return  super.getField(IndexedSprite.obfuscatedClassName,"ax", []);
	}

	static onMethod13281(todo){
		super.onMethodExecution(IndexedSprite.obfuscatedClassName,"ae", todo, []);
	}
	static onNormalize(todo){
		super.onMethodExecution(IndexedSprite.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = IndexedSprite;
