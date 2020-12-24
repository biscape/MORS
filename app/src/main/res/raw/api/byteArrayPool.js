const Interceptor = require('./core/apicore.js');


class ByteArrayPool extends Interceptor {
	static obfuscatedClassName = "mu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ByteArrayPool.obfuscatedClassName);
	}

	static getByteArrayPool_arrays(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"aa", []);
	}
	static getByteArrayPool_mediumCount(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"ae", ['int', 2059784127]);
	}
	static getByteArrayPool_medium(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"ah", []);
	}
	static getByteArrayPool_altSizeArrayCounts(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"al", []);
	}
	static getField3897(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"as", []);
	}
	static getField3894(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"ai", ['int', 1102223469]);
	}
	static getField3895(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"ak", []);
	}
	static getField3898(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"ax", []);
	}
	static getField3891(){
		return  super.getField(ByteArrayPool.obfuscatedClassName,"ab", []);
	}

	static onMethod6713(todo){
		super.onMethodExecution(ByteArrayPool.obfuscatedClassName,"ae", todo, []);
	}
}
module.exports = ByteArrayPool;
