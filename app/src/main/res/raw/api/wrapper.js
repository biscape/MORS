const DualNode = require('./dualNode.js');


class Wrapper extends DualNode {
	static obfuscatedClassName = "ge";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Wrapper.obfuscatedClassName);
	}

	getSize(){
		return  super.getField(Wrapper.obfuscatedClassName,"ae", []);
	}

	static onIsSoft(todo){
		super.onMethodExecution(Wrapper.obfuscatedClassName,"ae", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(Wrapper.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = Wrapper;
