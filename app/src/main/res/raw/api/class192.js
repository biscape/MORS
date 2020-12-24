const Interceptor = require('./core/apicore.js');


class class192 extends Interceptor {
	static obfuscatedClassName = "mq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class192.obfuscatedClassName);
	}


	static onClearIntArray(todo){
		super.onMethodExecution(class192.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = class192;
