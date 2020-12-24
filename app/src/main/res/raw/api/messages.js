const IterableDualNodeQueue = require('./iterableDualNodeQueue.js');
const Interceptor = require('./core/apicore.js');
const IterableNodeHashTable = require('./iterableNodeHashTable.js');


class Messages extends Interceptor {
	static obfuscatedClassName = "ju";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Messages.obfuscatedClassName);
	}

	static getMessages_hashTable(){
		return new IterableNodeHashTable(super.getField(Messages.obfuscatedClassName,"ae", []));
	}
	static getMessages_queue(){
		return new IterableDualNodeQueue(super.getField(Messages.obfuscatedClassName,"ai", []));
	}
	static getMessages_channels(){
		return  super.getField(Messages.obfuscatedClassName,"ak", []);
	}
	static getMessages_count(){
		return  super.getField(Messages.obfuscatedClassName,"ax", []);
	}

	static onMethod6057(todo){
		super.onMethodExecution(Messages.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod6067(todo){
		super.onMethodExecution(Messages.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod6082(todo){
		super.onMethodExecution(Messages.obfuscatedClassName,"dq", todo, []);
	}
}
module.exports = Messages;
