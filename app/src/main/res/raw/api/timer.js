const Interceptor = require('./core/apicore.js');


class Timer extends Interceptor {
	static obfuscatedClassName = "or";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Timer.obfuscatedClassName);
	}

	getField4081(){
		return  super.getField(Timer.obfuscatedClassName,"aa", []);
	}
	getField4083(){
		return  super.getField(Timer.obfuscatedClassName,"ae", ['long', 3692227529450902253]);
	}
	getField4084(){
		return  super.getField(Timer.obfuscatedClassName,"ah", []);
	}
	getField4086(){
		return  super.getField(Timer.obfuscatedClassName,"aj", ['int', 2026006499]);
	}
	getField4088(){
		return  super.getField(Timer.obfuscatedClassName,"al", []);
	}
	getField4089(){
		return  super.getField(Timer.obfuscatedClassName,"as", []);
	}
	getField4085(){
		return  super.getField(Timer.obfuscatedClassName,"ai", []);
	}
	getField4087(){
		return  super.getField(Timer.obfuscatedClassName,"ak", ['long', 1784408969886090513]);
	}
	getField4090(){
		return  super.getField(Timer.obfuscatedClassName,"ax", []);
	}
	getField4082(){
		return  super.getField(Timer.obfuscatedClassName,"ab", []);
	}

	static onMethod7084(todo){
		super.onMethodExecution(Timer.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = Timer;
