const Interceptor = require('./core/apicore.js');


class AbstractSocket extends Interceptor {
	static obfuscatedClassName = "nb";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AbstractSocket.obfuscatedClassName);
	}


	static onClose(todo){
		super.onMethodExecution(AbstractSocket.obfuscatedClassName,"ae", todo, []);
	}
	static onWrite(todo){
		super.onMethodExecution(AbstractSocket.obfuscatedClassName,"al", todo, []);
	}
	static onRead(todo){
		super.onMethodExecution(AbstractSocket.obfuscatedClassName,"as", todo, []);
	}
	static onVmethod12077(todo){
		super.onMethodExecution(AbstractSocket.obfuscatedClassName,"ai", todo, []);
	}
	static onAvailable(todo){
		super.onMethodExecution(AbstractSocket.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = AbstractSocket;
