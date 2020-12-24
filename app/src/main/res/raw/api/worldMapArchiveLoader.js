const Interceptor = require('./core/apicore.js');
const AbstractArchive = require('./abstractArchive.js');


class WorldMapArchiveLoader extends Interceptor {
	static obfuscatedClassName = "pj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapArchiveLoader.obfuscatedClassName);
	}

	getCacheName(){
		return  super.getField(WorldMapArchiveLoader.obfuscatedClassName,"ah", []);
	}
	getPercentLoaded(){
		return  super.getField(WorldMapArchiveLoader.obfuscatedClassName,"aj", []);
	}
	getLoaded(){
		return  super.getField(WorldMapArchiveLoader.obfuscatedClassName,"al", []);
	}
	getArchive(){
		return new AbstractArchive(super.getField(WorldMapArchiveLoader.obfuscatedClassName,"as", []));
	}

	static onMethod7361(todo){
		super.onMethodExecution(WorldMapArchiveLoader.obfuscatedClassName,"ae", todo, []);
	}
	static onIsLoaded(todo){
		super.onMethodExecution(WorldMapArchiveLoader.obfuscatedClassName,"ai", todo, []);
	}
	static onReset(todo){
		super.onMethodExecution(WorldMapArchiveLoader.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod7369(todo){
		super.onMethodExecution(WorldMapArchiveLoader.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = WorldMapArchiveLoader;
