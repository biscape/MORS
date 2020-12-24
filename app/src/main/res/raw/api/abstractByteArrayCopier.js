const Interceptor = require('./core/apicore.js');


class AbstractByteArrayCopier extends Interceptor {
	static obfuscatedClassName = "nf";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, AbstractByteArrayCopier.obfuscatedClassName);
	}


	static onSet(todo){
		super.onMethodExecution(AbstractByteArrayCopier.obfuscatedClassName,"ae", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(AbstractByteArrayCopier.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = AbstractByteArrayCopier;
