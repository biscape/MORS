const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');


class DevicePcmPlayerProvider extends Interceptor {
	static obfuscatedClassName = "hh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DevicePcmPlayerProvider.obfuscatedClassName);
	}

	static getField6104(){
		return new IndexedSprite(super.getField(DevicePcmPlayerProvider.obfuscatedClassName,"ef", []));
	}

	static onPlayer(todo){
		super.onMethodExecution(DevicePcmPlayerProvider.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod11095(todo){
		super.onMethodExecution(DevicePcmPlayerProvider.obfuscatedClassName,"dh", todo, []);
	}
}
module.exports = DevicePcmPlayerProvider;
