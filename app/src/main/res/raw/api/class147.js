const Interceptor = require('./core/apicore.js');


class class147 extends Interceptor {
	static obfuscatedClassName = "jt";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class147.obfuscatedClassName);
	}

	getField3616(){
		return  super.getField(class147.obfuscatedClassName,"ak", ['int', 864300001]);
	}

	static onMethod6052(todo){
		super.onMethodExecution(class147.obfuscatedClassName,"ak", todo, []);
	}
	static onCompareTo(todo){
		super.onMethodExecution(class147.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class147;
