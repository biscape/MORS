const Interceptor = require('./core/apicore.js');


class class105 extends Interceptor {
	static obfuscatedClassName = "he";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class105.obfuscatedClassName);
	}

	getField3221(){
		return new Future(super.getField(class105.obfuscatedClassName,"ae", []));
	}
	getField3222(){
		return new ExecutorService(super.getField(class105.obfuscatedClassName,"ak", []));
	}

	static onMethod5030(todo){
		super.onMethodExecution(class105.obfuscatedClassName,"gi", todo, []);
	}
	static onByteArrayPool_getArray(todo){
		super.onMethodExecution(class105.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod5028(todo){
		super.onMethodExecution(class105.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod5031(todo){
		super.onMethodExecution(class105.obfuscatedClassName,"iv", todo, []);
	}
}
module.exports = class105;
