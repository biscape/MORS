const class64 = require('./class64.js');
const Archive = require('./archive.js');


class class326 extends class64 {
	static obfuscatedClassName = "kd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class326.obfuscatedClassName);
	}

	static getField6282(){
		return new Archive(super.getField(class326.obfuscatedClassName,"cr", []));
	}
	getField6284(){
		return  super.getField(class326.obfuscatedClassName,"ae", []);
	}

	static onMethod11461(todo){
		super.onMethodExecution(class326.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class326.obfuscatedClassName,"", todo, []);
	}
}
module.exports = class326;
