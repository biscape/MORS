const Interceptor = require('./core/apicore.js');


class class354 extends Interceptor {
	static obfuscatedClassName = "oi";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class354.obfuscatedClassName);
	}

	static getField6427(){
		return new File(super.getField(class354.obfuscatedClassName,"ae", []));
	}

	static onMethod12104(todo){
		super.onMethodExecution(class354.obfuscatedClassName,"aa", todo, []);
	}
	static onVmethod12183(todo){
		super.onMethodExecution(class354.obfuscatedClassName,"ae", todo, []);
	}
	static onVmethod12188(todo){
		super.onMethodExecution(class354.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class354;
