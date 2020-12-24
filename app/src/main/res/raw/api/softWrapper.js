const Wrapper = require('./wrapper.js');


class SoftWrapper extends Wrapper {
	static obfuscatedClassName = "gx";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SoftWrapper.obfuscatedClassName);
	}

	getField7503(){
		return new SoftReference(super.getField(SoftWrapper.obfuscatedClassName,"ak", []));
	}

	static onIsSoft(todo){
		super.onMethodExecution(SoftWrapper.obfuscatedClassName,"ae", todo, []);
	}
	static onGet(todo){
		super.onMethodExecution(SoftWrapper.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = SoftWrapper;
