const LoginType = require('./loginType.js');
const class285 = require('./class285.js');
const class291 = require('./class291.js');
const Interceptor = require('./core/apicore.js');


class FriendSystem extends Interceptor {
	static obfuscatedClassName = "hq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, FriendSystem.obfuscatedClassName);
	}

	getFriendsList(){
		return new class285(super.getField(FriendSystem.obfuscatedClassName,"ah", []));
	}
	getField3294(){
		return  super.getField(FriendSystem.obfuscatedClassName,"aj", []);
	}
	getIgnoreList(){
		return new class291(super.getField(FriendSystem.obfuscatedClassName,"as", []));
	}
	getLoginType(){
		return new LoginType(super.getField(FriendSystem.obfuscatedClassName,"ax", []));
	}

	static onIsFriendAndHasWorld(todo){
		super.onMethodExecution(FriendSystem.obfuscatedClassName,"au", todo, []);
	}
	static onMethod5141(todo){
		super.onMethodExecution(FriendSystem.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = FriendSystem;
