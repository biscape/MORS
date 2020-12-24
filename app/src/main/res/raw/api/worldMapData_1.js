const class294 = require('./class294.js');
const AbstractWorldMapData = require('./abstractWorldMapData.js');


class WorldMapData_1 extends AbstractWorldMapData {
	static obfuscatedClassName = "cc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapData_1.obfuscatedClassName);
	}

	static getClanChat(){
		return new class294(super.getField(WorldMapData_1.obfuscatedClassName,"oz", []));
	}
	getField4706(){
		return  super.getField(WorldMapData_1.obfuscatedClassName,"ao", ['int', 1707648561]);
	}
	getChunkX(){
		return  super.getField(WorldMapData_1.obfuscatedClassName,"ap", ['int', 1293251487]);
	}
	getField4708(){
		return  super.getField(WorldMapData_1.obfuscatedClassName,"ar", ['int', 477333327]);
	}
	getField4709(){
		return  super.getField(WorldMapData_1.obfuscatedClassName,"aw", ['int', 1509262741]);
	}

	static onVmethod7752(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod7761(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"bh", todo, []);
	}
	static onMethod7762(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"bj", todo, []);
	}
	static onMethod7766(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"bq", todo, []);
	}
	static onMethod7754(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod7760(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"bf", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"", todo, []);
	}
	static onHashCode(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"", todo, []);
	}
	static onMethod7750(todo){
		super.onMethodExecution(WorldMapData_1.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = WorldMapData_1;
