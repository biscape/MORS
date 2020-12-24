const Interceptor = require('./core/apicore.js');


class class127 extends Interceptor {
	static obfuscatedClassName = "iq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class127.obfuscatedClassName);
	}

	static getField3441(){
		return  super.getField(class127.obfuscatedClassName,"tq", ['int', 891168689]);
	}
	getField3442(){
		return  super.getField(class127.obfuscatedClassName,"ak", []);
	}

	static onMethod5545(todo){
		super.onMethodExecution(class127.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class127.obfuscatedClassName,"", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(class127.obfuscatedClassName,"", todo, []);
	}
	static onMethod5538(todo){
		super.onMethodExecution(class127.obfuscatedClassName,"af", todo, []);
	}
}
module.exports = class127;
