const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class SequenceDefinition extends DualNode {
	static obfuscatedClassName = "dv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SequenceDefinition.obfuscatedClassName);
	}

	static getSequenceDefinition_animationsArchive(){
		return new AbstractArchive(super.getField(SequenceDefinition.obfuscatedClassName,"ae", []));
	}
	static getSequenceDefinition_cachedFrames(){
		return new EvictingDualNodeHashTable(super.getField(SequenceDefinition.obfuscatedClassName,"ah", []));
	}
	static getSequenceDefinition_archive(){
		return new AbstractArchive(super.getField(SequenceDefinition.obfuscatedClassName,"ak", []));
	}
	static getSequenceDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(SequenceDefinition.obfuscatedClassName,"ax", []));
	}
	getField7047(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"aa", []);
	}
	getField7049(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"af", []);
	}
	getField7050(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"aj", []);
	}
	getFrameLengths(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"al", []);
	}
	getField7052(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"am", ['int', 424877879]);
	}
	getField7053(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"an", ['int', 450018821]);
	}
	getField7054(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"ao", ['int', 33154337]);
	}
	getField7055(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"ap", ['int', 255400379]);
	}
	getField7056(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"aq", []);
	}
	getField7057(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"ar", ['int', 210430509]);
	}
	getField7058(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"as", []);
	}
	getField7059(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"aw", ['int', 1543745341]);
	}
	getField7060(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"ay", ['int', 1918089895]);
	}
	getFrameCount(){
		return  super.getField(SequenceDefinition.obfuscatedClassName,"ab", ['int', 784829319]);
	}

	static onMethod13167(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"aa", todo, []);
	}
	static onPostDecode(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onTransformObjectModel(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod13175(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"al", todo, []);
	}
	static onMethod13178(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"as", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod13182(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13168(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod13156(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod13160(todo){
		super.onMethodExecution(SequenceDefinition.obfuscatedClassName,"aw", todo, []);
	}
}
module.exports = SequenceDefinition;
