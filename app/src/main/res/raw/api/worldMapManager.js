const class272 = require('./class272.js');
const class384 = require('./class384.js');
const IndexedSprite = require('./indexedSprite.js');
const AbstractArchive = require('./abstractArchive.js');
const WorldMapRegion = require('./worldMapRegion.js');
const Interceptor = require('./core/apicore.js');


class WorldMapManager extends Interceptor {
	static obfuscatedClassName = "cv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapManager.obfuscatedClassName);
	}

	static getField2293(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"fq", []);
	}
	getGeographyArchive(){
		return new AbstractArchive(super.getField(WorldMapManager.obfuscatedClassName,"aa", []));
	}
	getField2297(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"ae", []);
	}
	getFonts(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"af", []);
	}
	getIcons(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"ah", []);
	}
	getScaleHandlers(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"aj", []);
	}
	getMapSceneSprites(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"al", []);
	}
	getField2304(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"am", ['int', 1883703569]);
	}
	getField2305(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"an", ['int', 1751307584]);
	}
	getField2306(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"aq", ['int', 1325286393]);
	}
	getField2307(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"as", []);
	}
	getField2308(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"aw", ['int', 1907820091]);
	}
	getField2310(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"ay", ['int', 1440113311]);
	}
	getField2300(){
		return new class272(super.getField(WorldMapManager.obfuscatedClassName,"ai", []));
	}
	getLoaded(){
		return  super.getField(WorldMapManager.obfuscatedClassName,"ak", []);
	}
	getField2309(){
		return new class384(super.getField(WorldMapManager.obfuscatedClassName,"ax", []));
	}
	getGroundArchive(){
		return new AbstractArchive(super.getField(WorldMapManager.obfuscatedClassName,"ab", []));
	}

	static onClearIcons(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"ae", todo, []);
	}
	static onGetPixelsPerTile(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"af", todo, []);
	}
	static onMethod3652(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod3654(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"aj", todo, []);
	}
	static onIsLoaded(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"al", todo, []);
	}
	static onMethod3653(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod3655(todo){
		super.onMethodExecution(WorldMapManager.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = WorldMapManager;
