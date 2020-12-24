const class384 = require('./class384.js');
const Interceptor = require('./core/apicore.js');


class class12 extends Interceptor {
	static obfuscatedClassName = "aq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class12.obfuscatedClassName);
	}

	static getField273(){
		return  super.getField(class12.obfuscatedClassName,"cg", ['long', 5442729073549109637]);
	}
	static getField274(){
		return new class384(super.getField(class12.obfuscatedClassName,"oi", []));
	}
	getField275(){
		return  super.getField(class12.obfuscatedClassName,"aa", ['int', 480455015]);
	}
	getField276(){
		return  super.getField(class12.obfuscatedClassName,"al", []);
	}

	static onMethod289(todo){
		super.onMethodExecution(class12.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class12;
