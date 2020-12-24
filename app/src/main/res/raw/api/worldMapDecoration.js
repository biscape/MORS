const class384 = require('./class384.js');
const Interceptor = require('./core/apicore.js');


class WorldMapDecoration extends Interceptor {
	static obfuscatedClassName = "dq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapDecoration.obfuscatedClassName);
	}

	static getField2388(){
		return  super.getField(WorldMapDecoration.obfuscatedClassName,"gt", []);
	}
	static getField2387(){
		return  super.getField(WorldMapDecoration.obfuscatedClassName,"gq", []);
	}
	getDecoration(){
		return  super.getField(WorldMapDecoration.obfuscatedClassName,"ae", ['int', 1260316165]);
	}
	getRotation(){
		return  super.getField(WorldMapDecoration.obfuscatedClassName,"ai", ['int', 510364417]);
	}
	getObjectDefinitionId(){
		return  super.getField(WorldMapDecoration.obfuscatedClassName,"ak", ['int', 1845723937]);
	}

	static onMethod3756(todo){
		super.onMethodExecution(WorldMapDecoration.obfuscatedClassName,"bi", todo, []);
	}
}
module.exports = WorldMapDecoration;
