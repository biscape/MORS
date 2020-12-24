const Interceptor = require('./core/apicore.js');


class class9 extends Interceptor {
	static obfuscatedClassName = "an";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class9.obfuscatedClassName);
	}

	getField79(){
		return  super.getField(class9.obfuscatedClassName,"ak", []);
	}

	static onMethod161(todo){
		super.onMethodExecution(class9.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod156(todo){
		super.onMethodExecution(class9.obfuscatedClassName,"aa", todo, []);
	}
}
module.exports = class9;
