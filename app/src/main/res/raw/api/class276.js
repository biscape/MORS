const Interceptor = require('./core/apicore.js');


class class276 extends Interceptor {
	static obfuscatedClassName = "cq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class276.obfuscatedClassName);
	}

	static getField5859(){
		return new class276(super.getField(class276.obfuscatedClassName,"ae", []));
	}
	static getField5860(){
		return new class276(super.getField(class276.obfuscatedClassName,"ai", []));
	}
	static getField5861(){
		return new class276(super.getField(class276.obfuscatedClassName,"ak", []));
	}
	getField5866(){
		return  super.getField(class276.obfuscatedClassName,"ah", ['int', 263389795]);
	}
	getField5867(){
		return  super.getField(class276.obfuscatedClassName,"ax", ['int', 1864205387]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(class276.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class276;
