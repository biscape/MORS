const Interceptor = require('./core/apicore.js');


class class63 extends Interceptor {
	static obfuscatedClassName = "ex";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class63.obfuscatedClassName);
	}

	getField2456(){
		return  super.getField(class63.obfuscatedClassName,"ah", ['int', 626405707]);
	}
	getField2457(){
		return  super.getField(class63.obfuscatedClassName,"ai", []);
	}
	getField2458(){
		return  super.getField(class63.obfuscatedClassName,"ax", ['int', 1888365701]);
	}

	static onMethod4013(todo){
		super.onMethodExecution(class63.obfuscatedClassName,"ae", todo, []);
	}
	static onColorStartTag(todo){
		super.onMethodExecution(class63.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4017(todo){
		super.onMethodExecution(class63.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod4018(todo){
		super.onMethodExecution(class63.obfuscatedClassName,"be", todo, []);
	}
}
module.exports = class63;
