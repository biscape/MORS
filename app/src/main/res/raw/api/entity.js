const DualNode = require('./dualNode.js');


class Entity extends DualNode {
	static obfuscatedClassName = "bw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Entity.obfuscatedClassName);
	}

	getHeight(){
		return  super.getField(Entity.obfuscatedClassName,"bm", ['int', 111065049]);
	}

	static onGetModel(todo){
		super.onMethodExecution(Entity.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod12210(todo){
		super.onMethodExecution(Entity.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod12209(todo){
		super.onMethodExecution(Entity.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = Entity;
