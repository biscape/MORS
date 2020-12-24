const IterableNodeDeque = require('./iterableNodeDeque.js');
const Interceptor = require('./core/apicore.js');


class class252 extends Interceptor {
	static obfuscatedClassName = "ps";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class252.obfuscatedClassName);
	}

	static getReflectionChecks(){
		return new IterableNodeDeque(super.getField(class252.obfuscatedClassName,"ak", []));
	}

}
module.exports = class252;
