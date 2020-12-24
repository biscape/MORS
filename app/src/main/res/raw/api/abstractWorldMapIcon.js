const Coord = require('./coord.js');
const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class AbstractWorldMapIcon extends Interceptor {
	static obfuscatedClassName = "cr";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AbstractWorldMapIcon.obfuscatedClassName);
	}

	static getField2275(){
		return new Archive(super.getField(AbstractWorldMapIcon.obfuscatedClassName,"dv", []));
	}
	static getField2276(){
		return  super.getField(AbstractWorldMapIcon.obfuscatedClassName,"mj", ['int', 531911535]);
	}
	getCoord1(){
		return new Coord(super.getField(AbstractWorldMapIcon.obfuscatedClassName,"ae", []));
	}
	getField2278(){
		return  super.getField(AbstractWorldMapIcon.obfuscatedClassName,"ai", ['int', 566854517]);
	}
	getCoord2(){
		return new Coord(super.getField(AbstractWorldMapIcon.obfuscatedClassName,"ak", []));
	}
	getField2280(){
		return  super.getField(AbstractWorldMapIcon.obfuscatedClassName,"ax", ['int', 175447283]);
	}

	static onVmethod10428(todo){
		super.onMethodExecution(AbstractWorldMapIcon.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod3626(todo){
		super.onMethodExecution(AbstractWorldMapIcon.obfuscatedClassName,"as", todo, []);
	}
	static onGetLabel(todo){
		super.onMethodExecution(AbstractWorldMapIcon.obfuscatedClassName,"ai", todo, []);
	}
	static onGetObjectDefinition(todo){
		super.onMethodExecution(AbstractWorldMapIcon.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod3606(todo){
		super.onMethodExecution(AbstractWorldMapIcon.obfuscatedClassName,"ao", todo, []);
	}
}
module.exports = AbstractWorldMapIcon;
