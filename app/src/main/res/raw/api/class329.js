const class64 = require('./class64.js');


class class329 extends class64 {
	static obfuscatedClassName = "kk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class329.obfuscatedClassName);
	}

	getField6289(){
		return  super.getField(class329.obfuscatedClassName,"ae", []);
	}

	static onMethod11483(todo){
		super.onMethodExecution(class329.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class329.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class329;
