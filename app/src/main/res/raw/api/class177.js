const Bounds = require('./bounds.js');
const GameBuild = require('./gameBuild.js');
const Interceptor = require('./core/apicore.js');


class class177 extends Interceptor {
	static obfuscatedClassName = "lu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class177.obfuscatedClassName);
	}

	static getField3803(){
		return  super.getField(class177.obfuscatedClassName,"ae", []);
	}
	static getField3804(){
		return new GameBuild(super.getField(class177.obfuscatedClassName,"ah", []));
	}
	static getField3809(){
		return new Bounds(super.getField(class177.obfuscatedClassName,"fg", []));
	}
	static getField3805(){
		return  super.getField(class177.obfuscatedClassName,"ai", []);
	}
	static getField3806(){
		return  super.getField(class177.obfuscatedClassName,"ak", []);
	}
	static getField3807(){
		return  super.getField(class177.obfuscatedClassName,"ax", []);
	}

	static onMethod6542(todo){
		super.onMethodExecution(class177.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class177;
