const Interceptor = require('./core/apicore.js');


class class185 extends Interceptor {
	static obfuscatedClassName = "md";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class185.obfuscatedClassName);
	}

	static getField3841(){
		return  super.getField(class185.obfuscatedClassName,"ai", []);
	}
	static getField3842(){
		return  super.getField(class185.obfuscatedClassName,"ak", []);
	}

	static onMethod6620(todo){
		super.onMethodExecution(class185.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod6623(todo){
		super.onMethodExecution(class185.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod6628(todo){
		super.onMethodExecution(class185.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = class185;
