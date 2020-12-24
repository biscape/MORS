const Interceptor = require('./core/apicore.js');


class class65 extends Interceptor {
	static obfuscatedClassName = "fb";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class65.obfuscatedClassName);
	}

	static getField2481(){
		return  super.getField(class65.obfuscatedClassName,"cn", []);
	}
	static getField2483(){
		return  super.getField(class65.obfuscatedClassName,"di", ['int', 528879319]);
	}

	static onIntToString(todo){
		super.onMethodExecution(class65.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod4032(todo){
		super.onMethodExecution(class65.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class65;
