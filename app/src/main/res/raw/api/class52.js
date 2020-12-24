const Interceptor = require('./core/apicore.js');


class class52 extends Interceptor {
	static obfuscatedClassName = "dn";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class52.obfuscatedClassName);
	}

	static getField2381(){
		return new class52(super.getField(class52.obfuscatedClassName,"ae", []));
	}
	static getField2382(){
		return  super.getField(class52.obfuscatedClassName,"ah", ['int', 1426058467]);
	}
	static getField2383(){
		return new class52(super.getField(class52.obfuscatedClassName,"ak", []));
	}
	getField2386(){
		return  super.getField(class52.obfuscatedClassName,"ai", ['int', 444129049]);
	}

	static onMethod3749(todo){
		super.onMethodExecution(class52.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod3752(todo){
		super.onMethodExecution(class52.obfuscatedClassName,"bq", todo, []);
	}
	static onSleepExact(todo){
		super.onMethodExecution(class52.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class52;
