const DualNode = require('./dualNode.js');
const Interceptor = require('./core/apicore.js');


class DualNodeDeque extends Interceptor {
	static obfuscatedClassName = "fs";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DualNodeDeque.obfuscatedClassName);
	}

	getSentinel(){
		return new DualNode(super.getField(DualNodeDeque.obfuscatedClassName,"ak", []));
	}

	static onAddLast(todo){
		super.onMethodExecution(DualNodeDeque.obfuscatedClassName,"ae", todo, []);
	}
	static onRemoveLast(todo){
		super.onMethodExecution(DualNodeDeque.obfuscatedClassName,"ai", todo, []);
	}
	static onAddFirst(todo){
		super.onMethodExecution(DualNodeDeque.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = DualNodeDeque;
