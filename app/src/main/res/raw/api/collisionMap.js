const Interceptor = require('./core/apicore.js');


class CollisionMap extends Interceptor {
	static obfuscatedClassName = "gg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, CollisionMap.obfuscatedClassName);
	}

	getXSize(){
		return  super.getField(CollisionMap.obfuscatedClassName,"bd", ['int', 135846553]);
	}
	getXInset(){
		return  super.getField(CollisionMap.obfuscatedClassName,"br", ['int', 1109428353]);
	}
	getYSize(){
		return  super.getField(CollisionMap.obfuscatedClassName,"bc", ['int', 1581327307]);
	}
	getField2687(){
		return  super.getField(CollisionMap.obfuscatedClassName,"bz", []);
	}
	getYInset(){
		return  super.getField(CollisionMap.obfuscatedClassName,"bk", ['int', 385796263]);
	}

	static onMethod4775(todo){
		super.onMethodExecution(CollisionMap.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4778(todo){
		super.onMethodExecution(CollisionMap.obfuscatedClassName,"ah", todo, []);
	}
	static onSetFlagOff(todo){
		super.onMethodExecution(CollisionMap.obfuscatedClassName,"as", todo, []);
	}
	static onMethod4779(todo){
		super.onMethodExecution(CollisionMap.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod4781(todo){
		super.onMethodExecution(CollisionMap.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4794(todo){
		super.onMethodExecution(CollisionMap.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = CollisionMap;
