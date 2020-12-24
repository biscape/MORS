const FriendSystem = require('./friendSystem.js');
const class289 = require('./class289.js');
const class399 = require('./class399.js');


class class381 extends class289 {
	static obfuscatedClassName = "ec";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class381.obfuscatedClassName);
	}

	static getFriendSystem(){
		return new FriendSystem(super.getField(class381.obfuscatedClassName,"re", []));
	}
	static getItemDefinition_fontPlain11(){
		return new class399(super.getField(class381.obfuscatedClassName,"ay", []));
	}

	static onMethod13235(todo){
		super.onMethodExecution(class381.obfuscatedClassName,"bg", todo, []);
	}
	static onMethod13236(todo){
		super.onMethodExecution(class381.obfuscatedClassName,"bh", todo, []);
	}
}
module.exports = class381;
