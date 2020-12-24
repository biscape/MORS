const Interceptor = require('./core/apicore.js');


class Bounds extends Interceptor {
	static obfuscatedClassName = "pc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Bounds.obfuscatedClassName);
	}

	getLowY(){
		return  super.getField(Bounds.obfuscatedClassName,"ae", ['int', 81513391]);
	}
	getHighX(){
		return  super.getField(Bounds.obfuscatedClassName,"ai", ['int', 350573253]);
	}
	getLowX(){
		return  super.getField(Bounds.obfuscatedClassName,"ak", ['int', 557035921]);
	}
	getHighY(){
		return  super.getField(Bounds.obfuscatedClassName,"ax", ['int', 1950450395]);
	}

	static onMethod7124(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"aa", todo, []);
	}
	static onSetHigh(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod7129(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"af", todo, []);
	}
	static onMethod7133(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod7135(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"al", todo, []);
	}
	static onMethod7140(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod7142(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"as", todo, []);
	}
	static onSetLow(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod7125(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"ab", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"", todo, []);
	}
	static onToString(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"", todo, []);
	}
	static onMethod7123(todo){
		super.onMethodExecution(Bounds.obfuscatedClassName,"at", todo, []);
	}
}
module.exports = Bounds;
