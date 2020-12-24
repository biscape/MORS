const Interceptor = require('./core/apicore.js');


class Username extends Interceptor {
	static obfuscatedClassName = "ef";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Username.obfuscatedClassName);
	}

	getCleanName(){
		return  super.getField(Username.obfuscatedClassName,"ae", []);
	}
	getName(){
		return  super.getField(Username.obfuscatedClassName,"ak", []);
	}

	static onHasCleanName(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod3888(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"ai", todo, []);
	}
	static onGetName(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"ak", todo, []);
	}
	static onHashCode(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"", todo, []);
	}
	static onCompareToTyped(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"compareTo", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"", todo, []);
	}
	static onToString(todo){
		super.onMethodExecution(Username.obfuscatedClassName,"", todo, []);
	}
}
module.exports = Username;
