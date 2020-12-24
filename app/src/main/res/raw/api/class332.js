const class64 = require('./class64.js');


class class332 extends class64 {
	static obfuscatedClassName = "kq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class332.obfuscatedClassName);
	}

	getField6300(){
		return  super.getField(class332.obfuscatedClassName,"ae", []);
	}

	static onMethod11509(todo){
		super.onMethodExecution(class332.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class332.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class332;
