const IndexedSprite = require('./indexedSprite.js');
const Player = require('./player.js');
const Interceptor = require('./core/apicore.js');


class WorldMapScaleHandler extends Interceptor {
	static obfuscatedClassName = "ce";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapScaleHandler.obfuscatedClassName);
	}

	static getField565(){
		return new IndexedSprite(super.getField(WorldMapScaleHandler.obfuscatedClassName,"ag", []));
	}
	static getField567(){
		return  super.getField(WorldMapScaleHandler.obfuscatedClassName,"aw", []);
	}
	static getLocalPlayer(){
		return new Player(super.getField(WorldMapScaleHandler.obfuscatedClassName,"jl", []));
	}
	getTileTemplates(){
		return  super.getField(WorldMapScaleHandler.obfuscatedClassName,"ae", []);
	}
	getPixelsPerTile(){
		return  super.getField(WorldMapScaleHandler.obfuscatedClassName,"ak", ['int', 1007916317]);
	}

	static onArrayRemove(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod1028(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod1029(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"af", todo, []);
	}
	static onMethod1031(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod1033(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod1035(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"al", todo, []);
	}
	static onMethod1040(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod1042(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"as", todo, []);
	}
	static onMethod1032(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod1034(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ak", todo, []);
	}
	static onInit6(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod1025(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod1021(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod1023(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ao", todo, []);
	}
	static onMethod1022(todo){
		super.onMethodExecution(WorldMapScaleHandler.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = WorldMapScaleHandler;
