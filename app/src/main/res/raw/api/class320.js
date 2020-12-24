const class64 = require('./class64.js');


class class320 extends class64 {
	static obfuscatedClassName = "jr";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class320.obfuscatedClassName);
	}

	getField6258(){
		return  super.getField(class320.obfuscatedClassName,"ae", []);
	}

	static onMethod11395(todo){
		super.onMethodExecution(class320.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class320.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class320;
