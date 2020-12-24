const Interceptor = require('./core/apicore.js');


class LoginType extends Interceptor {
	static obfuscatedClassName = "nk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, LoginType.obfuscatedClassName);
	}

	static getField3966(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"aa", []));
	}
	static getField3967(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"ae", []));
	}
	static getField3968(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"ah", []));
	}
	static getField3970(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"aj", []));
	}
	static getField3972(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"al", []));
	}
	static getField3973(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"as", []));
	}
	static getField3969(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"ai", []));
	}
	static getOldscape(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"ak", []));
	}
	static getField3974(){
		return new LoginType(super.getField(LoginType.obfuscatedClassName,"ax", []));
	}
	getField3976(){
		return  super.getField(LoginType.obfuscatedClassName,"af", []);
	}
	getField3975(){
		return  super.getField(LoginType.obfuscatedClassName,"ab", ['int', 432973165]);
	}

	static onToString(todo){
		super.onMethodExecution(LoginType.obfuscatedClassName,"", todo, []);
	}
}
module.exports = LoginType;
