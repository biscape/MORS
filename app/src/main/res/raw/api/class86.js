const Interceptor = require('./core/apicore.js');


class class86 extends Interceptor {
	static obfuscatedClassName = "gc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class86.obfuscatedClassName);
	}

	static getField2644(){
		return  super.getField(class86.obfuscatedClassName,"aa", []);
	}
	static getField2649(){
		return  super.getField(class86.obfuscatedClassName,"al", []);
	}
	static getField2646(){
		return  super.getField(class86.obfuscatedClassName,"ai", []);
	}
	static getField2651(){
		return  super.getField(class86.obfuscatedClassName,"ax", []);
	}

	static onMethod4752(todo){
		super.onMethodExecution(class86.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class86;
