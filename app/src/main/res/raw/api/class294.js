const class318 = require('./class318.js');
const UserList = require('./userList.js');


class class294 extends UserList {
	static obfuscatedClassName = "ez";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class294.obfuscatedClassName);
	}

	static getField6004(){
		return new class318(super.getField(class294.obfuscatedClassName,"bs", []));
	}

	static onNewTypedArray(todo){
		super.onMethodExecution(class294.obfuscatedClassName,"at", todo, []);
	}
	static onGetWindowedMode(todo){
		super.onMethodExecution(class294.obfuscatedClassName,"cm", todo, []);
	}
}
module.exports = class294;
