const Interceptor = require('./core/apicore.js');


class class202 extends Interceptor {
	static obfuscatedClassName = "nd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class202.obfuscatedClassName);
	}

	getField3935(){
		return  super.getField(class202.obfuscatedClassName,"ae", ['int', 1502066527]);
	}
	getField3936(){
		return  super.getField(class202.obfuscatedClassName,"ak", []);
	}

	static onMethod6794(todo){
		super.onMethodExecution(class202.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod6798(todo){
		super.onMethodExecution(class202.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class202;
