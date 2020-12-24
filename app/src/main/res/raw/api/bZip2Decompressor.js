const BZip2State = require('./bZip2State.js');
const Interceptor = require('./core/apicore.js');


class BZip2Decompressor extends Interceptor {
	static obfuscatedClassName = "kh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, BZip2Decompressor.obfuscatedClassName);
	}

	static getBZip2Decompressor_state(){
		return new BZip2State(super.getField(BZip2Decompressor.obfuscatedClassName,"al", []));
	}

	static onMethod6253(todo){
		super.onMethodExecution(BZip2Decompressor.obfuscatedClassName,"ai", todo, []);
	}
	static onBZip2Decompressor_decompress(todo){
		super.onMethodExecution(BZip2Decompressor.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = BZip2Decompressor;
