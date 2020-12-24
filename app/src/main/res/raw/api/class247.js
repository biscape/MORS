const Interceptor = require('./core/apicore.js');


class class247 extends Interceptor {
	static obfuscatedClassName = "pl";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class247.obfuscatedClassName);
	}

	getField4296(){
		return  super.getField(class247.obfuscatedClassName,"ak", []);
	}

	static onMethod7383(todo){
		super.onMethodExecution(class247.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class247;
