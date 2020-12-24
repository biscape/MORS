const WorldMapArea = require('./worldMapArea.js');
const WorldMapArchiveLoader = require('./worldMapArchiveLoader.js');
const Coord = require('./coord.js');
const class399 = require('./class399.js');
const class384 = require('./class384.js');
const FontName = require('./fontName.js');
const WorldMapManager = require('./worldMapManager.js');
const IndexedSprite = require('./indexedSprite.js');
const AbstractArchive = require('./abstractArchive.js');
const Interceptor = require('./core/apicore.js');


class WorldMap extends Interceptor {
	static obfuscatedClassName = "pe";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMap.obfuscatedClassName);
	}

	static getField4211(){
		return new FontName(super.getField(WorldMap.obfuscatedClassName,"af", []));
	}
	static getField4215(){
		return new FontName(super.getField(WorldMap.obfuscatedClassName,"aq", []));
	}
	static getField4209(){
		return new FontName(super.getField(WorldMap.obfuscatedClassName,"ab", []));
	}
	getWorldMap_groundArchive(){
		return new AbstractArchive(super.getField(WorldMap.obfuscatedClassName,"aa", []));
	}
	getField4218(){
		return  super.getField(WorldMap.obfuscatedClassName,"ac", ['int', 1609905475]);
	}
	getField4220(){
		return  super.getField(WorldMap.obfuscatedClassName,"ag", ['int', 1065333323]);
	}
	getField4221(){
		return new AbstractArchive(super.getField(WorldMap.obfuscatedClassName,"aj", []));
	}
	getWorldMap_geographyArchive(){
		return new AbstractArchive(super.getField(WorldMap.obfuscatedClassName,"al", []));
	}
	getField4223(){
		return new class399(super.getField(WorldMap.obfuscatedClassName,"am", []));
	}
	getFonts(){
		return  super.getField(WorldMap.obfuscatedClassName,"an", []);
	}
	getField4225(){
		return new WorldMapArea(super.getField(WorldMap.obfuscatedClassName,"ao", []));
	}
	getCurrentMapArea(){
		return new WorldMapArea(super.getField(WorldMap.obfuscatedClassName,"ap", []));
	}
	getField4227(){
		return new WorldMapArea(super.getField(WorldMap.obfuscatedClassName,"ar", []));
	}
	getField4229(){
		return  super.getField(WorldMap.obfuscatedClassName,"au", []);
	}
	getField4231(){
		return  super.getField(WorldMap.obfuscatedClassName,"aw", []);
	}
	getMapSceneSprites(){
		return  super.getField(WorldMap.obfuscatedClassName,"ay", []);
	}
	getWorldMapManager(){
		return new WorldMapManager(super.getField(WorldMap.obfuscatedClassName,"az", []));
	}
	getField4236(){
		return  super.getField(WorldMap.obfuscatedClassName,"bd", ['int', 972241595]);
	}
	getField4239(){
		return  super.getField(WorldMap.obfuscatedClassName,"bg", ['int', 1336802847]);
	}
	getField4240(){
		return  super.getField(WorldMap.obfuscatedClassName,"bh", ['int', 1145697999]);
	}
	getField4242(){
		return  super.getField(WorldMap.obfuscatedClassName,"bj", ['int', 620020399]);
	}
	getField4246(){
		return  super.getField(WorldMap.obfuscatedClassName,"bn", []);
	}
	getField4247(){
		return  super.getField(WorldMap.obfuscatedClassName,"bp", []);
	}
	getField4248(){
		return  super.getField(WorldMap.obfuscatedClassName,"bq", ['int', 2144432869]);
	}
	getField4249(){
		return  super.getField(WorldMap.obfuscatedClassName,"br", []);
	}
	getMaxFlashCount(){
		return  super.getField(WorldMap.obfuscatedClassName,"bt", ['int', 714754801]);
	}
	getField4255(){
		return  super.getField(WorldMap.obfuscatedClassName,"by", ['int', 237755045]);
	}
	getField4259(){
		return  super.getField(WorldMap.obfuscatedClassName,"cf", ['int', 1208189811]);
	}
	getField4262(){
		return  super.getField(WorldMap.obfuscatedClassName,"ck", ['int', 1807814921]);
	}
	getField4263(){
		return  super.getField(WorldMap.obfuscatedClassName,"co", []);
	}
	getField4266(){
		return  super.getField(WorldMap.obfuscatedClassName,"cv", ['int', 1559372495]);
	}
	getMenuOpcodes(){
		return  super.getField(WorldMap.obfuscatedClassName,"cw", []);
	}
	getCenterTileY(){
		return  super.getField(WorldMap.obfuscatedClassName,"ad", ['int', 553601457]);
	}
	getCacheLoader(){
		return new WorldMapArchiveLoader(super.getField(WorldMap.obfuscatedClassName,"at", []));
	}
	getCenterTileX(){
		return  super.getField(WorldMap.obfuscatedClassName,"av", ['int', 1035356277]);
	}
	getField4235(){
		return  super.getField(WorldMap.obfuscatedClassName,"bc", ['int', 203730053]);
	}
	getField4241(){
		return  super.getField(WorldMap.obfuscatedClassName,"bi", ['int', 1413641351]);
	}
	getEnabledCategories(){
		return  super.getField(WorldMap.obfuscatedClassName,"bl", []);
	}
	getField4250(){
		return  super.getField(WorldMap.obfuscatedClassName,"bs", []);
	}
	getEnabledElementIds(){
		return  super.getField(WorldMap.obfuscatedClassName,"bu", []);
	}
	getField4253(){
		return  super.getField(WorldMap.obfuscatedClassName,"bv", []);
	}
	getField4256(){
		return  super.getField(WorldMap.obfuscatedClassName,"bz", ['int', 2038413117]);
	}
	getField4257(){
		return  super.getField(WorldMap.obfuscatedClassName,"cb", []);
	}
	getField4258(){
		return  super.getField(WorldMap.obfuscatedClassName,"cd", []);
	}
	getField4260(){
		return new Iterator(super.getField(WorldMap.obfuscatedClassName,"cg", []));
	}
	getField4261(){
		return new class384(super.getField(WorldMap.obfuscatedClassName,"ch", []));
	}
	getField4265(){
		return new Coord(super.getField(WorldMap.obfuscatedClassName,"cq", []));
	}
	getField4238(){
		return  super.getField(WorldMap.obfuscatedClassName,"bf", ['int', 644748891]);
	}
	getEnabledElements(){
		return  super.getField(WorldMap.obfuscatedClassName,"bw", []);
	}
	getField4243(){
		return  super.getField(WorldMap.obfuscatedClassName,"bk", []);
	}
	getField4264(){
		return  super.getField(WorldMap.obfuscatedClassName,"cp", []);
	}

	static onStopCurrentFlashes(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod7167(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"ac", todo, []);
	}
	static onSetWorldMapPosition(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"al", todo, []);
	}
	static onJump(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"ao", todo, []);
	}
	static onInitializeWorldMapManager(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"ar", todo, []);
	}
	static onGetZoomFromPercentage(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"au", todo, []);
	}
	static onSetCurrentMapArea(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod7190(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"az", todo, []);
	}
	static onMethod7194(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"bd", todo, []);
	}
	static onGetIconsForTiles(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"ad", todo, []);
	}
	static onMethod7175(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod7184(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"at", todo, []);
	}
	static onMethod7186(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"av", todo, []);
	}
	static onMethod7201(todo){
		super.onMethodExecution(WorldMap.obfuscatedClassName,"bk", todo, []);
	}
}
module.exports = WorldMap;
