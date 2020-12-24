const AbstractByteArrayCopier = require('./abstractByteArrayCopier.js');


class DirectByteArrayCopier extends AbstractByteArrayCopier {
	static obfuscatedClassName = "ns";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DirectByteArrayCopier.obfuscatedClassName);
	}

	getDirectBuffer(){
		return new ByteBuffer(super.getField(DirectByteArrayCopier.obfuscatedClassName,"ak", []));
	}

	static onSet(todo){
		super.onMethodExecution(DirectByteArrayCopier.obfuscatedClassName,"ae", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(DirectByteArrayCopier.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod12097(todo){
		super.onMethodExecution(DirectByteArrayCopier.obfuscatedClassName,"an", todo, []);
	}
}
module.exports = DirectByteArrayCopier;
