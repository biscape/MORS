const Interceptor = require('./core/apicore.js');


class WorldMapSection extends Interceptor {
	static obfuscatedClassName = "";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WorldMapSection.obfuscatedClassName);
	}


}
module.exports = WorldMapSection;
