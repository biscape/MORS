const class300 = require('./class300.js');
const IterableNodeHashTable = require('./iterableNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');


class ItemDefinition extends DualNode {
	static obfuscatedClassName = "dr";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ItemDefinition.obfuscatedClassName);
	}

	static getItemDefinition_modelArchive(){
		return new AbstractArchive(super.getField(ItemDefinition.obfuscatedClassName,"aa", []));
	}
	static getItemDefinition_cachedModels(){
		return new EvictingDualNodeHashTable(super.getField(ItemDefinition.obfuscatedClassName,"am", []));
	}
	static getItemDefinition_cachedSprites(){
		return new EvictingDualNodeHashTable(super.getField(ItemDefinition.obfuscatedClassName,"an", []));
	}
	static getItemDefinition_cached(){
		return new EvictingDualNodeHashTable(super.getField(ItemDefinition.obfuscatedClassName,"aq", []));
	}
	static getField6986(){
		return new class300(super.getField(ItemDefinition.obfuscatedClassName,"aw", []));
	}
	getXan2d(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ac", ['int', 1109018393]);
	}
	getZoom2d(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ag", ['int', 1186583239]);
	}
	getName(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ao", []);
	}
	getModel(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ap", ['int', 557007795]);
	}
	getId(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ar", ['int', 15246795]);
	}
	getYan2d(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"au", ['int', 1980361943]);
	}
	getRecolorFrom(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"az", []);
	}
	getField6997(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ba", ['int', 1502744225]);
	}
	getField6998(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bb", ['int', 2114362069]);
	}
	getShiftClickIndex(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bd", ['int', 131779987]);
	}
	getField7001(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"be", ['int', 541586797]);
	}
	getOffsetY2d(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bg", ['int', 199457717]);
	}
	getIsMembersOnly(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bh", []);
	}
	getPrice(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bj", ['int', 2139995139]);
	}
	getField7008(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bm", ['int', 1342305439]);
	}
	getField7009(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bn", []);
	}
	getNoteTemplate(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bo", ['int', 350688267]);
	}
	getZan2d(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bp", ['int', 864223951]);
	}
	getGroundActions(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bq", []);
	}
	getInventoryActions(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"br", []);
	}
	getField7015(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bt", ['int', 251523991]);
	}
	getField7019(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bx", ['int', 1341503825]);
	}
	getNote(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"by", ['int', 1181447229]);
	}
	getPlaceholderTemplate(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ca", ['int', 1837109497]);
	}
	getUnnotedId(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cf", ['int', 1787208053]);
	}
	getNotedId(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ck", ['int', 852454777]);
	}
	getField7029(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"co", ['int', 111096359]);
	}
	getIsTradable(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cv", []);
	}
	getField7033(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cw", ['int', 1647156561]);
	}
	getRetextureTo(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"ad", []);
	}
	getRecolorTo(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"at", []);
	}
	getRetextureFrom(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"av", []);
	}
	getField6999(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bc", ['int', 424991997]);
	}
	getOffsetX2d(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bi", ['int', 644369969]);
	}
	getField7007(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bl", ['int', 1450485729]);
	}
	getField7014(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bs", []);
	}
	getField7016(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bu", ['int', 214005555]);
	}
	getField7017(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bv", ['int', 904465871]);
	}
	getField7021(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bz", ['int', 616178523]);
	}
	getPlaceholder(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cb", ['int', 679915061]);
	}
	getTeam(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cd", ['int', 1767803813]);
	}
	getField7026(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cg", ['int', 857550713]);
	}
	getParams(){
		return new IterableNodeHashTable(super.getField(ItemDefinition.obfuscatedClassName,"ch", []));
	}
	getField7031(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cq", ['int', 56432215]);
	}
	getIsStackable(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bf", ['int', 1205730781]);
	}
	getField7018(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"bw", ['int', 275880715]);
	}
	getField7030(){
		return  super.getField(ItemDefinition.obfuscatedClassName,"cp", ['int', 880984527]);
	}

	static onMethod13080(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod13082(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"af", todo, []);
	}
	static onMethod13083(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod13085(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"aj", todo, []);
	}
	static onGenPlaceholder(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"al", todo, []);
	}
	static onMethod13087(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"an", todo, []);
	}
	static onMethod13090(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"ar", todo, []);
	}
	static onGenCert(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"as", todo, []);
	}
	static onMethod13092(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod13094(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"ay", todo, []);
	}
	static onPost(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"ai", todo, []);
	}
	static onDecodeNext(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13081(todo){
		super.onMethodExecution(ItemDefinition.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = ItemDefinition;
