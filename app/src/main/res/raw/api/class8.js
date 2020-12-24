const class113 = require('./class113.js');
const Interceptor = require('./core/apicore.js');


class class8 extends Interceptor {
	static obfuscatedClassName = "am";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class8.obfuscatedClassName);
	}

	static getField68(){
		return new class113(super.getField(class8.obfuscatedClassName,"aa", []));
	}
	getField75(){
		return  super.getField(class8.obfuscatedClassName,"ai", []);
	}
	getField76(){
		return  super.getField(class8.obfuscatedClassName,"ax", ['int', 1008732215]);
	}

	static onMethod147(todo){
		super.onMethodExecution(class8.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod152(todo){
		super.onMethodExecution(class8.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod143(todo){
		super.onMethodExecution(class8.obfuscatedClassName,"as", todo, []);
	}
	static onMethod141(todo){
		super.onMethodExecution(class8.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class8;
