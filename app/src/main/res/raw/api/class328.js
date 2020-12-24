const class64 = require('./class64.js');


class class328 extends class64 {
	static obfuscatedClassName = "kj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class328.obfuscatedClassName);
	}

	getField6287(){
		return  super.getField(class328.obfuscatedClassName,"ae", []);
	}

	static onMethod11475(todo){
		super.onMethodExecution(class328.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class328.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class328;
