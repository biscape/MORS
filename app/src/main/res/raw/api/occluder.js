const Interceptor = require('./core/apicore.js');


class Occluder extends Interceptor {
	static obfuscatedClassName = "ag";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Occluder.obfuscatedClassName);
	}

	static getField27(){
		return  super.getField(Occluder.obfuscatedClassName,"ti", ['long', 4724047297240788021]);
	}
	getMaxZ(){
		return  super.getField(Occluder.obfuscatedClassName,"aa", ['int', 1719716603]);
	}
	getMaxTileX(){
		return  super.getField(Occluder.obfuscatedClassName,"ae", ['int', 1137795839]);
	}
	getMaxY(){
		return  super.getField(Occluder.obfuscatedClassName,"af", ['int', 2116466089]);
	}
	getType(){
		return  super.getField(Occluder.obfuscatedClassName,"ah", ['int', 137423495]);
	}
	getMaxX(){
		return  super.getField(Occluder.obfuscatedClassName,"aj", ['int', 1060332447]);
	}
	getMinZ(){
		return  super.getField(Occluder.obfuscatedClassName,"al", ['int', 900329691]);
	}
	getField37(){
		return  super.getField(Occluder.obfuscatedClassName,"am", ['int', 1261619785]);
	}
	getField38(){
		return  super.getField(Occluder.obfuscatedClassName,"an", ['int', 2000965869]);
	}
	getField39(){
		return  super.getField(Occluder.obfuscatedClassName,"ap", ['int', 1111904981]);
	}
	getField40(){
		return  super.getField(Occluder.obfuscatedClassName,"aq", ['int', 1119035913]);
	}
	getField41(){
		return  super.getField(Occluder.obfuscatedClassName,"ar", ['int', 1310542677]);
	}
	getMinX(){
		return  super.getField(Occluder.obfuscatedClassName,"as", ['int', 2020630231]);
	}
	getField43(){
		return  super.getField(Occluder.obfuscatedClassName,"aw", ['int', 1903719131]);
	}
	getField45(){
		return  super.getField(Occluder.obfuscatedClassName,"ay", ['int', 2125444847]);
	}
	getMinTileY(){
		return  super.getField(Occluder.obfuscatedClassName,"ai", ['int', 1082451447]);
	}
	getMinTileX(){
		return  super.getField(Occluder.obfuscatedClassName,"ak", ['int', 203382531]);
	}
	getMaxTileY(){
		return  super.getField(Occluder.obfuscatedClassName,"ax", ['int', 454790609]);
	}
	getMinY(){
		return  super.getField(Occluder.obfuscatedClassName,"ab", ['int', 412052565]);
	}

}
module.exports = Occluder;
