const class64 = require('./class64.js');


class class327 extends class64 {
	static obfuscatedClassName = "ke";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class327.obfuscatedClassName);
	}

	getField6286(){
		return  super.getField(class327.obfuscatedClassName,"ae", []);
	}

	static onMethod11468(todo){
		super.onMethodExecution(class327.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class327.obfuscatedClassName,"", todo, []);
	}
	static onNewRunException(todo){
		super.onMethodExecution(class327.obfuscatedClassName,"ae", todo, []);
	}
	static onCharToByteCp1252(todo){
		super.onMethodExecution(class327.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class327;
