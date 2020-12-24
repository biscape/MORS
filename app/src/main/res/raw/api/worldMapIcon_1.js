const WorldMapRegion = require('./worldMapRegion.js');
const class42 = require('./class42.js');
const AbstractWorldMapIcon = require('./abstractWorldMapIcon.js');


class WorldMapIcon_1 extends AbstractWorldMapIcon {
	static obfuscatedClassName = "di";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapIcon_1.obfuscatedClassName);
	}

	static getField5913(){
		return  super.getField(WorldMapIcon_1.obfuscatedClassName,"jw", []);
	}
	getField5915(){
		return  super.getField(WorldMapIcon_1.obfuscatedClassName,"aa", ['int', 833495435]);
	}
	getObjectDefId(){
		return  super.getField(WorldMapIcon_1.obfuscatedClassName,"ah", ['int', 468975415]);
	}
	getField5918(){
		return  super.getField(WorldMapIcon_1.obfuscatedClassName,"aj", ['int', 582567331]);
	}
	getLabel(){
		return new class42(super.getField(WorldMapIcon_1.obfuscatedClassName,"al", []));
	}
	getRegion(){
		return new WorldMapRegion(super.getField(WorldMapIcon_1.obfuscatedClassName,"as", []));
	}
	getField5916(){
		return  super.getField(WorldMapIcon_1.obfuscatedClassName,"ab", ['int', 673227373]);
	}

	static onVmethod10428(todo){
		super.onMethodExecution(WorldMapIcon_1.obfuscatedClassName,"ae", todo, []);
	}
	static onInit(todo){
		super.onMethodExecution(WorldMapIcon_1.obfuscatedClassName,"bp", todo, []);
	}
	static onGetLabel(todo){
		super.onMethodExecution(WorldMapIcon_1.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod10423(todo){
		super.onMethodExecution(WorldMapIcon_1.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod10425(todo){
		super.onMethodExecution(WorldMapIcon_1.obfuscatedClassName,"av", todo, []);
	}
	static onLoadInterface(todo){
		super.onMethodExecution(WorldMapIcon_1.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = WorldMapIcon_1;
