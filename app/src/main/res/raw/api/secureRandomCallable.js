const AbstractSocket = require('./abstractSocket.js');
const Interceptor = require('./core/apicore.js');


class SecureRandomCallable extends Interceptor {
	static obfuscatedClassName = "jc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SecureRandomCallable.obfuscatedClassName);
	}

	static getJs5Socket(){
		return new AbstractSocket(super.getField(SecureRandomCallable.obfuscatedClassName,"cz", []));
	}

	static onCall(todo){
		super.onMethodExecution(SecureRandomCallable.obfuscatedClassName,"", todo, []);
	}
}
module.exports = SecureRandomCallable;
