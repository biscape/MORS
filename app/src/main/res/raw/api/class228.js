const Bounds = require('./bounds.js');
const Interceptor = require('./core/apicore.js');


class class228 extends Interceptor {
	static obfuscatedClassName = "ok";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class228.obfuscatedClassName);
	}

	getField4046(){
		return new Bounds(super.getField(class228.obfuscatedClassName,"ae", []));
	}
	getField4047(){
		return  super.getField(class228.obfuscatedClassName,"ah", ['int', 1321172117]);
	}
	getField4048(){
		return  super.getField(class228.obfuscatedClassName,"ai", []);
	}
	getSpriteMap(){
		return  super.getField(class228.obfuscatedClassName,"ak", []);
	}
	getField4050(){
		return  super.getField(class228.obfuscatedClassName,"ax", []);
	}

	static onMethod7009(todo){
		super.onMethodExecution(class228.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod7014(todo){
		super.onMethodExecution(class228.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod7021(todo){
		super.onMethodExecution(class228.obfuscatedClassName,"as", todo, []);
	}
	static onMethod7013(todo){
		super.onMethodExecution(class228.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class228;
