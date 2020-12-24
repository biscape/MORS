const Interceptor = require('./core/apicore.js');


class class14 extends Interceptor {
	static obfuscatedClassName = "as";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class14.obfuscatedClassName);
	}

	static getField289(){
		return  super.getField(class14.obfuscatedClassName,"gm", []);
	}

	static onMethod319(todo){
		super.onMethodExecution(class14.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class14;
