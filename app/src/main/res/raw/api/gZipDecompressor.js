const Interceptor = require('./core/apicore.js');


class GZipDecompressor extends Interceptor {
	static obfuscatedClassName = "mm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, GZipDecompressor.obfuscatedClassName);
	}

	getInflater(){
		return new Inflater(super.getField(GZipDecompressor.obfuscatedClassName,"ak", []));
	}

	static onDecompress(todo){
		super.onMethodExecution(GZipDecompressor.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod6655(todo){
		super.onMethodExecution(GZipDecompressor.obfuscatedClassName,"aa", todo, []);
	}
}
module.exports = GZipDecompressor;
