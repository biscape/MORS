const Node = require('./node.js');


class HealthBarUpdate extends Node {
	static obfuscatedClassName = "ii";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, HealthBarUpdate.obfuscatedClassName);
	}

	getField6167(){
		return  super.getField(HealthBarUpdate.obfuscatedClassName,"ae", ['int', 1211494055]);
	}
	getField6168(){
		return  super.getField(HealthBarUpdate.obfuscatedClassName,"ai", ['int', 166824497]);
	}
	getCycle(){
		return  super.getField(HealthBarUpdate.obfuscatedClassName,"ak", ['int', 496001411]);
	}
	getField6170(){
		return  super.getField(HealthBarUpdate.obfuscatedClassName,"ax", []);
	}

	static onMethod11219(todo){
		super.onMethodExecution(HealthBarUpdate.obfuscatedClassName,"ac", todo, []);
	}
}
module.exports = HealthBarUpdate;
