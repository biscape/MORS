const Interceptor = require('./core/apicore.js');
const Entity = require('./entity.js');


class WallDecoration extends Interceptor {
	static obfuscatedClassName = "bq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, WallDecoration.obfuscatedClassName);
	}

	getEntity2(){
		return new Entity(super.getField(WallDecoration.obfuscatedClassName,"aa", []));
	}
	getX(){
		return  super.getField(WallDecoration.obfuscatedClassName,"ae", ['int', 497359245]);
	}
	getFlags(){
		return  super.getField(WallDecoration.obfuscatedClassName,"af", ['int', 1821386541]);
	}
	getOrientation2(){
		return  super.getField(WallDecoration.obfuscatedClassName,"ah", ['int', 1740908269]);
	}
	getYOffset(){
		return  super.getField(WallDecoration.obfuscatedClassName,"aj", ['int', 189810981]);
	}
	getField514(){
		return new Entity(super.getField(WallDecoration.obfuscatedClassName,"al", []));
	}
	getXOffset(){
		return  super.getField(WallDecoration.obfuscatedClassName,"as", ['int', 1704321235]);
	}
	getField511(){
		return  super.getField(WallDecoration.obfuscatedClassName,"ai", ['int', 1574153319]);
	}
	getTileHeight(){
		return  super.getField(WallDecoration.obfuscatedClassName,"ak", ['int', 1589230023]);
	}
	getOrientation(){
		return  super.getField(WallDecoration.obfuscatedClassName,"ax", ['int', 1433280261]);
	}
	getTag(){
		return  super.getField(WallDecoration.obfuscatedClassName,"ab", ['long', 6922816021321330605]);
	}

	static onMethod864(todo){
		super.onMethodExecution(WallDecoration.obfuscatedClassName,"bv", todo, []);
	}
	static onMethod863(todo){
		super.onMethodExecution(WallDecoration.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = WallDecoration;
