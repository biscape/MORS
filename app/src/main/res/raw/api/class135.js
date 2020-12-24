const Interceptor = require('./core/apicore.js');


class class135 extends Interceptor {
	static obfuscatedClassName = "jf";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class135.obfuscatedClassName);
	}

	static getField3505(){
		return  super.getField(class135.obfuscatedClassName,"ar", ['int', 1737438527]);
	}

	static onMethod5657(todo){
		super.onMethodExecution(class135.obfuscatedClassName,"dj", todo, []);
	}
	static onInvalidateWidget(todo){
		super.onMethodExecution(class135.obfuscatedClassName,"gc", todo, []);
	}
}
module.exports = class135;
