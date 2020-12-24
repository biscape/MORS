const Interceptor = require('./core/apicore.js');


class class233 extends Interceptor {
	static obfuscatedClassName = "oq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class233.obfuscatedClassName);
	}


	static onNewArchive(todo){
		super.onMethodExecution(class233.obfuscatedClassName,"bf", todo, []);
	}
}
module.exports = class233;
