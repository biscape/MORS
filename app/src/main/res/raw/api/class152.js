const Interceptor = require('./core/apicore.js');


class class152 extends Interceptor {
	static obfuscatedClassName = "kg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class152.obfuscatedClassName);
	}

	getField3702(){
		return  super.getField(class152.obfuscatedClassName,"ak", []);
	}

	static onMethod6240(todo){
		super.onMethodExecution(class152.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class152.obfuscatedClassName,"", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(class152.obfuscatedClassName,"", todo, []);
	}
	static onMethod6234(todo){
		super.onMethodExecution(class152.obfuscatedClassName,"ap", todo, []);
	}
	static onMethod6233(todo){
		super.onMethodExecution(class152.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class152;
