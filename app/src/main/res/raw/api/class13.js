const Interceptor = require('./core/apicore.js');


class class13 extends Interceptor {
	static obfuscatedClassName = "ar";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class13.obfuscatedClassName);
	}

	getField282(){
		return  super.getField(class13.obfuscatedClassName,"aa", []);
	}
	getField283(){
		return  super.getField(class13.obfuscatedClassName,"ab", ['int', 480947255]);
	}

	static onMethod309(todo){
		super.onMethodExecution(class13.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod311(todo){
		super.onMethodExecution(class13.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod307(todo){
		super.onMethodExecution(class13.obfuscatedClassName,"aq", todo, []);
	}
}
module.exports = class13;
