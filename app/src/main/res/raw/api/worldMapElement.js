const VerticalAlignment = require('./verticalAlignment.js');
const PcmStreamMixer = require('./pcmStreamMixer.js');
const DualNode = require('./dualNode.js');
const HorizontalAlignment = require('./horizontalAlignment.js');
const EvictingDualNodeHashTable = require('./evictingDualNodeHashTable.js');
const AbstractArchive = require('./abstractArchive.js');


class WorldMapElement extends DualNode {
	static obfuscatedClassName = "dg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapElement.obfuscatedClassName);
	}

	static getWorldMapElement_cached(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ae", []);
	}
	static getField6923(){
		return new PcmStreamMixer(super.getField(WorldMapElement.obfuscatedClassName,"pu", []));
	}
	static getField6920(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ai", ['int', 2110717203]);
	}
	static getWorldMapElement_archive(){
		return new AbstractArchive(super.getField(WorldMapElement.obfuscatedClassName,"ak", []));
	}
	static getWorldMapElement_cachedSprites(){
		return new EvictingDualNodeHashTable(super.getField(WorldMapElement.obfuscatedClassName,"ax", []));
	}
	getField6924(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"aa", ['int', 402629109]);
	}
	getField6926(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ac", ['int', 458334189]);
	}
	getField6928(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ag", []);
	}
	getObjectId(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ah", ['int', 42316931]);
	}
	getField6930(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"aj", ['int', 2082040485]);
	}
	getField6931(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"al", []);
	}
	getField6932(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"am", []);
	}
	getMenuActions(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"an", []);
	}
	getField6934(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ao", ['int', 2014984043]);
	}
	getField6935(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ap", ['int', 2134281339]);
	}
	getField6936(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"aq", []);
	}
	getField6937(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ar", ['int', 762910043]);
	}
	getField6938(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"as", ['int', 1851744457]);
	}
	getField6941(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"aw", []);
	}
	getField6942(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ay", []);
	}
	getField6943(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"az", ['int', 1121864573]);
	}
	getField6927(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ad", []);
	}
	getHorizontalAlignment(){
		return new HorizontalAlignment(super.getField(WorldMapElement.obfuscatedClassName,"at", []));
	}
	getVerticalAlignment(){
		return new VerticalAlignment(super.getField(WorldMapElement.obfuscatedClassName,"av", []));
	}
	getField6925(){
		return  super.getField(WorldMapElement.obfuscatedClassName,"ab", ['int', 54798065]);
	}

	static onMethod12945(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"ah", todo, []);
	}
	static onGetSprite(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"aj", todo, []);
	}
	static onReadBits(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"al", todo, []);
	}
	static onMethod12952(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"as", todo, []);
	}
	static onMethod12946(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod12957(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod12929(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"adq", todo, []);
	}
	static onMethod12934(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod12931(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod12941(todo){
		super.onMethodExecution(WorldMapElement.obfuscatedClassName,"ij", todo, []);
	}
}
module.exports = WorldMapElement;
