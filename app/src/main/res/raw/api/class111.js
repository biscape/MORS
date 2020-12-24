const Interceptor = require('./core/apicore.js');


class class111 extends Interceptor {
	static obfuscatedClassName = "hp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class111.obfuscatedClassName);
	}

	getField3283(){
		return  super.getField(class111.obfuscatedClassName,"ah", ['int', 886953337]);
	}
	getField3284(){
		return  super.getField(class111.obfuscatedClassName,"as", []);
	}
	getField3285(){
		return  super.getField(class111.obfuscatedClassName,"ax", ['int', 698309211]);
	}

	static onMethod5133(todo){
		super.onMethodExecution(class111.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod5135(todo){
		super.onMethodExecution(class111.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod5137(todo){
		super.onMethodExecution(class111.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class111;
