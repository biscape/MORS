const Interceptor = require('./core/apicore.js');


class ClientPreferences extends Interceptor {
	static obfuscatedClassName = "ha";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, ClientPreferences.obfuscatedClassName);
	}

	static getField3154(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"ak", ['int', 2062630101]);
	}
	getField3157(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"aa", []);
	}
	getField3159(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"af", ['int', 8715397]);
	}
	getField3160(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"ah", ['int', 1118978805]);
	}
	getHideUsername(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"aj", []);
	}
	getParameters(){
		return new LinkedHashMap(super.getField(ClientPreferences.obfuscatedClassName,"al", []));
	}
	getField3164(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"aq", ['int', 1742476911]);
	}
	getRememberedUsername(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"as", []);
	}
	getField3161(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"ai", []);
	}
	getField3166(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"ax", []);
	}
	getField3158(){
		return  super.getField(ClientPreferences.obfuscatedClassName,"ab", ['int', 1542453615]);
	}

	static onToBuffer(todo){
		super.onMethodExecution(ClientPreferences.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod4902(todo){
		super.onMethodExecution(ClientPreferences.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4889(todo){
		super.onMethodExecution(ClientPreferences.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = ClientPreferences;
