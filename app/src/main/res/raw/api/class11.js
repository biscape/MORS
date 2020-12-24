const class228 = require('./class228.js');
const Widget = require('./widget.js');
const Interceptor = require('./core/apicore.js');


class class11 extends Interceptor {
	static obfuscatedClassName = "ap";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class11.obfuscatedClassName);
	}

	static getField264(){
		return new class228(super.getField(class11.obfuscatedClassName,"rc", []));
	}
	static getField262(){
		return new Widget(super.getField(class11.obfuscatedClassName,"jg", []));
	}

	static onMethod286(todo){
		super.onMethodExecution(class11.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod285(todo){
		super.onMethodExecution(class11.obfuscatedClassName,"ay", todo, []);
	}
}
module.exports = class11;
