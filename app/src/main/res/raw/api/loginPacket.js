const Interceptor = require('./core/apicore.js');


class LoginPacket extends Interceptor {
	static obfuscatedClassName = "ob";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, LoginPacket.obfuscatedClassName);
	}

	static getField6418(){
		return new LoginPacket(super.getField(LoginPacket.obfuscatedClassName,"ae", []));
	}
	static getField6420(){
		return new LoginPacket(super.getField(LoginPacket.obfuscatedClassName,"ah", []));
	}
	static getLoginPacket_indexedValues(){
		return  super.getField(LoginPacket.obfuscatedClassName,"al", []);
	}
	static getField6424(){
		return new LoginPacket(super.getField(LoginPacket.obfuscatedClassName,"as", []));
	}
	static getField6421(){
		return new LoginPacket(super.getField(LoginPacket.obfuscatedClassName,"ai", []));
	}
	static getField6422(){
		return new LoginPacket(super.getField(LoginPacket.obfuscatedClassName,"ak", []));
	}
	static getField6425(){
		return new LoginPacket(super.getField(LoginPacket.obfuscatedClassName,"ax", []));
	}
	getId(){
		return  super.getField(LoginPacket.obfuscatedClassName,"aj", ['int', 1805698327]);
	}

}
module.exports = LoginPacket;
