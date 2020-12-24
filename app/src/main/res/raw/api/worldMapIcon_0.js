const class42 = require('./class42.js');
const AbstractWorldMapIcon = require('./abstractWorldMapIcon.js');


class WorldMapIcon_0 extends AbstractWorldMapIcon {
	static obfuscatedClassName = "df";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapIcon_0.obfuscatedClassName);
	}

	getElement(){
		return  super.getField(WorldMapIcon_0.obfuscatedClassName,"ah", ['int', 476799979]);
	}
	getField5907(){
		return  super.getField(WorldMapIcon_0.obfuscatedClassName,"aj", ['int', 1020553255]);
	}
	getField5908(){
		return  super.getField(WorldMapIcon_0.obfuscatedClassName,"al", ['int', 413709111]);
	}
	getLabel(){
		return new class42(super.getField(WorldMapIcon_0.obfuscatedClassName,"as", []));
	}

	static onVmethod10428(todo){
		super.onMethodExecution(WorldMapIcon_0.obfuscatedClassName,"ae", todo, []);
	}
	static onGetLabel(todo){
		super.onMethodExecution(WorldMapIcon_0.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod10404(todo){
		super.onMethodExecution(WorldMapIcon_0.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod10405(todo){
		super.onMethodExecution(WorldMapIcon_0.obfuscatedClassName,"af", todo, []);
	}
	static onMethod10406(todo){
		super.onMethodExecution(WorldMapIcon_0.obfuscatedClassName,"ah", todo, []);
	}
}
module.exports = WorldMapIcon_0;
