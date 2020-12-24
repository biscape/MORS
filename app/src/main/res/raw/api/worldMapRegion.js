const class300 = require('./class300.js');
const class270 = require('./class270.js');
const class384 = require('./class384.js');
const DemotingHashTable = require('./demotingHashTable.js');
const Interceptor = require('./core/apicore.js');
const class72 = require('./class72.js');


class WorldMapRegion extends Interceptor {
	static obfuscatedClassName = "ck";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapRegion.obfuscatedClassName);
	}

	static getWorldMapRegion_cachedSprites(){
		return new DemotingHashTable(super.getField(WorldMapRegion.obfuscatedClassName,"aj", []));
	}
	static getField594(){
		return new class384(super.getField(WorldMapRegion.obfuscatedClassName,"gg", []));
	}
	static getField587(){
		return new class300(super.getField(WorldMapRegion.obfuscatedClassName,"ai", []));
	}
	static getField591(){
		return new class72(super.getField(WorldMapRegion.obfuscatedClassName,"ax", []));
	}
	getRegionY(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"aa", ['int', 1971914201]);
	}
	getWorldMapData1List(){
		return new LinkedList(super.getField(WorldMapRegion.obfuscatedClassName,"af", []));
	}
	getRegionX(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"al", ['int', 1968875609]);
	}
	getPixelsPerTile(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"am", ['int', 934391045]);
	}
	getIcon0List(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"an", []);
	}
	getBackgroundColor(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"aq", ['int', 2126272259]);
	}
	getFonts(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"aw", []);
	}
	getIconMap(){
		return  super.getField(WorldMapRegion.obfuscatedClassName,"ay", []);
	}
	getWorldMapData_0(){
		return new class270(super.getField(WorldMapRegion.obfuscatedClassName,"ab", []));
	}

	static onMethod1109(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"aa", todo, []);
	}
	static onDrawNonLinkMapIcons(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ac", todo, []);
	}
	static onInitWorldMapIcon1s(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"af", todo, []);
	}
	static onMethod1114(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ag", todo, []);
	}
	static onInitWorldMapData0(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"aj", todo, []);
	}
	static onInitWorldMapData1(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"al", todo, []);
	}
	static onMethod1117(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"am", todo, []);
	}
	static onLoadGeography(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"an", todo, []);
	}
	static onMethod1119(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod1120(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ap", todo, []);
	}
	static onAddAllToIconList(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod1122(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod1123(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"as", todo, []);
	}
	static onMethod1125(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"au", todo, []);
	}
	static onMethod1127(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"aw", todo, []);
	}
	static onDrawTile(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod1129(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"az", todo, []);
	}
	static onMethod1131(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bd", todo, []);
	}
	static onMethod1132(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"be", todo, []);
	}
	static onMethod1134(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bg", todo, []);
	}
	static onMethod1135(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bh", todo, []);
	}
	static onMethod1137(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bj", todo, []);
	}
	static onMethod1140(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bp", todo, []);
	}
	static onMethod1141(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bq", todo, []);
	}
	static onMethod1142(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"br", todo, []);
	}
	static onIcons(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bt", todo, []);
	}
	static onMethod1112(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ad", todo, []);
	}
	static onMethod1124(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"at", todo, []);
	}
	static onMethod1126(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"av", todo, []);
	}
	static onMethod1130(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bc", todo, []);
	}
	static onMethod1136(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bi", todo, []);
	}
	static onGetIcon(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod1133(todo){
		super.onMethodExecution(WorldMapRegion.obfuscatedClassName,"bf", todo, []);
	}
}
module.exports = WorldMapRegion;
