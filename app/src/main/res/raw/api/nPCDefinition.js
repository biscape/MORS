const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const IterableNodeHashTable = require('./iterableNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class NPCDefinition extends DualNode {
	static obfuscatedClassName = "ev";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, NPCDefinition.obfuscatedClassName);
	}

	static getField7157(){
		return new AbstractArchive(super.getField(NPCDefinition.obfuscatedClassName,"ae", []));
	}
	static getNpcDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(NPCDefinition.obfuscatedClassName,"ai", []));
	}
	static getNpcDefinition_archive(){
		return new AbstractArchive(super.getField(NPCDefinition.obfuscatedClassName,"ak", []));
	}
	static getField7160(){
		return new EvictingDualNodeHashTable(super.getField(NPCDefinition.obfuscatedClassName,"ax", []));
	}
	getField7161(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"aa", []);
	}
	getField7163(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ac", ['int', 186453409]);
	}
	getField7165(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"af", ['int', 1421143599]);
	}
	getField7166(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ag", ['int', 2118073827]);
	}
	getId(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ah", ['int', 542931001]);
	}
	getField7168(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"aj", ['int', 1903353517]);
	}
	getField7169(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"al", []);
	}
	getField7170(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"am", ['int', 13434001]);
	}
	getField7171(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"an", ['int', 2050696585]);
	}
	getField7172(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ao", []);
	}
	getField7173(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ap", []);
	}
	getField7174(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"aq", ['int', 1452086197]);
	}
	getField7175(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ar", []);
	}
	getField7176(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"as", []);
	}
	getField7178(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"au", []);
	}
	getField7180(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"aw", ['int', 1719703429]);
	}
	getField7181(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ay", ['int', 64899189]);
	}
	getField7182(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"az", []);
	}
	getField7184(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bd", []);
	}
	getField7186(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bg", ['int', 537900383]);
	}
	getField7187(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bh", ['int', 1913634435]);
	}
	getField7189(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bj", []);
	}
	getField7191(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bp", ['int', 1879491279]);
	}
	getField7192(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bq", ['int', 1030095631]);
	}
	getField7193(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"br", []);
	}
	getField7164(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ad", ['int', 577225751]);
	}
	getField7177(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"at", []);
	}
	getField7179(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"av", []);
	}
	getField7183(){
		return new IterableNodeHashTable(super.getField(NPCDefinition.obfuscatedClassName,"bc", []));
	}
	getField7188(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bi", ['int', 105158653]);
	}
	getField7162(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"ab", ['int', 635424149]);
	}
	getField7185(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bf", ['int', 863132285]);
	}
	getField7190(){
		return  super.getField(NPCDefinition.obfuscatedClassName,"bk", []);
	}

	static onMethod13355(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod13361(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod13363(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod13364(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"al", todo, []);
	}
	static onMethod13365(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"as", todo, []);
	}
	static onPostDecode(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(NPCDefinition.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = NPCDefinition;
