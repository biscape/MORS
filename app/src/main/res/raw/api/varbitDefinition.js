const IndexedSprite = require('./indexedSprite.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class VarbitDefinition extends DualNode {
	static obfuscatedClassName = "db";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VarbitDefinition.obfuscatedClassName);
	}

	static getField6831(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"um", []);
	}
	static getVarbitDefinition_archive(){
		return new AbstractArchive(super.getField(VarbitDefinition.obfuscatedClassName,"ae", []));
	}
	static getField6824(){
		return new EvictingDualNodeHashTable(super.getField(VarbitDefinition.obfuscatedClassName,"ah", []));
	}
	static getVarbitDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(VarbitDefinition.obfuscatedClassName,"as", []));
	}
	static getHitSplatDefinition_fontsArchive(){
		return new AbstractArchive(super.getField(VarbitDefinition.obfuscatedClassName,"ai", []));
	}
	static getField6826(){
		return new AbstractArchive(super.getField(VarbitDefinition.obfuscatedClassName,"ak", []));
	}
	static getField6828(){
		return new EvictingDualNodeHashTable(super.getField(VarbitDefinition.obfuscatedClassName,"ax", []));
	}
	static getPort1(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"da", ['int', 361947801]);
	}
	getField6832(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ac", []);
	}
	getField6834(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ag", ['int', 1979355105]);
	}
	getField6835(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"am", ['int', 263651869]);
	}
	getField6836(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"an", ['int', 963496239]);
	}
	getField6837(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ao", ['int', 1774752419]);
	}
	getField6838(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ap", ['int', 1009354293]);
	}
	getFontId(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"aq", ['int', 489568823]);
	}
	getField6840(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ar", ['int', 968326587]);
	}
	getField6842(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"au", ['int', 932306939]);
	}
	getField6844(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"aw", ['int', 2111622341]);
	}
	getField6845(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ay", ['int', 950555967]);
	}
	getField6846(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"az", ['int', 554695369]);
	}
	getField6847(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"bp", ['int', 261104579]);
	}
	getField6833(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"ad", ['int', 1386509341]);
	}
	getField6841(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"at", ['int', 172805201]);
	}
	getField6843(){
		return  super.getField(VarbitDefinition.obfuscatedClassName,"av", []);
	}

	static onMethod12806(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"aa", todo, []);
	}
	static onTransform(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"af", todo, []);
	}
	static onMethod12812(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod12814(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod12815(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"al", todo, []);
	}
	static onMethod12819(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"as", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod12823(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod12807(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod12804(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"eu", todo, []);
	}
	static onMethod12797(todo){
		super.onMethodExecution(VarbitDefinition.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = VarbitDefinition;
