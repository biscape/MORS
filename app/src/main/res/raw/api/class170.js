const Interceptor = require('./core/apicore.js');
const class302 = require('./class302.js');


class class170 extends Interceptor {
	static obfuscatedClassName = "lk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class170.obfuscatedClassName);
	}

	static getField3784(){
		return new class302(super.getField(class170.obfuscatedClassName,"aj", []));
	}
	static getField3785(){
		return  super.getField(class170.obfuscatedClassName,"ak", []);
	}

	static onMethod6468(todo){
		super.onMethodExecution(class170.obfuscatedClassName,"ah", todo, []);
	}
}
module.exports = class170;
