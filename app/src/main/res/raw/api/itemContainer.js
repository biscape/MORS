const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const DualNode = require('./dualNode.js');
const AbstractArchive = require('./abstractArchive.js');


class ItemContainer extends DualNode {
	static obfuscatedClassName = "dc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ItemContainer.obfuscatedClassName);
	}

	static getItemContainers(){
		return new EvictingDualNodeHashTable(super.getField(ItemContainer.obfuscatedClassName,"ae", []));
	}
	static getField6849(){
		return  super.getField(ItemContainer.obfuscatedClassName,"aj", []);
	}
	static getField6853(){
		return  super.getField(ItemContainer.obfuscatedClassName,"gy", []);
	}
	static getFloorOverlayDefinition_archive(){
		return new AbstractArchive(super.getField(ItemContainer.obfuscatedClassName,"ak", []));
	}
	getField6854(){
		return  super.getField(ItemContainer.obfuscatedClassName,"ah", ['int', 601881027]);
	}
	getField6855(){
		return  super.getField(ItemContainer.obfuscatedClassName,"ai", ['int', 31189551]);
	}
	getField6856(){
		return  super.getField(ItemContainer.obfuscatedClassName,"ax", ['int', 1704917219]);
	}

	static onMethod12848(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod12853(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"ax", todo, []);
	}
	static onGetNpcDefinition(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod12842(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"ap", todo, []);
	}
	static onMethod12844(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"bg", todo, []);
	}
	static onMethod12839(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod12845(todo){
		super.onMethodExecution(ItemContainer.obfuscatedClassName,"cd", todo, []);
	}
}
module.exports = ItemContainer;
