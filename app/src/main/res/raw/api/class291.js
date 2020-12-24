const LoginType = require('./loginType.js');
const UserList = require('./userList.js');


class class291 extends UserList {
	static obfuscatedClassName = "es";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class291.obfuscatedClassName);
	}

	static getField5991(){
		return  super.getField(class291.obfuscatedClassName,"hm", ['int', 1116427393]);
	}
	getField5993(){
		return new LoginType(super.getField(class291.obfuscatedClassName,"aa", []));
	}

	static onNewTypedArray(todo){
		super.onMethodExecution(class291.obfuscatedClassName,"at", todo, []);
	}
	static onMethod10704(todo){
		super.onMethodExecution(class291.obfuscatedClassName,"ae", todo, []);
	}
	static onLoadWorlds(todo){
		super.onMethodExecution(class291.obfuscatedClassName,"ag", todo, []);
	}
	static onMethod10707(todo){
		super.onMethodExecution(class291.obfuscatedClassName,"bh", todo, []);
	}
}
module.exports = class291;
