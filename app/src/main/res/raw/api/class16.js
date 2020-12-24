const class384 = require('./class384.js');
const Interceptor = require('./core/apicore.js');


class class16 extends Interceptor {
	static obfuscatedClassName = "aw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class16.obfuscatedClassName);
	}

	static getField306(){
		return  super.getField(class16.obfuscatedClassName,"ga", []);
	}
	getField309(){
		return  super.getField(class16.obfuscatedClassName,"ak", []);
	}

	static onMethod339(todo){
		super.onMethodExecution(class16.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod333(todo){
		super.onMethodExecution(class16.obfuscatedClassName,"af", todo, []);
	}
	static onMethod335(todo){
		super.onMethodExecution(class16.obfuscatedClassName,"az", todo, []);
	}
}
module.exports = class16;
