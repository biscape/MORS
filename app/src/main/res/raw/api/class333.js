const class64 = require('./class64.js');


class class333 extends class64 {
	static obfuscatedClassName = "ks";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class333.obfuscatedClassName);
	}

	getField6303(){
		return  super.getField(class333.obfuscatedClassName,"ae", []);
	}

	static onMethod11516(todo){
		super.onMethodExecution(class333.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class333.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class333;
