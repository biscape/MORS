const Interceptor = require('./core/apicore.js');


class class130 extends Interceptor {
	static obfuscatedClassName = "ja";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class130.obfuscatedClassName);
	}

	getField3475(){
		return  super.getField(class130.obfuscatedClassName,"ak", []);
	}

	static onMethod5623(todo){
		super.onMethodExecution(class130.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class130.obfuscatedClassName,"", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(class130.obfuscatedClassName,"", todo, []);
	}
	static onMethod5612(todo){
		super.onMethodExecution(class130.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod5613(todo){
		super.onMethodExecution(class130.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod5614(todo){
		super.onMethodExecution(class130.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class130;
