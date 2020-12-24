const Interceptor = require('./core/apicore.js');


class WorldMapSprite extends Interceptor {
	static obfuscatedClassName = "cl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapSprite.obfuscatedClassName);
	}

	getTileColors(){
		return  super.getField(WorldMapSprite.obfuscatedClassName,"ae", []);
	}

	static onGetTileColor(todo){
		super.onMethodExecution(WorldMapSprite.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod1215(todo){
		super.onMethodExecution(WorldMapSprite.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = WorldMapSprite;
