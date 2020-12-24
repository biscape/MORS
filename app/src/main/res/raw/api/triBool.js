const Interceptor = require('./core/apicore.js');


class TriBool extends Interceptor {
	static obfuscatedClassName = "eg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, TriBool.obfuscatedClassName);
	}

	static getTriBool_true(){
		return new TriBool(super.getField(TriBool.obfuscatedClassName,"ae", []));
	}
	static getTriBool_false(){
		return new TriBool(super.getField(TriBool.obfuscatedClassName,"ai", []));
	}
	static getField2427(){
		return new TriBool(super.getField(TriBool.obfuscatedClassName,"ak", []));
	}

	static onMethod3902(todo){
		super.onMethodExecution(TriBool.obfuscatedClassName,"aa", todo, []);
	}
	static onRequestNetFile(todo){
		super.onMethodExecution(TriBool.obfuscatedClassName,"ah", todo, []);
	}
}
module.exports = TriBool;
