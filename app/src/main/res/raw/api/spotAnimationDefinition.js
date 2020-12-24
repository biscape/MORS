const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class SpotAnimationDefinition extends DualNode {
	static obfuscatedClassName = "em";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SpotAnimationDefinition.obfuscatedClassName);
	}

	static getField7132(){
		return new AbstractArchive(super.getField(SpotAnimationDefinition.obfuscatedClassName,"ae", []));
	}
	static getSpotAnimationDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(SpotAnimationDefinition.obfuscatedClassName,"ai", []));
	}
	static getSpotAnimationDefinition_archive(){
		return new AbstractArchive(super.getField(SpotAnimationDefinition.obfuscatedClassName,"ak", []));
	}
	static getField7135(){
		return new EvictingDualNodeHashTable(super.getField(SpotAnimationDefinition.obfuscatedClassName,"ax", []));
	}
	getField7138(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"aa", []);
	}
	getField7140(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"af", []);
	}
	getId(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"ah", ['int', 390054393]);
	}
	getField7142(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"aj", ['int', 1160141327]);
	}
	getField7143(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"al", []);
	}
	getField7144(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"am", ['int', 1747678949]);
	}
	getField7145(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"an", ['int', 1485451345]);
	}
	getField7146(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"aq", ['int', 2087536339]);
	}
	getField7147(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"as", ['int', 765979567]);
	}
	getField7148(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"aw", ['int', 850156771]);
	}
	getField7149(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"ay", ['int', 1202081645]);
	}
	getField7139(){
		return  super.getField(SpotAnimationDefinition.obfuscatedClassName,"ab", []);
	}

	static onMethod13323(todo){
		super.onMethodExecution(SpotAnimationDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(SpotAnimationDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13332(todo){
		super.onMethodExecution(SpotAnimationDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onGetFrames(todo){
		super.onMethodExecution(SpotAnimationDefinition.obfuscatedClassName,"af", todo, []);
	}
}
module.exports = SpotAnimationDefinition;
